const text = "I Love You Forever 💖";
let i=0;
function type(){
 if(i<text.length){
   document.getElementById("typing").innerHTML += text.charAt(i);
   i++;
   setTimeout(type,100);
 }
}
type();

function scrollToGallery(){
 document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}

function toggleTheme(){
 document.body.classList.toggle("dark");
}

const music=document.getElementById("music");
function toggleMusic(){
 music.paused ? music.play() : music.pause();
}

function calcLove(){
 const n=Math.floor(Math.random()*15)+85;
 document.getElementById("loveResult").innerHTML=`${n}% Match 💞🔥`;
}

function unlock(){
 const val=document.getElementById("pass").value;
 if(val.toLowerCase()=="love"){
  document.getElementById("secretMsg").innerHTML="You are my forever and always 💍❤️";
 }else{
  document.getElementById("secretMsg").innerHTML="Try again 😜";
 }
}

/* Floating Hearts */

const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];

for(let i=0;i<50;i++){
 hearts.push({
   x:Math.random()*canvas.width,
   y:Math.random()*canvas.height,
   s:Math.random()*5+2,
   v:Math.random()+0.5
 });
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="rgba(255,0,100,.7)";
 hearts.forEach(h=>{
   ctx.beginPath();
   ctx.arc(h.x,h.y,h.s,0,Math.PI*2);
   ctx.fill();
   h.y-=h.v;
   if(h.y<0) h.y=canvas.height;
 });
 requestAnimationFrame(draw);
}
draw();