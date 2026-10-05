<!--
  DEAD MAN'S CIPHER · README
  Theme: #0d1117 hull · #161b22 deck · #ff4500 signal · #8b949e fog
  No local image files required — all visuals are native markdown/HTML.
-->

<h1 align="center">⚓&nbsp;&nbsp;DEAD MAN'S CIPHER&nbsp;&nbsp;☠</h1>

<p align="center">
  <samp><strong>100% LOCAL&nbsp;&nbsp;•&nbsp;&nbsp;ZERO DEPENDENCIES&nbsp;&nbsp;•&nbsp;&nbsp;REAL CRYPTOGRAPHY</strong></samp>
</p>

<p align="center">
  <em>A sailor's secret-keeping toolkit — fully on your device.</em><br>
  <sub>No accounts&nbsp;·&nbsp;No servers&nbsp;·&nbsp;Every cryptographic action runs locally in the browser.</sub>
</p>

<p align="center">
  <img alt="100% local" src="https://img.shields.io/badge/LOCAL--ONLY-100%25-ff4500?style=for-the-badge&labelColor=0d1117">
  <img alt="zero dependencies" src="https://img.shields.io/badge/DEPENDENCIES-0-ff4500?style=for-the-badge&labelColor=0d1117">
  <img alt="AES-GCM" src="https://img.shields.io/badge/CRYPTO-AES--GCM-ffa657?style=for-the-badge&labelColor=0d1117">
  <img alt="data never leaves device" src="https://img.shields.io/badge/DATA-NEVER_LEAVES_DEVICE-8b949e?style=for-the-badge&labelColor=0d1117">
  <img alt="MIT license" src="https://img.shields.io/badge/LICENSE-MIT-ff4500?style=for-the-badge&labelColor=0d1117">
</p>

<p align="center">
  <img alt="Signal Orange" src="https://img.shields.io/badge/SIGNAL-ORANGE-ff4500?style=flat-square&labelColor=0d1117">
  <img alt="Lantern Gold" src="https://img.shields.io/badge/LANTERN-GOLD-ffa657?style=flat-square&labelColor=0d1117">
  <img alt="Hull Black" src="https://img.shields.io/badge/HULL-BLACK-161b22?style=flat-square&labelColor=0d1117">
  <img alt="Fog" src="https://img.shields.io/badge/FOG-8b949e-8b949e?style=flat-square&labelColor=0d1117">
</p>

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

> ⚓ **A sailor's secret-keeping toolkit — fully on your device.**
> No accounts. No servers. Every cryptographic action runs locally in the browser.

---

## ⚓ Overview

**Dead Man's Cipher** is a browser-based cryptography playground inspired by old-world naval communication. It combines classical ciphers, modern browser cryptography, and steganography into a single **local-only** web app.

The project demonstrates how encryption, integrity checking, and covert messaging work without sending a single byte to a server.

### 🧭 Included tools

<table>
  <tr>
    <td align="center" width="20%">🏛️<br><img alt="Caesar" src="https://img.shields.io/badge/CAESAR-SHIFT-ff4500?style=flat-square&labelColor=0d1117"><br><sub>shift cipher</sub></td>
    <td align="center" width="20%">🔑<br><img alt="Vigenère" src="https://img.shields.io/badge/VIGEN%C3%88RE-KEYWORD-ffa657?style=flat-square&labelColor=0d1117"><br><sub>keyword cipher</sub></td>
    <td align="center" width="20%">🖼️<br><img alt="LSB steganography" src="https://img.shields.io/badge/LSB-STEGO-8b949e?style=flat-square&labelColor=0d1117"><br><sub>hide in pixels</sub></td>
    <td align="center" width="20%">🕯️<br><img alt="Wax Seal" src="https://img.shields.io/badge/WAX-SEAL-ff4500?style=flat-square&labelColor=0d1117"><br><sub>encrypt + verify</sub></td>
    <td align="center" width="20%">💡<br><img alt="Signal Lamp" src="https://img.shields.io/badge/SIGNAL-LAMP-ffa657?style=flat-square&labelColor=0d1117"><br><sub>morse flashes</sub></td>
  </tr>
</table>

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

---

## ⚖️ Why this project matters

This repo is designed to teach the difference between:

| Concept | vs. | Concept |
|:--|:--:|:--|
| **Encryption** | ⟷ | **Hashing** |
| **Secrecy** | ⟷ | **Tamper detection** |
| **Classical ciphers** | ⟷ | **Modern cryptography** |
| **Hidden messages** | ⟷ | **Protected data** |

Everything is implemented in **plain HTML, CSS, and JavaScript** using the browser's native **Web Crypto API**.

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

---

## 🗂️ Repository structure

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

## 🛠️ Technology stack

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-STRUCTURE-ff4500?style=flat-square&labelColor=0d1117">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-NAUTICAL_THEME-ffa657?style=flat-square&labelColor=0d1117">
  <img alt="Vanilla JavaScript" src="https://img.shields.io/badge/JAVASCRIPT-VANILLA-ff4500?style=flat-square&labelColor=0d1117">
  <img alt="Web Crypto API" src="https://img.shields.io/badge/WEB_CRYPTO-API-ffa657?style=flat-square&labelColor=0d1117">
  <img alt="Canvas API" src="https://img.shields.io/badge/CANVAS-PIXEL_STEGO-8b949e?style=flat-square&labelColor=0d1117">
</p>

| Layer | Technology | Used for |
|:--|:--|:--|
| Structure | HTML5 | Page scaffolding |
| Styling | CSS3 | Nautical theme & layout |
| Logic | Vanilla JavaScript | All cipher / stego logic |
| Cryptography | Web Crypto API | AES-GCM, PBKDF2, SHA-256, HMAC |
| Images | Canvas API | Pixel-level LSB steganography |
| Audio | Web Audio API | Signal-lamp clicks & tones |
| Storage | localStorage | The ship's logbook |

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## ⚙️ Features

<p>
  <img alt="Classical ciphers" src="https://img.shields.io/badge/01-CLASSICAL_CIPHERS-ff4500?style=flat-square&labelColor=0d1117">
  <img alt="Steganography" src="https://img.shields.io/badge/02-STEGANOGRAPHY-ffa657?style=flat-square&labelColor=0d1117">
  <img alt="Integrity" src="https://img.shields.io/badge/03-INTEGRITY-ff4500?style=flat-square&labelColor=0d1117">
  <img alt="Morse signaling" src="https://img.shields.io/badge/04-MORSE_SIGNALING-ffa657?style=flat-square&labelColor=0d1117">
</p>

### 🔐 1. Secret Signals
Learn how Caesar and Vigenère ciphers work in a simple interface.

- Shift-based encryption
- Keyword-based polyalphabetic encryption
- All operations local to the browser
- Useful for educational demonstrations

### 🖼️ 2. Message in a Bottle
Hide secret text in image pixels using LSB steganography.

- Hide text inside PNG images
- Extract the hidden message later
- Demonstrates covert-channel techniques
- Image data never leaves the page

### 🕯️ 3. Wax Seal
A guided integrity workflow showing the relationship between encryption and verification.

- Write message → lock / encrypt
- Compute hash → verify tampering
- Open only when valid

### 💡 4. Signal Lamp
Convert text into Morse code and flash a simulated lamp.

- Dots and dashes
- Visual and audio interpretation
- Classic signaling-pattern demo

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## 🚀 How to run locally

### Option 1 — Open directly

```bash
# Clone the repo
git clone https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher.git
cd Dead-Mans-Cipher

# Open in browser
open index.html
```

### Option 2 — Use a local server (recommended)

```bash
cd Dead-Mans-Cipher
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

> ⚠️ For pages that use `crypto.subtle`, a local server is more reliable than opening the file directly.

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## 🔐 Cryptographic details

### AES-GCM + PBKDF2

| Primitive | Role |
|:--|:--|
| PBKDF2 | Derives the key from a passphrase |
| AES-GCM | Encrypts the message data |
| Random salt + IV | Generated fresh per operation |
| HMAC / SHA-256 | Integrity verification |

### Steganography
The project hides secret text inside image data by modifying the least significant bits of pixel values. The image looks visually identical while still carrying hidden information.

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## 🛡️ Security posture

This project is intentionally privacy-first:

| Guarantee | Status |
|:--|:--:|
| Backend server | ❌ none |
| Remote API calls | ❌ none |
| Tracking / analytics | ❌ none |
| Server-side storage | ❌ none |
| Account system | ❌ none |
| Data leaves your device | ❌ never |

## 🌐 Browser compatibility

<p align="center">
  <img alt="Chrome" src="https://img.shields.io/badge/Chrome-supported-ff4500?style=flat-square&labelColor=0d1117&logo=googlechrome&logoColor=ff4500">
  <img alt="Edge" src="https://img.shields.io/badge/Edge-supported-ff4500?style=flat-square&labelColor=0d1117&logo=microsoftedge&logoColor=ff4500">
  <img alt="Firefox" src="https://img.shields.io/badge/Firefox-supported-ffa657?style=flat-square&labelColor=0d1117&logo=firefoxbrowser&logoColor=ffa657">
  <img alt="Safari" src="https://img.shields.io/badge/Safari-supported-8b949e?style=flat-square&labelColor=0d1117&logo=safari&logoColor=8b949e">
</p>

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## 🤝 Contributing

Contributions are welcome. To improve the repo:

```bash
git checkout -b feature/your-change
git add .
git commit -m "Add your change"
git push origin feature/your-change
```

Then open a pull request on GitHub.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🎯 Project purpose

Dead Man's Cipher is both a demonstration and a learning tool — an approachable, visual way to understand how cryptography and hidden communication methods work, without a backend or a large framework.

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

## 🎨 Theme palette

| Swatch | Hex | Role |
|:--|:--|:--|
| <img alt="Signal Orange" src="https://img.shields.io/badge/-%20-ff4500?style=for-the-badge"> | `#ff4500` | **Signal Orange** — accents, headings, glow |
| <img alt="Lantern Gold" src="https://img.shields.io/badge/-%20-ffa657?style=for-the-badge"> | `#ffa657` | **Lantern Gold** — secondary highlights |
| <img alt="Hull Black" src="https://img.shields.io/badge/-%20-0d1117?style=for-the-badge"> | `#0d1117` | **Hull Black** — page background |
| <img alt="Deck Grey" src="https://img.shields.io/badge/-%20-161b22?style=for-the-badge"> | `#161b22` | **Deck Grey** — panels & cards |
| <img alt="Rigging" src="https://img.shields.io/badge/-%20-30363d?style=for-the-badge"> | `#30363d` | **Rigging** — borders & dividers |
| <img alt="Parchment" src="https://img.shields.io/badge/-%20-c9d1d9?style=for-the-badge"> | `#c9d1d9` | **Parchment** — body text |
| <img alt="Fog" src="https://img.shields.io/badge/-%20-8b949e?style=for-the-badge"> | `#8b949e` | **Fog** — muted text |

<p align="center"><samp>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;⚓&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</samp></p>

<h3 align="center">⚓&nbsp;&nbsp;FAIR WINDS AND SCRAMBLED SIGNALS.&nbsp;&nbsp;☠</h3>
<p align="center">
  <sub><samp>no servers · no trackers · no accounts · just ciphers</samp></sub>
</p>
