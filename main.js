let outputEl = document.getElementById("outputEl");
let ballEl = document.getElementById("btn");

ballEl.addEventListener("click", btnClicked);

function btnClicked() {
    let randnum = Math.random();
    let question = document.getElementById("question").value.toLowerCase();
    console.log(question);
    if (question === "does a magic 8 ball actually work?") {
        outputEl.innerHTML = "How dare you doubt me!";
    } else if (randnum < 0.1) {
        outputEl.innerHTML = "Without a Doubt.";
    } else if (randnum < 0.3) {
        outputEl.innerHTML = "As I see it, yes";
    } else if (randnum < 0.5) {
        outputEl.innerHTML = "Concentrate and ask again.";
    } else if (randnum < 0.7) {
        outputEl.innerHTML = "Don't count on it.";
    } else if (randnum < 0.9) {
        outputEl.innerHTML = "Outlook not so good.";
    } else {
        outputEl.innerHTML = "Please repeat your question.";
    }
}