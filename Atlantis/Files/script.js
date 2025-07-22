var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x - 10 + "px";
  crsr.style.top = dets.y - 20 + "px";
});

let moon = document.querySelector("#moon");
let train = document.querySelector("#train");
let text = document.getElementById("#text");


window.addEventListener('scroll', () => 
{
  let value = window.scrollY;
  text.style.top = value * 0.5 + 'px';
    text.style.left = value * 0.5 + 'px';
});
