
    const bgMusic = document.getElementById("bgMusic");
    const introModal = document.getElementById("introModal");
    const continueButton = document.getElementById("continueButton");
    const playButton = document.getElementById("play-button");

    bgMusic.volume = 0.3;

    let experienceStarted = false;

    function startExperience() {
      if (experienceStarted) return;
      experienceStarted = true;

      bgMusic.play().catch((error) => {
        console.warn("The browser did not allow background music:", error);
      });

      introModal.classList.add("is-hidden");
      introModal.setAttribute("aria-hidden", "true");
      window.setTimeout(() => introModal.remove(), 380);
    }

    introModal.addEventListener("click", startExperience);
    continueButton.addEventListener("click", (event) => {
      event.stopPropagation();
      startExperience();
    });

    playButton.addEventListener("click", () => {
      window.location.href = "front.html";
    });


    //front.html JAVA_SCRIPT_CODE AHEAD - - - - - -

    //FRONT FRONT

    //FRONT FRONT

