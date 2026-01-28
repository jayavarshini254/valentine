function openSurprise(){
  document.getElementById("modal").style.display = "flex";
}

function closeSurprise(){
  document.getElementById("modal").style.display = "none";
}

function showLove(){
  const percent = Math.floor(Math.random() * 20) + 80;
  document.getElementById("result").innerHTML =
    `Love Compatibility: ${percent}% 💖🔥`;
}
