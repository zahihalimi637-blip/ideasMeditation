let timer = document.querySelector("#timer");
let btn = document.querySelector("#Button");

let interval = null;

function startTimer() {
    // Stop the previous timer, if one exists
    clearInterval(interval);

    // Reset the countdown to 8 minutes
    let remainingSeconds = 8 * 60;

    // Start a fresh timer
    interval = setInterval(() => {
        let minutes = Math.floor(remainingSeconds / 60);
        let seconds = remainingSeconds % 60;

        timer.innerHTML =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        remainingSeconds--;

        if (remainingSeconds < 0) {
            clearInterval(interval);
            interval = null;
            timer.innerHTML = "Timer finished!";
        }
    }, 1000);
}

btn.addEventListener("click", startTimer);

const ideaInput = document.getElementById("ideaInput");
const writtenNotes = document.getElementById("writtenNotes");

ideaInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const idea = ideaInput.value.trim();

        if (idea !== "") {
            const bullet = document.createElement("li");
            bullet.textContent = idea;

            let list = writtenNotes.querySelector("ul");

            if (!list) {
                list = document.createElement("ul");
                writtenNotes.appendChild(list);
            }

            list.appendChild(bullet);

            ideaInput.value = "";
        }
    }
});