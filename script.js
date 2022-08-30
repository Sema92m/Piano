const kits = ["1", "2", "3", "4", "5", "6", "7"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("piano-key-white");
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = "./audio/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(0.9)";

            setTimeout(() => {
                btnEl.style.transform = "scale(1.0)";
            }, 100);
        }
    });
});
11