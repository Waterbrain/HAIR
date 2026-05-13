# HAIR - Home Assistant IR

A full admin interface for infrared device management in Home Assistant.

Built on HA's native `infrared` platform (2026.4+), HAIR handles capturing, organizing, and controlling IR commands through a single sidebar panel. No YAML required.

## What you get

- **Signal Sniffer** - Real-time IR signal monitor with fingerprinting, deduplication, and hit tracking
- **Device Management** - Create profiles for TVs, ACs, soundbars, projectors, and fans
- **Multi-Emitter TX** - Broadcast commands to multiple IR emitters simultaneously
- **Auto Entities** - Devices get native HA entities (`media_player`, `climate`, `fan`, `remote`, `button`)
- **Command Templates** - Guided setup for each device type

## Requirements

- Home Assistant 2026.4+
- At least one IR transmitter or receiver (ESPHome, Broadlink, or compatible)
