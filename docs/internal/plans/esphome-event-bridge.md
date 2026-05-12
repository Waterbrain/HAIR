# ESPHome Event Bridge -- Implementation Plan

Interim fix for the IR RX gap until `InfraredReceiverEntity` ships in HA core.
See `../architecture/rx-gap-analysis.md` for background.

## Goal

Bridge the gap between ESPHome's working IR receiver hardware and HAIR's
SignalMonitor by having ESPHome fire `homeassistant.event` events on the HA
bus when signals are received.

Zero HAIR code changes required -- SignalMonitor already listens for
`esphome.remote_received`.

## Design philosophy

HAIR is a capture-and-replay tool, not a protocol decoder. We capture raw
IR signals as Pronto hex strings, fingerprint them for identification, and
replay them verbatim on TX devices. We do not decode NEC addresses, Samsung
commands, or any other protocol-specific fields.

Pronto is the universal raw IR format. Every signal ESPHome receives gets
decoded to Pronto regardless of protocol or manufacturer. One trigger catches
everything.

Future considerations (not in scope now):
- Import/export of signal databases
- Protocol-aware decoding for richer metadata
- Community signal libraries

## Approach

A single `on_pronto` trigger on the `remote_receiver` component catches all
received IR signals and fires them as `homeassistant.event` on the HA bus.

Reference: https://community.home-assistant.io/t/triggering-remote-receiver-on-all-signals/321692

## ESPHome YAML (hair1.yaml)

The entire bridge is four lines added to the existing `remote_receiver` block:

```yaml
  on_pronto:
    then:
      - homeassistant.event:
          event: esphome.remote_received
          data:
            protocol: "PRONTO"
            code: !lambda 'return x.data;'
```

The `ir_rf_proxy` blocks are unchanged -- TX keeps working via the infrared
platform, RX proxy stays for future HA receiver support.

## Data shape

The fired event matches what `event_parser.py` expects:

| Field | Value | Source |
|-------|-------|--------|
| `protocol` | `"PRONTO"` | Static string |
| `code` | Pronto hex string | `x.data` from ESPHome |

The Pronto hex string contains the full signal timing data needed for both
fingerprinting (via EventParser) and replay (via `remote_transmitter.transmit_pronto`).

## HAIR code changes

None. The existing pipeline handles everything:

- `signal_monitor.py` line 76-78: subscribes to `esphome.remote_received`
- `event_parser.py` line 32-57: parses protocol + code into CaptureResult
- Rate limiting and repeat suppression already implemented
- Signal fingerprinting works with protocol + code hash

## Verification

1. Flash updated `hair1.yaml` to HAIR1
2. Point any IR remote at HAIR1
3. Check HA Developer Tools > Events for `esphome.remote_received`
4. Check HAIR Signal Monitor panel for captured signals

## Risks

- `homeassistant.event` requires an active HA API connection. If the
  ESPHome device loses connectivity, events won't fire (but signals
  wouldn't reach HA regardless).
- Long Pronto strings for complex signals. HA events handle arbitrary
  data sizes so this should be fine.
- This is a stopgap. When `InfraredReceiverEntity` ships in HA core,
  HAIR should migrate to `infrared.async_subscribe_receiver()`.

## Sunset plan

When `InfraredReceiverEntity` ships (est. HA 2026.6-2026.7):
1. Migrate HAIR to `infrared.async_subscribe_receiver()`
2. Remove `on_pronto` trigger from `hair1.yaml`
3. Keep `esphome.remote_received` listener as fallback for legacy setups
4. See `../architecture/infrared-receiver-roadmap.md`
