const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("msg");


/* 🎉 YES CLICK = CONFETTI + MESSAGE */
yesBtn.addEventListener("click", () => {

  msg.innerText = "Yayyy!! Best decision ever 💖✨";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
});


/* 😈 NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
