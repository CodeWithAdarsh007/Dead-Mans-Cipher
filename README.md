<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="100%">
    <rect width="800" height="200" fill="#0d1117" rx="12"/>
    <line x1="60" y1="30" x2="740" y2="30" stroke="#ff4500" stroke-width="1.5" opacity="0.8"/>
    <line x1="60" y1="170" x2="740" y2="170" stroke="#ff4500" stroke-width="1.5" opacity="0.8"/>
    <text x="400" y="95" text-anchor="middle" fill="#ff4500" font-size="42" font-weight="700" font-family="monospace">
      ⚓ DEAD MAN'S CIPHER ☠
    </text>
    <text x="400" y="135" text-anchor="middle" fill="#8b949e" font-size="16" font-weight="500" font-family="monospace" letter-spacing="2">
      100% LOCAL • ZERO DEPENDENCIES • REAL CRYPTOGRAPHY
    </text>
  </svg>
</p>

# Dead Man's Cipher

A sailor's secret-keeping toolkit — fully on your device. No accounts, no servers, and every cryptographic action runs locally in the browser.

## Overview

**Dead Man's Cipher** is a browser-based cryptography playground inspired by old-world naval communication. It combines classical ciphers, modern browser cryptography, and steganography into a single local-only web app.

The project demonstrates how encryption, integrity checking, and covert messaging work without sending any data to a server.

### Included tools

- **Caesar Cipher** for basic shift-based encryption
- **Vigenère Cipher** for keyword-based polyalphabetic encryption
- **LSB Steganography** to hide text inside images
- **Wax Seal** flow for encryption + integrity verification
- **Morse Code Signal Lamp** for blink-pattern messaging

## Why this project matters

This repo is designed to teach the difference between:

- encryption vs. hashing
- secrecy vs. tamper detection
- classical ciphers vs. modern cryptography
- hidden messages vs. protected data

Everything is implemented in **plain HTML, CSS, and JavaScript** using the browser's native **Web Crypto API**.

## Repository structure

```text
Dead-Mans-Cipher/
├── index.html
├── cipher.html
├── stego.html
├── seal.html
├── trials.html
├── crypto.js
├── js/
│   └── shell.js
├── css/
│   └── styles.css
├── README.md
└── LICENSE
```

## Technology stack

- **HTML5** for structure
- **CSS3** for theme and layout
- **Vanilla JavaScript** for logic
- **Web Crypto API** for AES-GCM, PBKDF2, SHA-256, HMAC
- **Canvas API** for image-based steganography
- **Web Audio API** for lamp/audio effects
- **localStorage** for the ship's logbook

## Features

### 1. Secret Signals
Learn how Caesar and Vigenère ciphers work in a simple interface.

- shift-based encryption
- keyword-based encryption
- all operations local to browser
- useful for educational demonstrations

### 2. Message in a Bottle
Hide secret text in image pixels using **LSB steganography**.

- hide text inside PNG images
- extract hidden message later
- demonstrates covert channel techniques
- image data stays local

### 3. Wax Seal
A guided integrity workflow showing the relationship between encryption and verification.

- write message
- lock/encrypt
- compute hash
- verify tampering
- open only when valid

### 4. Signal Lamp
Convert text into Morse code and flash a simulated lamp.

- dots and dashes
- visual and audio interpretation
- classic signaling pattern demo

## How to run locally

### Option 1: Open directly
```bash
# Clone the repo
git clone https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher.git
cd Dead-Mans-Cipher

# Open in browser
open index.html
```

### Option 2: Use a local server (recommended)
```bash
cd Dead-Mans-Cipher
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

> For some pages, especially those using `crypto.subtle`, a local server is more reliable than opening the file directly.

## Cryptographic details

### AES-GCM + PBKDF2
The app uses browser cryptography primitives to securely encrypt messages:

- **PBKDF2** derives the key from a passphrase
- **AES-GCM** encrypts the message data
- **random salt and IV** are generated per operation
- **HMAC / SHA-256** can be used for integrity checks

### Steganography
The project hides secret text inside image data by changing the least significant bits of pixel values. This makes the image visually nearly identical while still storing hidden information.

## Security posture

This project is intentionally privacy-first:

- no backend
- no remote API calls
- no tracking
- no server-side storage
- no account system

Everything runs in the browser and stays on the user's device.

## Browser compatibility

Works best in modern browsers such as:

- Chrome
- Edge
- Firefox
- Safari

## Contributing

Contributions are welcome. If you want to improve the repo:

```bash
git checkout -b feature/your-change
git add .
git commit -m "Add your change"
git push origin feature/your-change
```

Then open a pull request on GitHub.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Project purpose

Dead Man's Cipher is both a demonstration and a learning tool. It provides an approachable, visual way to understand how cryptography and hidden communication methods work without needing a backend or large framework setup.

---

<p align="center">
  <strong>Fair winds and scrambled signals.</strong>
</p>
