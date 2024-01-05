let timer = 60;
let score = 0;
let hitNumber;
let clutter = "";

const downtime = document.getElementById("downtime");
const bubble = document.querySelector("#bubblec");
const hitval = document.getElementById("hitval");
const scoreval = document.getElementById("scoreval");

function makeBubble() {
  clutter = "";
  for (let i = 1; i <= 171; i++) {
    let ra = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ra}</div>`;
    bubble.innerHTML = clutter;
  }
}

function hitfun() {
  hitNumber = Math.floor(Math.random() * 10);
  hitval.textContent = hitNumber;
}

function increaseScore() {
  score += 10;
  scoreval.textContent = score;
}

function runTimer() {
  let time = setInterval(() => {
    if (timer > 0) {
      timer--;
      downtime.textContent = timer;
    } else {
      clearInterval(time);
      bubble.innerHTML = `Game Over`;
    }
  }, 1000);
}
bubble.addEventListener("click", (e) => {
  let btnNumber = Number(e.target.textContent);

  if (hitNumber === btnNumber) {
    increaseScore();
    makeBubble();
    hitfun();
  }
});

makeBubble();
runTimer();
hitfun();
