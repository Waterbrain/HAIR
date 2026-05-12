# HA Infrared Platform -- RX Gap Analysis

## Summary

The HA 2026.4 infrared entity platform is emitter-only. IR signals received
by ESPHome's `ir_rf_proxy` RX never reach the HA event bus because the HA
ESPHome integration does not handle `InfraredReceivedSignal` API messages.

## What the infrared platform does (HA 2026.4)

The `infrared` entity platform (PR home-assistant/core#162251, released 2026.4)
provides:

- `InfraredEntity` base class with `async_send_command()`
- Helper functions: `infrared.async_get_emitters()`, `infrared.async_send_command()`
- Entity state: timestamp of last command sent
- No services, events, or APIs for receiving/capturing signals

The architecture proposal (home-assistant/architecture#1316) explicitly stated:

> This proposal focuses on emitters, not receivers, but tries to keep the
> basis in place to make it easier to extend to receivers in the future.

Approved in core meeting 2026-01-22. Implemented March 2026.

Developer docs: https://developers.home-assistant.io/docs/core/entity/infrared/

## What ESPHome's ir_rf_proxy does on the RX side

ESPHome's `ir_rf_proxy` with `remote_receiver_id` captures raw timings from
the `remote_receiver` component and sends them to API clients via the ESPHome
native API as `InfraredReceivedSignal` messages.

The ESPHome side works correctly. Received signals are decoded and visible as
Pronto codes in ESPHome device logs.

ESPHome docs: https://esphome.io/components/ir_rf_proxy/

## Where the pipeline breaks

```
1. ESPHome hardware receives IR signal        --> WORKS
2. ESPHome sends InfraredReceivedSignal        --> SENT, but...
   via native API to HA
3. HA ESPHome integration receives message     --> NOT HANDLED
   (only TX side of ir_rf_proxy is implemented)
4. HA fires event on bus                       --> NEVER HAPPENS
5. HAIR SignalMonitor picks up event           --> NOTHING TO PICK UP
```

The `esphome.remote_received` event that HAIR's SignalMonitor and
ESPHomeCaptureProvider subscribe to is never fired by the current HA ESPHome
integration for `ir_rf_proxy` devices. That event name was a convention
from the older `remote_receiver` path, not the new infrared platform.

Confirmed by ESPHome issue #14218: the HA ESPHome integration did not know
how to handle `InfraredInfo` entities at all until 2026.4, and even then only
the TX side was implemented.

## Options evaluated

| Option | Approach | Pros | Cons |
|--------|----------|------|------|
| 1 | Use `aioesphomeapi` directly in HAIR | Works with ir_rf_proxy as-is | Adds dependency, complex API subscription |
| **2** | **ESPHome event bridge (single `on_pronto` trigger)** | **Zero HAIR code changes, catches all signals, simple** | **ESPHome YAML change needed** |
| 3 | Wait for InfraredReceiverEntity | Clean, official, long-term | Blocks on HA 2026.6-2026.7 |

**Decision: Option 2 now, migrate to Option 3 when available.**

Option 2 uses a single `on_pronto` trigger rather than per-protocol triggers.
Pronto is the universal raw IR format -- every signal ESPHome receives gets
decoded to Pronto regardless of manufacturer or protocol. HAIR is a
capture-and-replay tool, not a protocol decoder. We memorize raw signals
and play them back. No decoding needed.

See `../plans/esphome-event-bridge.md` for Option 2 implementation plan.
See `infrared-receiver-roadmap.md` for Option 3 timeline.

## Key references

- Architecture proposal (emitter): home-assistant/architecture#1316
- Architecture proposal (receiver): home-assistant/architecture#1372
- HA core PR (infrared platform): home-assistant/core#162251
- ESPHome issue (entity setup): esphome/esphome#14218
- HA 2026.4 release: https://community.home-assistant.io/t/2026-4-infrared-never-left-the-chat/1000731
