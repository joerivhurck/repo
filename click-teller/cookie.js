
let count = 0;
const cookieBtn = document.querySelector('.btnCookie');
cookieBtn.addEventListener("click",clickCookie)

const countCookie = document.querySelector(".counter");


function clickCookie(){
  count++;
  countCookie.innerText = count;
}

const cursorBtn = document.querySelector('.cursor');
cursorBtn.disabled = true;

const omaBtn = document.querySelector('.oma');
omaBtn.disabled = true;







