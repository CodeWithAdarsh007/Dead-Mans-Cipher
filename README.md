# ☠ DEAD MAN'S CIPHER

*A sailor's secret-keeping toolkit. Fully on your device.*

---

## The Harbor

Welcome aboard, Captain. This be your personal toolkit for scrumblin' codes, hidin' notes in bottles, sealin' wax, and flashin' signals — all run locally, no servers needed.

### Pages

| Page | What Ye'll Find |
|------|----------------|
| 🏠 **The Harbor** (`index.html`) | Main page — the quarterdeck. Compass, log, fleet readiness |
| 🚩 **Secret Signals** (`cipher.html`) | Flag Code (Caesar shift) and Captain's Keyword (Vigenère) |
| 📜 **Wax Seal** (`seal.html`) | Full 6-step voyage: write → lock → fingerprint → send → verify → open |
| 📦 **Message in a Bottle** (`stego.html`) | Hide text inside PNG images using LSB steganography |
| 💡 **Signal Lamp** (`trials.html`) | Convert text to Morse code and flash it with the brass lamp |

---

## How It Works

All encryption be performed locally in yer browser using the Web Crypto API. No payload ever leaves yer device — the sea keeps yer secrets safe.

The encryption steps be:

- **Secret Signals** — Slide letters by a number (shift cipher) or by a keyword (Vigenère)
- **Message in a Bottle** — Hide text in the last bit of each RGB pixel — invisible to the eye
- **Wax Seal** — Six steps: write → encrypt with key → fingerprint with SHA-256 → send → verify fingerprint → decrypt with key
- **Signal Lamp** — Convert each letter to dots and dashes (Morse), flash short for dot, long for dash

---

## Technologies

- HTML5 + CSS3 with custom properties, animations, and a pirate aesthetic
- Vanilla JavaScript (ES6+) — no frameworks, no build steps
- Web Crypto API for all encryption
- Canvas API for renderin' the visual bits (stars, compass, particles)
- localStorage for savin' yer logbook entries

---

## Running Ashore

Just open any `.html` file in yer browser. No installation, no dependencies. Works on desktop or mobile.

> **⚓ Cap'n's Orders:** Keep yer browser open and yer secrets local. Fair winds and followin' seas.

---

*Dead Man's Cipher — Because some secrets are meant to sink with the ship.*
