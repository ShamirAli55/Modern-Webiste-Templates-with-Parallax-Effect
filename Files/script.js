var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",(dets)=>{
     crsr.style.left = dets.x - 10+ "px";
     crsr.style.top = dets.y  - 20 + "px";
})