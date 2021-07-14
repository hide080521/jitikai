function btnAction(){
    let menu = document.querySelector(".ulArea");
    let btnTop = document.querySelector('.top');
    let btnMid = document.querySelector('.mid');
    let btnBtm = document.querySelector('.btm');


//   menu.classList.toggle("active");
   menu.classList.toggle('off');
   btnTop.classList.toggle('top_close');
   btnMid.classList.toggle('mid_close');
   btnBtm.classList.toggle('btm_close');
}

const btn =document.querySelector(".btn");
btn.addEventListener("click",btnAction);
