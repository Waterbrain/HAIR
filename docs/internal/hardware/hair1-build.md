# HAIR1 IR Bridge -- Hardware Build

## Board

ESP32-C3 Super Mini (8 pins per side, RISC-V, RMT peripheral for IR)

## TX Circuit

GPIO9 -> IRLZ44N MOSFET -> 10 ohm resistor -> TX-LED (940nm IR LED)

- MOSFET pinout (facing tab-away): Gate=left, Drain=middle, Source=right
- 10k pulldown resistor between Gate and Source
- LED powered from 5V rail via low-side MOSFET switch
- IRLZ44N is logic-level (Vgs threshold ~1-2V), driven directly by 3.3V GPIO

## RX Circuit

GPIO8 <- VS1838B OUT

- VS1838B pinout (facing dome, left to right): OUT, GND, VCC
- 10k pull-up resistor between OUT and VCC
- VCC = 3V3, GND = middle pin
- Active-low output, 38kHz carrier frequency

## GPIO Notes

GPIO8 and GPIO9 are strapping pins on the ESP32-C3. ESPHome logs strapping
pin warnings at boot -- these are non-critical and IR functions normally
after boot completes.

## ESPHome Config

`esphome/hair1.yaml` in the repo root.

Device is online at 10.0.10.119, adopted in Production HA (VM100) ESPHome
integration.

## Signal approach

HAIR captures all IR signals as raw Pronto hex strings. No protocol decoding
(NEC, Samsung, etc.) is performed. Signals are memorized as-is and replayed
verbatim on TX devices. This keeps the system manufacturer-agnostic and
captures any IR signal regardless of protocol.

Future considerations: signal database import/export, community libraries.

## Status

- TX hardware: verified working
- RX hardware: verified working (Pronto codes visible in ESPHome device logs)
- TX via HA: working (`infrared.hair1_hair1_tx` entity sends commands)
- RX via HA: uses ESPHome event bridge (`on_pronto` trigger fires
  `homeassistant.event` on HA bus). See `../plans/esphome-event-bridge.md`
