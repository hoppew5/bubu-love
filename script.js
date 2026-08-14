/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {
  musicBtn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicBtn.innerHTML = "🔊 Music Playing ❤️";
      } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play our song 💗";
      }
    } catch (error) {
      alert("Song play nahi ho raha. Check karo song.mp3 upload hai ya nahi ❤️");
    }
  });
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  const heartList = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💘"
  ];

  heart.textContent =
    heartList[Math.floor(Math.random() * heartList.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    14 + Math.random() * 20 + "px";

  heart.style.animationDuration =
    5 + Math.random() * 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}


/* Create hearts continuously */

setInterval(() => {
  createHeart();
}, 1200);


/* =========================
   YES BUTTONS
========================= */

const yesButtons =
  document.querySelectorAll(".yes");

const modal =
  document.getElementById("modal");

const closeModal =
  document.getElementById("closeModal");


yesButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Show love popup
    if (modal) {
      modal.classList.add("show");
    }

    // Heart celebration
    for (let i = 0; i < 25; i++) {

      setTimeout(() => {
        createHeart();
      }, i * 100);

    }

  });

});


/* =========================
   CLOSE LOVE POPUP
========================= */

if (closeModal) {

  closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

  });

}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

window.addEventListener("click", (event) => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

});


/* =========================
   PHOTO CLICK EFFECT
========================= */

const photos =
  document.querySelectorAll(".photo img");

photos.forEach(photo => {

  photo.addEventListener("click", () => {

    photo.classList.toggle("photo-active");

  });

});


/* =========================
   REASON CARDS
========================= */

const reasonCards =
  document.querySelectorAll(".reason-grid article");

reasonCards.forEach(card => {

  card.addEventListener("click", () => {

    card.style.transform = "scale(1.08)";

    setTimeout(() => {

      card.style.transform = "";

    }, 300);

  });

});


/* =========================
   PAGE LOAD HEARTS
========================= */

window.addEventListener("load", () => {

  for (let i = 0; i < 8; i++) {

    setTimeout(() => {
      createHeart();
    }, i * 300);

  }

});
