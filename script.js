const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".yes").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    burstHearts();
  });
});

closeModal.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

function burstHearts() {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("div");
    h.className = "floating-heart";
    h.textContent = ["♥","♡","💗","💕"][Math.floor(Math.random()*4)];
    h.style.left = (35 + Math.random()*30) + "%";
    h.style.fontSize = (16 + Math.random()*24) + "px";
    h.style.animationDuration = (2 + Math.random()*2) + "s";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 4500);
  }
}

setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = Math.random() > .5 ? "♥" : "♡";
  h.style.left = Math.random()*100 + "%";
  h.style.fontSize = (12 + Math.random()*20) + "px";
  h.style.animationDuration = (5 + Math.random()*5) + "s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 11000);
}, 900);

// A tiny built-in melody so the music button works without needing an external audio file.
let audioCtx = null;
let playing = false;
let timer = null;
const musicBtn = document.getElementById("musicBtn");
const notes = [261.63,329.63,392.00,523.25,392.00,329.63];

function playNote(freq, when, duration=.32) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(0.08, when+0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, when+duration);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(when);
  osc.stop(when+duration+.02);
}

function melody() {
  if (!playing) return;
  const now = audioCtx.currentTime;
  notes.forEach((n,i)=>playNote(n, now+i*.42));
  timer = setTimeout(melody, 2500);
}

musicBtn.addEventListener("click", async () => {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") await audioCtx.resume();
  playing = !playing;
  if (playing) {
    musicBtn.textContent = "♫ Our song is playing 💗";
    melody();
  } else {
    musicBtn.textContent = "♫ Play our song 💗";
    clearTimeout(timer);
  }
});
