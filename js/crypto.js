// Shared crypto: PBKDF2 -> AES-GCM, SHA-256/HMAC, zero-width stego
const CipherWorks = (()=>{
  const enc=new TextEncoder(), dec=new TextDecoder();
  const b64e=buf=>btoa(String.fromCharCode(...new Uint8Array(buf)));
  const b64d=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
  async function keyFromPass(pass,salt,iters=160000){
    const base=await crypto.subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveKey']);
    return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:iters,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
  }
  async function encryptMsg(message,passphrase){
    const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
    const key=await keyFromPass(passphrase,salt);
    const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,enc.encode(message));
    return {v:1, iters:160000, salt:b64e(salt), iv:b64e(iv), data:b64e(ct)};
  }
  async function decryptPkg(pkg,passphrase){
    const salt=b64d(pkg.salt), iv=b64d(pkg.iv), data=b64d(pkg.data);
    const key=await keyFromPass(passphrase,salt,pkg.iters||160000);
    const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv},key,data);
    return dec.decode(pt);
  }
  // zero-width stego: ZWSP=0, ZWNJ=1, ZWJ=separator, ZWNBSP=end
  const Z0='\u200b', Z1='\u200c', SEP='\u200d', END='\u2060';
  function zwEncode(text){ // text -> zw string (base64 -> bits)
    const b64=btoa(unescape(encodeURIComponent(text)));
    return [...b64].map(ch=>ch.charCodeAt(0).toString(2).padStart(8,'0')).join('').split('').map(b=>b==='0'?Z0:Z1).join('')+END;
  }
  function zwDecode(carrier){
    const m=carrier.match(/[\u200b\u200c\u2060\u200d]+/g); if(!m) return '';
    const bits=m.join('').replace(new RegExp(END,'g'),'').split('').map(c=>c===Z0?'0':c===Z1?'1':'').join('');
    const bytes=bits.match(/.{1,8}/g)||[]; let bin=bytes.map(b=>String.fromCharCode(parseInt(b,2))).join('');
    try{return decodeURIComponent(escape(atob(bin)));}catch{return '';}
  }
  function embed(carrier,secret){ // insert after first sentence / middle word boundary
    const zw=zwEncode(secret);
    const idx=carrier.indexOf('. ');
    if(idx>0) return carrier.slice(0,idx+1)+zw+' '+carrier.slice(idx+2);
    const mid=Math.floor(carrier.length/2); return carrier.slice(0,mid)+zw+carrier.slice(mid);
  }
  function strip(carrier){return carrier.replace(/[\u200b\u200c\u200d\u2060]/g,'');}
  async function sha256(text){const d=await crypto.subtle.digest('SHA-256',enc.encode(text)); return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,'0')).join('');}
  async function hmac(text,key){const k=await crypto.subtle.importKey('raw',enc.encode(key),{name:'HMAC',hash:'SHA-256'},false,['sign']); const s=await crypto.subtle.sign('HMAC',k,enc.encode(text)); return [...new Uint8Array(s)].map(b=>b.toString(16).padStart(2,'0')).join('');}
  return {encryptMsg,decryptPkg,zwEncode,zwDecode,embed,strip,sha256,hmac};
})();
