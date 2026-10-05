<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="100%">
    <style>
      .bg { fill: #f6f8fa; }
      .title { fill: #24292f; font-family: monospace; font-size: 42px; font-weight: bold; }
      .subtitle { fill: #57606a; font-family: monospace; font-size: 16px; font-weight: 500; letter-spacing: 2px; }
      .accent { fill: none; stroke: #24292f; stroke-width: 1.5; opacity: 0.3; }
      
      @media (prefers-color-scheme: dark) {
        .bg { fill: #0d1117; }
        .title { fill: #ff4500; }
        .subtitle { fill: #8b949e; }
        .accent { stroke: #ff4500; }
      }
    </style>
    
    <rect width="800" height="200" class="bg" rx="10" />
    <line x1="60" y1="30" x2="740" y2="30" class="accent" />
    <line x1="60" y1="170" x2="740" y2="170" class="accent" />
    
    <text x="400" y="85" text-anchor="middle" class="title">⚓ DEAD MAN'S CIPHER ☠</text>
    <text x="400" y="135" text-anchor="middle" class="subtitle">100% LOCAL • ZERO DEPENDENCIES • REAL CRYPTOGRAPHY</text>
  </svg>
</p>

---

## 📖 Overview

**Dead Man's Cipher** is a fully client-side, no-dependency cryptographic toolkit inspired by 18th-century naval communication. Every encryption, decryption, encoding, and steganographic operation runs **entirely in your browser**—nothing touches a server.

Built with **vanilla HTML, CSS, and JavaScript**, it demonstrates real cryptography through interactive, educational tools:

- 🚩 **Caesar Cipher (Flag Code)** — Simple shift-based encryption  
- 🗝️ **Vigenère Cipher (Captain's Keyword)** — Polyalphabetic substitution  
- 🍾 **LSB Steganography (Message in a Bottle)** — Hide secrets inside images  
- 🕯️ **Wax Seal** — Encrypt + fingerprint with SHA-256 for integrity verification  
- 💡 **Morse Code (Signal Lamp)** — Convert text to blink patterns  

All powered by the native **Web Crypto API** (AES-GCM, PBKDF2, SHA-256, HMAC).

---

## 🔐 Cryptographic Foundation

| Feature | Implementation | Strength |
|---------|---|---|
| **Symmetric Encryption** | AES-GCM 256-bit with random IV | ⭐⭐⭐⭐⭐ Military-grade |
| **Key Derivation** | PBKDF2 (160,000 iterations, SHA-256) | ⭐⭐⭐⭐⭐ Resistant to brute force |
| **Message Authentication** | HMAC-SHA-256 | ⭐⭐⭐⭐⭐ Ensures integrity |
| **Cryptographic Hash** | SHA-256 | ⭐⭐⭐⭐⭐ Collision-resistant |
| **Steganography** | LSB (Least Significant Bit) | ⭐⭐⭐ Hidden but not secure |
| **Classical Ciphers** | Caesar & Vigenère | ⭐ Educational only |

**Nothing is sent to any server.** All cryptographic operations use browser APIs and remain on your device.

---

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher.git
cd Dead-Mans-Cipher
```

### Run Locally (No Build Required)
Simply open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows (PowerShell)
Start-Process index.html
```

### Serve Over Local Network (Recommended)
Some browsers require a local server for `crypto.subtle` on certain pages:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

Then visit **http://localhost:8080** in your browser.

> ⚠️ **Note:** Wax Seal and Message in a Bottle pages may require a local server due to browser security policies around `file://` URLs and the Web Crypto API.

---

## 📁 Project Architecture

```
Dead-Mans-Cipher/
├── index.html                 # Harbor landing page (home)
├── cipher.html                # Secret Signals (Caesar & Vigenère)
├── stego.html                 # Message in a Bottle (LSB steganography)
├── seal.html                  # Wax Seal (encrypt + verify integrity)
├── trials.html                # Signal Lamp (Morse code)
│
├── crypto.js                  # Cryptographic helpers (Web Crypto API)
│   ├── encryptMsg()           → AES-GCM encrypt with PBKDF2 key derivation
│   ├── decryptPkg()           → AES-GCM decrypt
│   ├── sha256()               → SHA-256 hashing
│   ├── hmac()                 → HMAC-SHA-256
│   ├── zwEncode/zwDecode()    → Zero-width character steganography
│   └── embed/strip()          → LSB steganography utilities
│
├── js/
│   └── shell.js               # Shared UI: navigation, animations, toasts
│
├── css/
│   └── styles.css             # Complete design system (pirate theme)
│
└── README.md                  # This file
```

### Key Files Explained

**`crypto.js`** (71 lines)  
Wraps the browser's **[Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)** and provides:
- `encryptMsg(message, passphrase)` → Encrypted package with salt & IV
- `decryptPkg(package, passphrase)` → Plaintext (or error)
- `sha256(text)` → 64-char hex digest
- `zwEncode/zwDecode()` → Zero-width character encoding
- `embed/strip()` → Hide/extract secrets in carrier text

**`js/shell.js`** (91 lines)  
Handles all interactive features:
- Animated navigation pill (slides to active link)
- Page transitions (enter/leave effects)
- Background stars canvas (drifting particles)
- Scroll reveals (fade-in animations)
- Counter animations (data-count → incremental display)
- Card 3D tilt (on hover, if pointer:fine)
- Toast notifications & clipboard helpers

**`css/styles.css`** (345 lines)  
Premium design system featuring:
- CSS custom properties (--gold, --sea, --blood, --abyss, etc.)
- Gradient backgrounds with drifting blobs
- Glass-morphism effects (backdrop-filter)
- Responsive grid layout (12-column bento)
- Pirate/nautical aesthetics (wood frames, rope dividers, wax seals)
- Motion respects `prefers-reduced-motion`

---

## 🎯 The Five Tools

### 1. 🚩 **Secret Signals** — Caesar & Vigenère  
**File:** `cipher.html`

Scramble text using two classical encryption methods:

#### Caesar Cipher (Flag Code)
Shift each letter by a fixed number (1–25).
```
Plain:  HELLO WORLD
Key:    3
Cipher: KHOOR ZRUOG
```

#### Vigenère Cipher (Captain's Keyword)
Shift each letter by a different amount from a repeating keyword.
```
Message:  HELLOWORLD
Keyword:  SECRETKEY (repeated: SECRETKE)
Cipher:   ZIGFPWFHCC
```

**Features:**
- Real-time scramble/descramble
- "Spy All Keys" mode shows all 25 Caesar shifts at once
- Preserves numbers and punctuation
- Fully local—no server needed

**Security Note:** These are for learning. They're easily broken by frequency analysis or brute force. Use Wax Seal for real security.

---

### 2. 🍾 **Message in a Bottle** — LSB Steganography  
**File:** `stego.html`

Hide a secret message invisibly inside an image using **Least Significant Bit (LSB)** encoding.

**How it works:**
- Each pixel in an image has 3 color channels (RGB)
- Each channel has 8 bits (0–255)
- Changing the least significant bit (the rightmost 1) causes imperceptible color shifts
- Hide a message by encoding it in the LSBs of consecutive pixels

**Usage:**
```bash
1. Upload an image (PNG recommended)
2. Type your secret message
3. Click "Hide in picture"
4. Download the steganogram as PNG
5. Send the PNG to your mate
6. Receiver uploads PNG and clicks "Pull out the note"
```

**⚠️ Critical:** Always use PNG format. JPEG re-compression destroys the hidden data.

**The Math:**
- Message length stored in first 32 bits
- Each character encoded as 8 bits
- Maximum capacity ≈ image_width × image_height ÷ 3 bits

---

### 3. 🕯️ **Wax Seal** — Encrypt + Integrity Verification  
**File:** `seal.html`

A six-step voyage demonstrating encryption and cryptographic integrity:

```
1. ✒ WRITE        → Captain writes a message
   ↓
2. 🔒 LOCK        → Encrypt with AES-GCM
   ↓
3. 🕯 WAX         → Compute SHA-256 hash of ciphertext
   ↓
4. 🌊 SAIL        → Send ciphertext + hash across the sea
   ↓
5. ⚖ VERIFY      → Receiver re-computes hash, compares
   ↓
6. 📖 OPEN        → If hashes match, decrypt and read
```

**Features:**
- Real AES-GCM encryption (not just Caesar)
- SHA-256 fingerprinting for tamper detection
- "Stormy Seas" mode: simulate one bit flip mid-voyage
- Watch the wax catch the tampering
- Visual journey from write → lock → sail → verify → open

**Why It Matters:**  
Encryption keeps a message *secret*. Hashing proves it *wasn't tampered with*. Together, they provide both confidentiality and integrity.

---

### 4. 💡 **Signal Lamp** — Morse Code  
**File:** `trials.html`

Convert text to Morse code (dots and dashes) and flash a brass lantern.

**Morse Basics:**
- **Dot (·)** = Short flash
- **Dash (−)** = Long flash
- **Space between letters** = Medium pause
- **Space between words** = Long pause

**Example:**
```
S = ···  (dot-dot-dot)
O = −−− (dash-dash-dash)
S = ···  (dot-dot-dot)
→ S.O.S. = ··· −−− ···
```

**Features:**
- Type text → converts to dots & dashes
- Click "Flash Lamp" to play audio rhythm
- Read incoming Morse back to text
- Educational: learn classic long-range signaling

---

## 🎨 Design & Theme

The entire application uses a **18th-century maritime aesthetic**:

### Color Palette
| Color | Hex | Purpose |
|-------|-----|---------|
| **Abyss** | `#0b0d09` | Deep background |
| **Gold** | `#c9a961` | Accents, highlights |
| **Sea Phosphor** | `#4de3c2` | Success, data |
| **Blood Red** | `#e0524a` | Warnings, errors |
| **Parchment** | `#f3e6c8` | Text, contrast |

### Typography
- **Headlines:** Pirata One (playful pirate font)
- **Headings:** Cinzel (classical serif)
- **Body:** Cormorant Garamond (elegant, readable)
- **Code/Output:** JetBrains Mono (monospace)
- **Flourishes:** IM Fell English (italic, decorative)

### Motion & Accessibility
- Smooth page transitions & scroll reveals
- Drifting background blobs
- Floating particle stars
- **Respects `prefers-reduced-motion`** — all animations disabled for users who opt out

---

## 💻 Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) | Zero dependencies, pure standards |
| **Cryptography** | Web Crypto API | Native browser crypto (AES-GCM, PBKDF2, SHA-256) |
| **Canvas** | Canvas 2D API | LSB steganography pixel manipulation |
| **Audio** | Web Audio API | Morse code rhythm & sea ambience |
| **Storage** | localStorage | Captain's logbook (persistent notes) |
| **Fonts** | Google Fonts | Cinzel, Cormorant Garamond, Pirata One, JetBrains Mono, Outfit |

**Build & Deploy:**
- No build step required
- No npm, webpack, or bundler
- Copy entire folder to any static host (GitHub Pages, Netlify, Vercel, etc.)
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🧭 Educational Use Cases

Perfect for teaching:

1. **Cryptography Fundamentals**
   - Caesar cipher (shift ciphers)
   - Vigenère cipher (polyalphabetic substitution)
   - Difference between confidentiality and integrity
   - Hash functions and fingerprinting

2. **Web Development**
   - Client-side cryptography with Web Crypto API
   - Canvas API for image manipulation
   - CSS custom properties & glass-morphism
   - JavaScript event handling & state management

3. **History & Communication**
   - 18th-century naval codes
   - Signal lamps & visual communication
   - Morse code principles
   - How sailors kept secrets

4. **Cybersecurity**
   - Why classical ciphers are broken
   - How modern encryption works (AES-GCM)
   - Tamper detection via hashing
   - Steganography vs. cryptography

---

## 📋 How Each Tool Works (Technical Details)

### Caesar Cipher
```javascript
// Shift each letter forward by N
"HELLO" → shift by 3 → "KHOOR"
A(0) → D(3), B(1) → E(4), ...
Wraps around: Y(24) → shift 3 → B(1)
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)  
**Security:** O(1) — can brute force in ~25 attempts

### Vigenère Cipher
```javascript
// Repeat keyword to match message length
Message:  H E L L O
Keyword:  S E C R E (repeated as needed)
Shift by: 18 4 2 17 4 (alphabetic positions)
Cipher:   Z I N E S
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)  
**Security:** O(26^n) where n = keyword length — much stronger than Caesar

### LSB Steganography
```javascript
// Original pixel: [R, G, B] = [102, 51, 204]
// Binary:        [01100110, 00110011, 11001100]
// Message bit = 1
// Replace LSB:  [01100111, 00110011, 11001101]
// New pixel:    [103, 51, 205]  ← Imperceptible change
```

**Capacity:** width × height × 3 bits ÷ 8 = width × height × 0.375 bytes  
**Speed:** O(n) where n = pixel count  
**Detectability:** Invisible to human eye, detectable by steganalysis

### SHA-256 Hashing
```javascript
// Any message → deterministic 256-bit (64-char hex) hash
message = "CARGO ABOARD"
hash = "7c8a3f... (64 chars)" // Deterministic
// Change 1 bit → completely different hash
message = "CARHO ABOARD"
hash = "a4b1f2... (64 chars)" // Entirely different!
```

**Properties:**
- Deterministic (same input → same output always)
- One-way (can't reverse hash to plaintext)
- Collision-resistant (practically impossible to find two inputs with same hash)
- Avalanche effect (tiny change → huge hash change)

### AES-GCM Encryption
```javascript
// PBKDF2 derives a key from passphrase
passphrase = "DEADMANSCIPHER"
salt = random 16 bytes
iterations = 160,000
hash_fn = SHA-256
key = AES-GCM key (256-bit)

// AES-GCM encrypts and authenticates
iv = random 12 bytes
ciphertext = AES-GCM(plaintext, key, iv)
tag = authentication tag
```

**Output Package:**
```json
{
  "v": 1,
  "iters": 160000,
  "salt": "base64-encoded-salt",
  "iv": "base64-encoded-iv",
  "data": "base64-encoded-ciphertext"
}
```

---

## 🔒 Security & Privacy

### What's Kept Local
✅ **All cryptographic operations** — never leaves your browser  
✅ **Plaintext messages** — never transmitted  
✅ **Keys and passphrases** — never sent to server  
✅ **Images** — processed only on your device  
✅ **Logbook entries** — stored in localStorage only  

### No Tracking
✅ No analytics  
✅ No third-party scripts  
✅ No server logs  
✅ No cookies  
✅ No telemetry  

### Ephemeral by Design
- Close the browser tab → data is gone
- Refresh the page → state resets
- No cloud sync, no backup, no recovery

> **Privacy Note:** localStorage persists across browser sessions on the same device. Clear your browser's site data if you want to erase the logbook.

---

## 🤝 Contributing

Contributions welcome! Please:

1. **Fork** the repository
2. **Create a feature branch:** `git checkout -b feature/your-feature`
3. **Commit your changes:** `git commit -m "Add your feature"`
4. **Push to the branch:** `git push origin feature/your-feature`
5. **Open a Pull Request**

### Ideas for Contributions
- Add more classical ciphers (Atbash, Substitution, Transposition)
- Implement Rail Fence, Playfair, or Enigma ciphers
- Add a Frequency Analysis tool
- Improve steganography detection methods
- Create educational video tutorials
- Add language translations
- Performance optimizations

---

## 📜 License

**MIT License** — Free to use, modify, and distribute. See the `LICENSE` file for full details.

In short: Do what you want with it. A nod to the original creator is appreciated but not required.

---

## 🛳️ Deployment

### GitHub Pages (Recommended)
1. Push your fork to GitHub
2. Go to **Settings** → **Pages**
3. Set source to `main` branch, root folder
4. Your site is live at `https://<username>.github.io/Dead-Mans-Cipher`

### Netlify
```bash
# Connect your repo, Netlify auto-detects (no build command needed)
# Deploy in seconds
```

### Vercel
```bash
# Import from GitHub, deploy automatically
# Works with zero config
```

### Any Static Host
Simply copy the entire folder to your host (AWS S3, CloudFlare Pages, etc.). No build step required.

---

## 🐛 Troubleshooting

### "crypto.subtle is not defined" or "Wax Seal doesn't work"
**Solution:** Use a local server instead of `file://`
```bash
python -m http.server 8080
# Then visit http://localhost:8080
```

### "Message in a Bottle loses data when re-opening"
**Solution:** Save the image as PNG (not JPG). JPEG re-compression destroys LSB data.

### "Morse code audio doesn't play"
**Solution:** Check browser audio permissions. Some browsers require user interaction before playing sound.

### "Logbook entries disappeared"
**Solution:** Check if you cleared site data or are in private/incognito mode (localStorage doesn't persist there).

---

## 📞 Support & Questions

- **Report bugs:** [GitHub Issues](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher/issues)
- **Suggest features:** [GitHub Discussions](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher/discussions)
- **Contact author:** [GitHub Profile](https://github.com/CodeWithAdarsh007)

---

## 🎓 Further Reading

### Cryptography Resources
- [MDN Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [OWASP Cryptography Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptography_Cheat_Sheet.html)
- [Computerphile: How AES Works](https://www.youtube.com/watch?v=O4xNJsjtN6E)

### Classical Ciphers
- [Khan Academy: Intro to Cryptography](https://www.khanacademy.org/computing/computer-science/cryptography)
- [Wikipedia: Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Wikipedia: Vigenère Cipher](https://en.wikipedia.org/wiki/Vigenère_cipher)

### Steganography
- [LSB Steganography Explained](https://en.wikipedia.org/wiki/Least_significant_bit)
- [How Image Steganography Works](https://www.geeksforgeeks.org/image-steganography/)

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

**Fair winds and scrambled signals.** ☠

Built with ❤️ by sailors, for sailors.  
*All secrets stay at sea.*

---

[![GitHub Stars](https://img.shields.io/github/stars/CodeWithAdarsh007/Dead-Mans-Cipher?style=social)](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher)
[![GitHub Forks](https://img.shields.io/github/forks/CodeWithAdarsh007/Dead-Mans-Cipher?style=social)](https://github.com/CodeWithAdarsh007/Dead-Mans-Cipher)
![MIT License](https://img.shields.io/badge/license-MIT-blue)
![Made with ❤️](https://img.shields.io/badge/made%20with-❤️-red)

</div>
