# Dead Man's Cipher

A sailor's secret-keeping toolkit — fully on your device. No accounts, no servers, all encryption happens locally.

## Project Structure

```
Dead-Mans-Cipher/
├── index.html          — Main harbor page
├── cipher.html         — Secret Signals (text encryption)
├── seal.html           — Wax Seal (full encryption voyage)
├── stego.html          — Message in a Bottle (hide text in images)
├── trials.html         — Signal Lamp (Morse code)
├── js/
│   ├── crypto.js       — PBKDF2/AES-GCM encryption module
│   └── shell.js        — Shared UI & utilities (particles, nav, toasts, clock)
└── css/
    └── styles.css      — Shared styles (color vars, animations, layout)
```

## Features

- **Secret Signals** — Caesar shift cipher and Vigenère keyword cipher
- **Message in a Bottle** — Hide text inside PNG images using LSB steganography
- **Wax Seal** — Full 6-step encryption voyage: write → lock → fingerprint → send → verify → open
- **Signal Lamp** — Convert text to Morse code and flash it visually

## How It Works

All encryption is performed locally in the browser using Web Crypto API. No data leaves your device.

## Usage

1. Open `index.html` to navigate to the different tool decks
2. Each page has its own interface for encryption/decryption/hiding/flashing
3. All operations use `localStorage` for persisting logs and state

## Technologies

- HTML5 + CSS3 with custom properties and animations
- Vanilla JavaScript (ES6+)
- Web Crypto API for encryption
- Canvas API for rendering visual elements
