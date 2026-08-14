document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     START OUR STORY
  ========================= */

  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");
  const startBtn = document.getElementById("startBtn");

  if (startBtn && welcomeScreen && mainContent) {

    startBtn.addEventListener("click", () => {

      welcomeScreen.style.opacity = "0";
      welcomeScreen.style.pointerEvents = "none";

      setTimeout(() => {

        welcomeScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        // Make sure content is visible
        mainContent.style.display = "block";
        mainContent.style.opacity = "1";

        createHearts();

        // Smoothly go to the story
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 600);

    });

  }


  /* =========================
     FLOATING HEARTS
  ========================= */

  function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [
      "❤️",
      "💕",
      "💗",
      "💖",
      "💓",
      "💘"
    ];

    heart.textContent =
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


  let heartsStarted = false;

  function createHearts() {

    if (heartsStarted) return;

    heartsStarted = true;

    setInterval(() => {
      createHeart();
    }, 700);

  }


  /* =========================
     REASON CARDS
  ========================= */

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


  /* =========================
     LETTER MODAL
  ========================= */

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

      if (letterText) {
        letterText.textContent = message;
      }

      if (letterModal) {
        letterModal.classList.add("show");
      }

    });

  });


  function closeLetterModal() {

    if (letterModal) {
      letterModal.classList.remove("show");
    }

  }


  if (closeLetter) {
    closeLetter.addEventListener(
      "click",
      closeLetterModal
    );
  }

  if (closeLetterBtn) {
    closeLetterBtn.addEventListener(
      "click",
      closeLetterModal
    );
  }


  /* =========================
     SURPRISE
  ========================= */

  const surpriseBtn =
    document.getElementById("surpriseBtn");

  const surpriseMessage =
    document.getElementById("surpriseMessage");


  if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

      if (surpriseMessage) {
        surpriseMessage.classList.remove("hidden");
      }

      surpriseBtn.textContent =
        "You found it! 🥹❤️";

      for (let i = 0; i < 15; i++) {

        setTimeout(() => {
          createHeart();
        }, i * 100);

      }

    });

  }


  /* =========================
     YES BUTTONS
  ========================= */

  const loveModal =
    document.getElementById("loveModal");

  const yesBtn =
    document.getElementById("yesBtn");

  const yesBtn2 =
    document.getElementById("yesBtn2");

  const closeLoveModal =
    document.getElementById("closeLoveModal");


  function showLoveModal() {

    if (loveModal) {
      loveModal.classList.add("show");
    }

    for (let i = 0; i < 25; i++) {

      setTimeout(() => {
        createHeart();
      }, i * 80);

    }

  }


  if (yesBtn) {
    yesBtn.addEventListener(
      "click",
      showLoveModal
    );
  }


  if (yesBtn2) {
    yesBtn2.addEventListener(
      "click",
      showLoveModal
    );
  }


  if (closeLoveModal) {

    closeLoveModal.addEventListener("click", () => {

      if (loveModal) {
        loveModal.classList.remove("show");
      }

    });

  }


  /* =========================
     CLOSE MODALS
  ========================= */

  window.addEventListener("click", (event) => {

    if (
      letterModal &&
      event.target === letterModal
    ) {
      letterModal.classList.remove("show");
    }

    if (
      loveModal &&
      event.target === loveModal
    ) {
      loveModal.classList.remove("show");
    }

  });


  /* =========================
     MUSIC
  ========================= */

  const music =
    document.getElementById("music");

  const musicBtn =
    document.getElementById("musicBtn");

  let musicPlaying = false;


  if (musicBtn && music) {

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
          "Song play nahi ho raha. GitHub me Song.mp3 ka filename check karo ❤️"
        );

      }

    });

  }

});
