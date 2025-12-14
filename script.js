let currentStep = -1;
let steps = document.querySelectorAll("#stepList li");
let totalSteps = steps.length;
let timeLeft = 30 * 60;
let timerInterval;

function toggleIngredients() {
    const ing = document.getElementById("ingredients");
    ing.style.display = ing.style.display === "block" ? "none" : "block";
}

function toggleSteps() {
    const stepsSection = document.getElementById("steps");
    stepsSection.style.display = stepsSection.style.display === "block" ? "none" : "block";
}

function startCooking() {
    currentStep = 0;
    highlightStep();
    startTimer();
}

function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        highlightStep();
    }
}

function highlightStep() {
    steps.forEach(step => step.classList.remove("active-step"));
    steps[currentStep].classList.add("active-step");

    let progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

/* Bonus Timer */
function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            return;
        }
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText =
            `⏳ Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}
function printRecipe() {
    window.print();
}
