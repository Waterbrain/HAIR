# HAIR Session Handoff

## Current Status

HAIR1 (ESP32-C3 Super Mini IR bridge) is built, flashed, and online in
Production HA. TX works. RX hardware works but signals don't reach HAIR's
Signal Monitor due to a gap in the HA infrared platform (TX-only in 2026.4).

Next step: implement ESPHome event bridge so received signals fire on the
HA bus where HAIR can pick them up.

## Internal Docs

### Hardware
- [HAIR1 Build](docs/internal/hardware/hair1-build.md) -- wiring, pinout, ESPHome config, status

### Architecture
- [RX Gap Analysis](docs/internal/architecture/rx-gap-analysis.md) -- why received IR signals don't reach HA
- [InfraredReceiverEntity Roadmap](docs/internal/architecture/infrared-receiver-roadmap.md) -- HA core receiver platform timeline and HAIR migration plan

### Plans
- [ESPHome Event Bridge](docs/internal/plans/esphome-event-bridge.md) -- interim fix using ESPHome protocol triggers to fire HA bus events

## Code Changes (Committed, Tests Pass -- 16/16)

- `custom_components/hair/capture.py` -- removed entity filter from ESPHome device discovery
- `custom_components/hair/tests/test_capture.py` -- simplified ESPHome discovery tests
- `custom_components/hair/tests/test_config_flow.py` -- removed entity registry mocks
- `esphome/hair1.yaml` -- added ir_rf_proxy for TX and RX

## Pending Work

1. Implement ESPHome event bridge (see plan doc)
2. Test end-to-end: remote -> HAIR1 -> HA bus -> Signal Monitor
3. Commit and deploy

## UX Polish Backlog

- Visual feedback when an unknown signal gets updated in real-time
- Signal list sorting by hit count
