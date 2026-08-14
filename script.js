/* -------------------------
   WELCOME SCREEN
------------------------- */

const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

  welcomeScreen.style.opacity = "0";

  setTimeout(() => {

    welcomeScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    createHearts();

  }, 600);

});


/* -------------------------
   FLOATING HEARTS
------------------------- */

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";

  const hearts = ["❤️", "💕", "💗", "💖", "💓", "💘"];

  heart.innerHTML =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (12 + Math.random() * 22) + "px";

  heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);

}


function createHearts() {

  setInterval(() => {

    createHeart();

  }, 700);

}


/* -------------------------
   REASON CARD EFFECT
------------------------- */

const reasonCards =
  document.querySelectorAll(".reason-card");

reasonCards.forEach(card => {

  card.addEventListener("click", () => {

    card.style.transform = "scale(1.05)";

    setTimeout(() => {

      card.style.transform = "";

    }, 250);

  });

});


/* -------------------------
   OPEN WHEN LETTERS
------------------------- */

const letterModal =
  document.getElementById("letterModal");

const letterText =
  document.getElementById("letterText");

const letterCards =
  document.querySelectorAll(".letter-card");

const closeLetter =
  document.getElementById("closeLetter");

const closeLetterBtn =
  document.getElementById("closeLetterBtn");


letterCards.forEach(card => {

  card.addEventListener("click", () => {

    const message =
      card.getAttribute("data-message");

    letterText.textContent = message;

    letterModal.classList.add("show");

  });

});


function closeLetterModal() {

  letterModal.classList.remove("show");

}


closeLetter.addEventListener(
  "click",
  closeLetterModal
);

closeLetterBtn.addEventListener(
  "click",
  closeLetterModal
);


/* -------------------------
   SURPRISE
------------------------- */

const surpriseBtn =
  document.getElementById("surpriseBtn");

const surpriseMessage =
  document.getElementById("surpriseMessage");


surpriseBtn.addEventListener("click", () => {

  surpriseMessage.classList.remove("hidden");

  surpriseBtn.textContent =
    "You found it! 🥹❤️";

  for (let i = 0; i < 15; i++) {

    setTimeout(() => {

      createHeart();

    }, i * 100);

  }

});


/* -------------------------
   YES BUTTONS
------------------------- */

const loveModal =
  document.getElementById("loveModal");

const yesBtn =
  document.getElementById("yesBtn");

const yesBtn2 =
  document.getElementById("yesBtn2");

const closeLoveModal =
  document.getElementById("closeLoveModal");


function showLoveModal() {

  loveModal.classList.add("show");

  for (let i = 0; i < 25; i++) {

    setTimeout(() => {

      createHeart();

    }, i * 80);

  }

}


yesBtn.addEventListener(
  "click",
  showLoveModal
);

yesBtn2.addEventListener(
  "click",
  showLoveModal
);


closeLoveModal.addEventListener("click", () => {

  loveModal.classList.remove("show");

});


/* -------------------------
   CLOSE MODAL OUTSIDE
------------------------- */

window.addEventListener("click", (event) => {

  if (event.target === letterModal) {

    letterModal.classList.remove("show");

  }

  if (event.target === loveModal) {

    loveModal.classList.remove("show");

  }

});


/* -------------------------
   MUSIC
------------------------- */

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click", async () => {

  try {

    if (!musicPlaying) {

      await music.play();

      musicPlaying = true;

      musicBtn.textContent = "🔊";

    } else {

      music.pause();

      musicPlaying = false;

      musicBtn.textContent = "🎵";

    }

  } catch (error) {

    alert(
      "Bubu, pehle song.mp3 file website me upload karo ❤️"
    );

  }

});
