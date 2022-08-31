const kitsWhite = ["1", "2", "3", "4", "5", "6", "7"];
const kitsBlack = ["q", "w", "e", "r", "t", "y",];
const containerEl = document.querySelector(".container");
const containerEl2 = document.querySelector(".container2");

kitsWhite.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("piano-key-white");
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");

    function transformBtn() {
        btnEl.style.transform = "scale(0.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1.0)";
        }, 100);
    }

    audioEl.src = "./audio/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.play();
        transformBtn();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            transformBtn();
        }
    });
});


kitsBlack.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("piano-key-black");
    btnEl.innerText = kit;
    containerEl2.appendChild(btnEl);
    const audioEl = document.createElement("audio");

    function transformBtn() {
        btnEl.style.transform = "scale(0.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1.0)";
        }, 100);
    }

    audioEl.src = "./audio/" + kit + ".mp3";
    containerEl2.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.play();
        transformBtn();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            transformBtn();
        }
    });
});
