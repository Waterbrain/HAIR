# InfraredReceiverEntity Roadmap

## Status

Architecture discussion #1372 ("Add Infrared Receiver Entity") was opened
April 7, 2026 and approved April 20, 2026 by emontnemery.

Listed on the Open Home Foundation roadmap as issue #101, appetite "1-2
cycles." Expected to ship in HA 2026.6 or 2026.7.

## Approved design

- New `InfraredReceiverEntity` class (separate from emitter entity)
- `_handle_received_signal(signal: InfraredReceivedSignal)` method called
  by platform implementations (ESPHome, Broadlink, etc.)
- `async_subscribe_received_signal(callback)` for consumer integrations
  to subscribe to received signals
- Domain helpers: `async_get_receivers()`, `async_subscribe_receiver()`
- Entity state: timestamp of last received signal
- Existing `InfraredEntity` will be renamed to `InfraredEmitterEntity`

## What this means for HAIR

When `InfraredReceiverEntity` ships, HAIR should migrate from the ESPHome
event bridge (see `esphome-event-bridge.md`) to the official platform API.

### Migration plan

1. Add a new event source in `SignalMonitor` that uses
   `infrared.async_subscribe_receiver()` to receive signals from any
   infrared receiver entity (ESPHome, Broadlink, etc.)
2. Parse `InfraredReceivedSignal` objects into HAIR's `CaptureResult` model
3. Keep the `esphome.remote_received` bus listener as fallback for:
   - Older ESPHome devices without ir_rf_proxy
   - Non-infrared-platform setups
   - Transition period while users update their ESPHome configs
4. Remove the ESPHome YAML automation triggers (no longer needed once HA
   handles receiver signals natively)
5. Update `ESPHomeCaptureProvider` to use the receiver subscription API
   instead of bus event listening

### Benefits of migration

- Hardware-agnostic: works with any IR receiver, not just ESPHome
- No ESPHome YAML customization required
- Officially supported and maintained by HA core
- Broadlink devices get receiver support for free
- Consistent data format across all receiver hardware

## References

- Architecture discussion: home-assistant/architecture#1372
- Roadmap issue: Open Home Foundation #101
- Depends on: home-assistant/architecture#1316 (emitter, shipped in 2026.4)
