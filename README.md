# Power Flow Card for Home Assistant

A custom Lovelace card for visualizing real-time energy flow between grid, solar, battery, and home.  
Provides a clean, animated interface that makes it easy to understand how power is moving through your system.

---

## Features

- Animated flow lines Plannel: with speed based on actual power values  
- Supports grid import/export, solar generation, battery charge/discharge  
---

## Installation

### **HACS (recommended)**

1. Open **HACS → Frontend**
2. Add a custom repository:  

## Configuration 

type: custom:power-flow-card
name: Home Energy Flow
entities:
  solar_power: sensor.solar
  grid_import_power: sensor.grid
  ev_charge_power: sensor.ev
  grid_export_power: sensor.grid_export
  battery_charge_power: sensor.bat_charge
  battery_discharge_power: sensor.bat_discharge

## Credit

The Illustrator Base for the SVGs was provided by [ForsakenConversation](https://www.reddit.com/user/ForsakenConversation/)
