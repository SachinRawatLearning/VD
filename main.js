// Floating hearts background
function createHearts() {
  const container = document.querySelector(".hearts-container");
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 6 + "s";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    container.appendChild(heart);
  }
}

// Move No button randomly on hover/touch
function moveNoButton(e) {
  const noBtn = document.getElementById("noBtn");
  const containerRect = document
    .querySelector(".buttons")
    .getBoundingClientRect();
  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  // Avoid overlapping Yes button roughly
  const yesBtn = document.getElementById("yesBtn");
  const yesRect = yesBtn.getBoundingClientRect();
  if (
    newX > yesRect.left - containerRect.left - 50 &&
    newX < yesRect.right - containerRect.left + 50
  ) {
    newX = Math.random() * maxX;
  }

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  createHearts();

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("yesMessage");
  const buttons = document.querySelector(".buttons");

  // Hover and touch for No button (mobile friendly)
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      moveNoButton(e);
    },
    { passive: false },
  );

  yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    message.classList.remove("hidden");
    // Extra hearts for celebration
    createHearts();
  });
});
