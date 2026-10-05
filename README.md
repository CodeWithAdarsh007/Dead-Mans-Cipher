<div align="center">

# ☠ DEAD MAN'S CIPHER

### *A Sailor's Secret-Keeping Toolkit*

![Cipher Badge](https://img.shields.io/badge/Type-Cryptography-Gold?style=for-the-badge&labelColor=%23000000&color=%23c9a961)
![Stack Badge](https://img.shields.io/badge/Stack-HTML%2FCSS%2FJS-Gold?style=for-the-badge&labelColor=%23000000&color=%234de3c2)
![Privacy Badge](https://img.shields.io/badge/Privacy-100%25%20Local-Gold?style=for-the-badge&labelColor=%23000000&color=%23e0524a)

```
⚓ Every tool runs aboard yer own vessel. No accounts. No servers. 
   No payloads leave the ship. What ye write here, stays here.
```

---

</div>

## 🗺️ What Is This, Sailor?

A **multi-page web application dressed as an 18th-century captain's desk**, where real cryptography hides behind aged parchment and brass lamps. No frameworks. No dependencies. No secrets leave your machine.

Learn a cipher in ten seconds. Teach it to a mate. Send them a scrambled signal they can only read with the key you both share.

<div align="center">

**[⚓ Set Sail →](#-the-fleet--five-pages)** • **[📦 Get Started →](#-how-to-board)** • **[🔐 Crypto Details →](#-whats-under-the-hood--real-crypto)**

</div>

---

## 🏴‍☠️ The Fleet — Five Pages

| ⚓ Port | Page | Functionality |
|---|---|---|
| **The Harbor** | `index.html` | Home deck with live compass, ship's clock, captain's logbook (saved locally), and sea ambience. |
| **Secret Signals** | `cipher.html` | Scramble text with **Caesar shift** or **Vigenère keyword**. Includes "Spy all keys" to see every possible reading. |
| **Message in a Bottle** | `stego.html` | Hide secret notes invisibly inside any photo using LSB steganography. Extract them later. |
| **Wax Seal** | `seal.html` | Encrypt a message, fingerprint with SHA-256, send across sea, verify integrity, and decrypt—proves cargo arrived unbroken. |
| **Signal Lamp** | `trials.html` | Convert text to Morse code blink-patterns. Flash the brass lantern. Read incoming signals back to words. |

---

## 🔧 The Tools — Detail by Detail

### 🚩 **I. Flag Code (Caesar Shift)**
Slide every letter forward by an agreed number. Spaces and numbers sail through untouched.

- **Key:** Number from 1–25 (default: `3`)
- **Scramble** → slide forward · **Read** → slide back
- **🔭 Spy all keys:** Print all 25 possible readings so you see why simple shifts are weak

```
Plain:  ATTACK AT DAWN
Key:    3
Cipher: DWWDFN DW GDZQ
```

---

### 🗝 **II. Captain's Keyword (Vigenère)**
Each letter shifts by a *different* amount taken from your keyword, repeating over the message.

- **Key:** Letters only (e.g., `RUM`, `TORTUGA`)
- The same plaintext letter scrambles differently each time—letter-counting spies fail here
- Much stronger than Caesar

```
Message:  HELLOWORLD
Keyword:  RUMRUMRUMR
Cipher:   YQPCOVNEWL
```

---

### 🍾 **III. Message in a Bottle (LSB Steganography)**
Hide a note in the *last bit* of each pixel's red, green, and blue values. A 1-step color change is invisible to the eye.

- **Hide:** Pick any photo → type your note → **Hide in picture** → **Download PNG**
- **Reveal:** Upload that PNG → **Pull out the note**
- ⚠️ **Always share as PNG.** JPG re-compression destroys the hidden message.
- The first 32 hidden bits store the message length.

---

### 🕯 **IV. Wax Seal (Encryption + Integrity Voyage)**
A six-port voyage of one message:

```
1. ✒ WRITE      → Captain's orders
   ↓
2. 🔒 LOCK      → Encrypt with key (Caesar)
   ↓
3. 🕯 WAX       → SHA-256 fingerprint of the locked chest
   ↓
4. 🌊 SAIL      → Send chest & fingerprint across the sea
   ↓
5. ⚖ VERIFY    → Receiver re-fingerprints and compares
   ↓
6. 📖 OPEN      → Only if fingerprints match, unlock
```

Tick **⛈ Stormy seas** to let a storm nick one letter mid-voyage—watch the wax catch the tampering.

---

### 💡 **V. Signal Lamp (Morse Code)**
Every letter is a fixed pattern of short (dot) and long (dash) flashes.

- **To blink-code:** Words → `···  −−−  ···`
- **Read it back:** Dots & dashes → Words
- **🔦 Flash the lamp:** Play the rhythm on the brass lantern

```
S = ···
O = −−−
S = ···
```

---

## 🚢 How to Board

### The Short Voyage (just look at it)
1. Download the folder
2. Open `index.html` in any modern browser
3. **Sail.** That's it—no build step, no `npm install`, no server.

### The Full Voyage (local dev server)
Some browsers restrict `crypto.subtle` on `file://` URLs. If Wax Seal or Bottle act strange, serve over a local server:

```bash
# Python 3
python -m http.server 8080

# Node
npx serve .

# PHP
php -S localhost:8080
```

Then visit **http://localhost:8080**

> ⚠️ On `file://`, SHA-256 and image processing may be blocked. A local server fixes this.

---

## 📜 The Ship's Papers — File Structure

```
dead-mans-cipher/
├── index.html              ☠  The Harbor (home)
├── cipher.html             🚩  Secret Signals (Caesar + Vigenère)
├── stego.html              🍾  Message in a Bottle (LSB stego)
├── seal.html               🕯  Wax Seal (encrypt + verify)
├── trials.html             💡  Signal Lamp (Morse)
├── crypto.js               🔐  Shared crypto helpers
├── js/
│   └── shell.js            ⚙  Navigation, animations, UI
└── css/
    └── styles.css          🎨  Full pirate design system
```

**`js/shell.js`** is loaded on every page and provides:
- Top navigation with sliding gold pill
- Page transitions
- Background stars canvas, drifting blobs, cursor glow
- Scroll reveals + counter animations
- Toast notifications & copy-to-clipboard
- Card hover tilt
- Injected top rule + tall-ship silhouette

---

## 🔐 What's Under the Hood — Real Crypto

`crypto.js` exposes a `CipherWorks` helper built on the browser's native **[Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)**:

| Function | Algorithm |
|---|---|
| `encryptMsg` / `decryptPkg` | **AES-GCM 256** + **PBKDF2** (160,000 iterations, SHA-256) |
| `sha256` | **SHA-256** digest |
| `hmac` | **HMAC-SHA-256** |
| `zwEncode` / `zwDecode` | Zero-width character steganography |
| `embed` / `strip` | Insert / remove hidden zero-width strings |

The **Wax Seal** uses **SHA-256** directly to fingerprint—the same idea as an HMAC, acted out on screen so beginners see what "integrity" means.

---

## 🎨 The Design Deck

The whole fleet shares one cohesive design system (`css/styles.css`):

| Element | Details |
|---|---|
| **Palette** | Abyss black, aged gold `#c9a961`, sea phosphor `#4de3c2`, wax-seal blood `#e0524a`, parchment `#f3e6c8` |
| **Typography** | Pirata One (headlines), Cinzel (headings), Cormorant Garamond (prose), IM Fell English (flourishes), JetBrains Mono (code) |
| **Materials** | Dark-wood frames, parchment result papers, rope dividers, wax medallions, hanging lanterns, ship compasses |
| **Motion** | Floating ships, sweeping radar, rocking bottles, flickering lanterns, drifting tall-ship silhouette |
| **Accessibility** | Respects `prefers-reduced-motion`—animations collapse for those who need it |

---

## 🧭 Sailor's Orders (How to Use It, Honestly)

1. **Share the key out-of-band.** Tell your mate the number or keyword *in person*, over the phone, or by carrier pigeon. Never send the key inside the same message.

2. **Flag Code (Caesar) is easy to break.** It's for learning and for fun. Use the Captain's Keyword when you want real strength.

3. **Wax Seal shows tampering, not secrecy.** The two work together: encrypt *and* fingerprint.

4. **PNG only, for bottles.** JPG re-compresses pixels and destroys the hidden note. Always share the PNG.

5. **No key → no reading.** If you lose the key, the message is gone forever. This is a *feature*.

---

## 🏝 The Route to Isla Cifrada

A suggested learning path:

```
TORTUGA
  ↓
1. Visit Secret Signals
   → Scramble "ATTACK AT DAWN" with key 3
   → Read it back
   
OPEN WATER
  ↓
2. Visit Signal Lamp
   → Flash "SOS" in blink-code
   → Read the pattern back
   
ISLA CIFRADA
  ↓
3. Sail the full Wax Seal voyage
   → Write a message
   → Encrypt it
   → Fingerprint with SHA-256
   → Tick "Stormy seas" (simulate tampering)
   → Watch the wax catch the break
   
RETURN HOME
  ↓
4. Bring a photo to Message in a Bottle
   → Hide a secret note inside
   → Download as PNG
   → Extract it later to prove it survived
```

---

## 🛠 Tech Stack

- **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no bundlers, no dependencies
- **Web Crypto API** — real AES-GCM 256, PBKDF2, SHA-256, HMAC
- **Canvas API** — for LSB steganography & visual effects
- **Web Audio API** — synthesized sea ambience + foghorn
- **localStorage** — the captain's logbook (saved on your machine)
- **Google Fonts** — Cinzel, Cormorant Garamond, IM Fell English, Outfit, JetBrains Mono, Pirata One

**Works in every modern browser. Nothing is ever sent to a server.**

---

## 🏴 Privacy Promise

```
╔═══════════════════════════════════════════╗
║   NO PAYLOADS LEAVE THIS VESSEL          ║
╚═══════════════════════════════════════════╝
```

Every operation—cipher, ciphertext, image, fingerprint, logbook entry—runs entirely in your browser tab.

- ✅ No backend
- ✅ No analytics  
- ✅ No tracking
- ✅ No telemetry
- ✅ No logs

Close the tab and everything is gone. Not even *we* can see what you write.

---

## 🎓 Educational Value

This toolkit teaches:

- **Caesar Cipher** — the simplest substitution cipher (easy to break, fun to learn)
- **Vigenère Cipher** — polyalphabetic substitution (much stronger, still human-doable)
- **Steganography** — hiding data in plain sight (LSB in images)
- **Cryptographic Integrity** — SHA-256 fingerprinting (prove a message arrived unbroken)
- **Morse Code** — classic long-range signaling (dots, dashes, rhythm)
- **Web Crypto API** — how modern browsers do real encryption (AES-GCM, PBKDF2)

Perfect for:
- Teaching cryptography concepts
- Understanding how ciphers *actually* work (not just black-box tools)
- Learning by doing—immediate, interactive feedback
- Historical context—18th-century sailor's methods + modern crypto

---

## 📦 Installation & Deployment

### Run Locally (No Build Required)
```bash
git clone https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher.git
cd Dead-Mans-Cipher
# Option 1: Just open index.html in your browser
open index.html

# Option 2: Serve over local network (recommended for crypto.subtle)
python -m http.server 8080
# Visit http://localhost:8080
```

### Deploy to GitHub Pages
1. Go to **Settings** → **Pages**
2. Set source to `main` branch, root folder
3. Save. Your site is live at `https://yourusername.github.io/Dead-Mans-Cipher`

### Deploy Anywhere
Copy the entire folder to any static host (Vercel, Netlify, GitHub Pages, etc.). No build or server needed.

---

## 🤝 Contributing

Found a bug? Have a feature idea? Want to add a new cipher?

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a Pull Request

All contributions are welcome. Please keep the 18th-century sailor aesthetic intact. 😉

---

## 📜 License

Do as ye will with it, sailor. Fork it. Teach with it. Dress it in yer own colours. A nod to the original crew is appreciated but not demanded.

**MIT License** — See LICENSE file for details.

---

## 🔗 Quick Links

- 🎮 **[Try the Live App](https://codewith​adarsh007.github.io/Dead-Mans-Cipher)** *(Update with your deployed URL)*
- 📖 **[Read the Full Crypto Docs](CRYPTO.md)** *(Create this for deeper dives)*
- 🐛 **[Report a Bug](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher/issues)**
- 💡 **[Request a Feature](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher/issues)**

---

<div align="center">

```
                    ⚓
                   /|\
                  / | \
                 /  |  \
                /___|___\
                    |
                    |
        ~~~~~~  DEAD MAN'S CIPHER  ~~~~~~
        Scramble · Cork · Seal · Flash
              Fait accompli.
```

### **Fair winds and scrambled signals.** ☠

Built with 🖤 by sailors, for sailors.  
*All secrets stay at sea.*

---

![Stars](https://img.shields.io/github/stars/CodeWithAdarsh007/Dead-Mans-Cipher?style=social)
![Forks](https://img.shields.io/github/forks/CodeWithAdarsh007/Dead-Mans-Cipher?style=social)

</div>
