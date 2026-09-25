# ☠ DEAD MAN'S CIPHER

*A sailor's secret-keeping toolkit. Fully on your device.*

---

## 🏠 The Harbor

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

## ⚓ How It Works

All encryption be performed locally in yer browser using the Web Crypto API. No payload ever leaves yer device — the sea keeps yer secrets safe.

The encryption steps be:

- **Secret Signals** — Slide letters by a number (shift cipher) or by a keyword (Vigenère)
- **Message in a Bottle** — Hide text in the last bit of each RGB pixel — invisible to the eye
- **Wax Seal** — Six steps: write → encrypt with key → fingerprint with SHA-256 → send → verify fingerprint → decrypt with key
- **Signal Lamp** — Convert each letter to dots and dashes (Morse), flash short for dot, long for dash

---

## 🛠 Tech Stack

<div style="background:var(--abyss); color:var(--ink); padding:20px; border-radius:12px; margin:20px 0; font-family:'Cormorant Garamond','IM Fell English',serif;">

<span style="display:inline-block; margin-right:20px; margin-bottom:10px;">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/html-html5/html.svg" alt="HTML5" width="32" height="32" style="filter: invert(36%) sepia(82%) saturate(33%) hue-rotate(186deg) brightness(105%) contrast(101);">
  <div style="font-size:12px; color:var(--muted); text-align:center;">HTML5</div>
</span>

<span style="display:inline-block; margin-right:20px; margin-bottom:10px;">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/css-css3/css.svg" alt="CSS3" width="32" height="32" style="filter: invert(36%) sepia(82%) saturate(33%) hue-rotate(186deg) brightness(105%) contrast(101);">
  <div style="font-size:12px; color:var(--muted); text-align:center;">CSS3</div>
</span>

<span style="display:inline-block; margin-right:20px; margin-bottom:10px;">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/javascript-js/js.svg" alt="JavaScript" width="32" height="32" style="filter: invert(36%) sepia(82%) saturate(33%) hue-rotate(186deg) brightness(105%) contrast(101);">
  <div style="font-size:12px; color:var(--muted); text-align:center;">JavaScript</div>
</span>

<span style="display:inline-block; margin-right:20px; margin-bottom:10px;">
  <div style="width:32px; height:32; background:linear-gradient(135deg, #4de3c2 0%, #0066cc 100%); border-radius:6px; display:flex; align-items:center; justify-content:center; color:#000; font-weight:bold; font-size:14px;">WCA</div>
  <div style="font-size:12px; color:var(--muted); text-align:center; margin-top:4px;">Web Crypto API</div>
</span>

<span style="display:inline-block; margin-right:20px; margin-bottom:10px;">
  <div style="width:32px; height:32; background:rgba(77,227,194,.3); border-radius:6px; display:flex; align-items:center; justify-content:center; color:#4de3c2; font-weight:bold; font-size:14px;">📟</div>
  <div style="font-size:12px; color:var(--muted); text-align:center; margin-top:4px;">Canvas API</div>
</span>

</div>

---

## 📦 Features

- **Secret Signals** — Caesar shift cipher and Vigenère keyword cipher
- **Message in a Bottle** — Hide text inside PNG images using LSB steganography
- **Wax Seal** — Full 6-step encryption voyage: write → lock → fingerprint → send → verify → open
- **Signal Lamp** — Convert text to Morse code and flash it visually

---

## 🎨 Technologies

- HTML5 + CSS3 with custom properties, animations, and a pirate aesthetic
- Vanilla JavaScript (ES6+) — no frameworks, no build steps
- **Web Crypto API** for all encryption
- **Canvas API** for renderin' the visual bits (stars, compass, particles)
- **localStorage** for savin' yer logbook entries

---

## ⛵ Running Ashore

Just open any `.html` file in yer browser. No installation, no dependencies. Works on desktop or mobile.

> **⚓ Cap'n's Orders:** Keep yer browser open and yer secrets local. Fair winds and followin' seas.

---

*Dead Man's Cipher — Because some secrets are meant to sink with the ship.*

---

<div style="margin-top:40px; padding-top:20px; border-top:1px solid var(--line); font-size:12px; color:var(--muted);">
    <a href="https://github.com/yourname/zetta-byte-5.0" style="color:var(--muted); text-decoration:none;">View on GitHub</a> · 
    <a href="index.html" style="color:var(--muted); text-decoration:none;">Visit The Harbor</a>
</div>
