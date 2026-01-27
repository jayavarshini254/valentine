function scrollToLove() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "22px";
    heart.style.animation = "float 4s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
