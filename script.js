function openLetter(text){
 document.getElementById("letterText").innerText=text;
 document.getElementById("modal").style.display="flex";
}

function closeLetter(){
 document.getElementById("modal").style.display="none";
}

const upload=document.getElementById("upload");
const photos=document.getElementById("photos");

upload.addEventListener("change",()=>{
 [...upload.files].forEach(file=>{
  const img=document.createElement("img");
  img.src=URL.createObjectURL(file);
  photos.appendChild(img);
 });
});

/* Floating hearts */

const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");

function resize(){
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;
}
resize();
window.onresize=resize;

let hearts=[];
for(let i=0;i<60;i++){
 hearts.push({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  s:Math.random()*4+2,
  v:Math.random()+0.5
 });
}

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="rgba(255,0,120,.7)";
 hearts.forEach(h=>{
  ctx.beginPath();
  ctx.arc(h.x,h.y,h.s,0,Math.PI*2);
  ctx.fill();
  h.y-=h.v;
  if(h.y<0) h.y=canvas.height;
 });
 requestAnimationFrame(animate);
}
animate();