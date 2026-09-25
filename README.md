# ☠ DEAD MAN'S CIPHER

> *A sailor's secret-keeping toolkit — scramble words, cork notes inside photographs, fingerprint cargo with wax, and talk ship-to-ship in blink-code.*

**Every tool runs 100% aboard yer own vessel.** No accounts. No servers. No payloads leave the ship.

```
⚓ Welcome aboard. What ye write here, stays here.
```

---

## 🗺️ What Is This, Sailor?

A multi-page web application dressed as an 18th-century captain's desk. Behind the aged parchment and brass lamps sits **real cryptography** — the kind that actual sailors and spies would recognise: Caesar shifts, Vigenère keywords, SHA-256 fingerprints, Morse code, and LSB steganography.

Learn a cipher in ten seconds. Teach it to a mate. Send them a scrambled signal they can only read with the key you both share.

---

## 🏴‍☠️ The Fleet — Five Pages

| ⚓ Port | Page | What She Does |
|---|---|---|
| **The Harbor** | `index.html` | Home deck. Live compass, ship's clock, captain's logbook (saved locally), sea ambience. |
| **Secret Signals** | `cipher.html` | Scramble text with a **shift** (Caesar) or a **keyword** (Vigenère). Brute-force "Spy all keys" reveals every possible reading at once. |
| **Message in a Bottle** | `stego.html` | Hide a secret note invisibly inside any photo's pixels. Pull it back out later. |
| **Wax Seal** | `seal.html` | Follow one message the full voyage: write → lock → wax → sail → verify → open. Proves a chest arrived **unbroken**. |
| **Signal Lamp** | `trials.html` | Turn words into Morse blink-code and flash the brass lantern. Read incoming blink-code back to words. |

---

## 🔧 The Tools — Detail by Detail

### 🚩 I. Flag Code (Caesar Shift) — `cipher.html`
Slide every letter forward by a number the two of ye agreed on. Spaces, numbers and marks sail through untouched.
- **Key:** a number from 1 to 25 (default `3`)
- **Scramble** — slide forward · **Read** — slide back
- **🔭 Spy all keys** — prints all 25 possible readings at once, so you can *see* why a simple shift is weak

### 🗝 II. Captain's Keyword (Vigenère) — `cipher.html`
Each letter shifts by a *different* amount taken from your keyword, repeating over the message.
- **Key:** letters only (e.g. `RUM`, `TORTUGA`)
- The same plaintext letter scrambles differently each time — letter-counting spies fail here

### 🍾 III. Message in a Bottle (LSB Steganography) — `stego.html`
Hide a note in the *last bit* of each pixel's red, green and blue values. A 1-step colour change is invisible to the eye, but the deck can read it back.
- **Hide:** pick any photo → type your note → press **Hide in picture** → **Download PNG**
- **Reveal:** upload that PNG → **Pull out the note**
- ⚠️ **Always share the PNG.** JPG re-compression squashes pixels and washes the note away.
- The first 32 hidden bits store the note length, so the tool knows exactly where the message ends.

### 🕯 IV. Wax Seal (Encryption + Integrity Voyage) — `seal.html`
The full six-port voyage of one message:
1. **✒ Write** — the captain's orders
2. **🔒 Lock** — encrypt with the key number (Caesar)
3. **🕯 Wax** — SHA-256 fingerprint of the locked chest
4. **🌊 Sail** — send the chest *and* its fingerprint across the sea
5. **⚖ Verify** — receiver re-fingerprints and compares
6. **📖 Open** — only if fingerprints match, unlock the message

Tick **⛈ Stormy seas** to let a storm nick one letter mid-voyage — watch the wax catch the tampering and the receiver refuse to open a broken seal.

### 💡 V. Signal Lamp (Morse Code) — `trials.html`
Every letter is a fixed pattern of short and long flashes. Type `SOS`, watch the lamp blink `··· −−− ···`.
- **To blink-code** — words → dots & dashes
- **Read it back** — dots & dashes → words
- **🔦 Flash the lamp** — plays the actual rhythm on the brass lantern

---

## 🚢 How to Board

### The Short Voyage (just look at it)
1. Download the folder
2. Open `index.html` in any modern browser
3. Sail.

That's it. **No build step, no `npm install`, no server required.**

### The Full Voyage (local dev server)
Some browsers restrict `crypto.subtle` on `file://` URLs. If the Wax Seal or Bottle pages act strange, serve the folder over a simple local server:

```bash
# Python 3
python -m http.server 8080

# Node
npx serve .

# PHP
php -S localhost:8080
```

Then visit **http://localhost:8080**

> ⚠️ On `file://`, SHA-256 and image processing may be blocked by yer browser's security. A local server fixes this.

---

## 📜 The Ship's Papers — File Structure

```
dead-mans-cipher/
├── index.html        ☠  The Harbor (home)
├── cipher.html       🚩  Secret Signals (Caesar + Vigenère)
├── stego.html        🍾  Message in a Bottle (LSB stego)
├── seal.html         🕯  Wax Seal (encrypt + verify voyage)
├── trials.html       💡  Signal Lamp (Morse)
├── crypto.js         🔐  Shared crypto helpers (Web Crypto API)
├── js/
│   └── shell.js      ⚙  Shared shell (nav, particles, toasts, transitions)
└── css/
    └── styles.css    🎨  The whole pirate design system
```

The shared **`js/shell.js`** is loaded on every page and handles:
- Top navigation with sliding gold pill
- Page enter/leave transitions
- Background stars canvas, drifting blobs, cursor glow
- Scroll reveals + counter animations
- Toast notifications & copy-to-clipboard helpers
- Card tilt on hover
- Injected top rule + tall-ship silhouette

---

## 🔐 What's Under the Hood — Real Crypto

`crypto.js` exposes a `CipherWorks` helper built on the browser's native **[Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)**:

| Function | Backing Algorithm |
|---|---|
| `encryptMsg` / `decryptPkg` | **AES-GCM 256** with **PBKDF2** key derivation (160,000 iterations, SHA-256) |
| `sha256` | **SHA-256** digest |
| `hmac` | **HMAC-SHA-256** |
| `zwEncode` / `zwDecode` | Zero-width character steganography (ZWSP / ZWNJ / ZWJ / ZWNBSP) |
| `embed` / `strip` | Insert / remove hidden zero-width strings in carrier text |

The `seal.html` voyage uses **SHA-256** directly to fingerprint the locked chest — the same idea as an HMAC, acted out on screen so a beginner can see what "integrity" means.

---

## 🎨 The Design Deck

The whole fleet shares one design system (`css/styles.css`):

- **Palette:** abyss black, aged gold `#c9a961`, sea phosphor `#4de3c2`, wax-seal blood `#e0524a`, parchment `#f3e6c8`
- **Type:** *Pirata One* for headlines, *Cinzel* for headings, *Cormorant Garamond* for prose, *IM Fell English* for italic flourishes, *JetBrains Mono* for cipher output
- **Materials:** dark-wood frames with brass nails, parchment result papers, rope dividers, wax medallions, hanging lanterns, ship's compasses
- **Motion:** floating ships, sweeping radar, rocking bottles, flickering lanterns, drifting tall-ship silhouette behind every page
- **Respects `prefers-reduced-motion`** — animations collapse for those who ask

---

## 🧭 Sailor's Orders (How to Use It, Honestly)

1. **Share the key out-of-band.** Scramble a message, then tell yer mate the number or keyword *in person*, over the phone, or by carrier pigeon. Never send the key inside the same message.
2. **Flag Code (Caesar) is easy to break.** It's for learning and for fun. Use the Captain's Keyword when you want a bit more muscle.
3. **Wax Seal shows tampering, not secrecy.** The two work together: encrypt *and* fingerprint.
4. **PNG only, for bottles.** JPG re-compresses pixels and eats the hidden note. Always share the PNG.

---

## 🏝 The Route to Isla Cifrada

A suggested learning path:

1. **Tortuga** — Start at **Secret Signals**. Scramble `"Attack at dawn"` with key 3. Read it back.
2. **Open Water** — Visit the **Signal Lamp**. Flash `SOS`. Read it back.
3. **Isla Cifrada** — Sail the full **Wax Seal** voyage. Tick **Stormy seas** and watch a broken seal get refused.
4. **Return Home** — Bring a photo to **Message in a Bottle** and hide a note inside it.

---

## 🛠 Tech Stack

- **HTML5 + CSS3 + vanilla JavaScript** — no frameworks, no bundlers, no dependencies
- **Web Crypto API** — real AES-GCM, PBKDF2, SHA-256, HMAC
- **Canvas API** — for LSB steganography
- **Web Audio API** — synthesised sea ambience + foghorn
- **localStorage** — the captain's logbook
- **Google Fonts** — Cinzel, Cormorant Garamond, IM Fell English, Outfit, JetBrains Mono, Pirata One

Works in every modern browser. Nothing is ever sent to a server.

---

## 🏴 Privacy Promise

> **NO PAYLOADS LEAVE THIS VESSEL.**

Every operation — cipher, ciphertext, image, fingerprint, logbook entry — runs entirely in yer browser tab. There is no backend, no analytics, no tracking, no telemetry. Close the tab and every trace is gone.

---

## 📜 License

Do as ye will with it, sailor. Fork it, teach with it, dress it in yer own colours. A nod to the original crew is appreciated but not demanded.

---

```
                    ⚓
                   /|\
                  / | \
                 /  |  \
                /___|___\
                    |
                    |
        ~~~~~~  DEAD MAN'S CIPHER  ~~~~~~
        Scramble. Cork. Seal. Flash.
              Fait accompli.
```

**Fair winds and scrambled signals.** ☠
