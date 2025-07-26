var jungle = document.querySelector("#txt1");
var h1 = document.querySelector("#txt2");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
window.addEventListener("scroll",()=>
{
    let value = window.scrollY;
    let v = window.scrollX;
    jungle.style.top = 40+ value * 5 + "%";
    h1.style.top = 40+ value * 5 + "%";
    b1.style.top = value * -1.5 + 'px';
    b1.style.left = value * 2 + 'px';
})