function showMessage() {
  document.getElementById("message").style.display = "block";
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
