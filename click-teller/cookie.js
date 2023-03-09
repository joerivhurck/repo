
let count = 0;
const cookieBtn = document.querySelector('.btnCookie');
cookieBtn.addEventListener("click",clickCookie)

const countCookie = document.querySelector(".counter");


function clickCookie(){
  count++;
  countCookie.innerText = count;
}

const cursorBtn = document.querySelector('.cursor');


const omaBtn = document.querySelector('.oma');


function disable(){
  cursorBtn.disabled = true;
  omaBtn.disabled = true;
}

function enable(){
  cursorBtn.disabled = false;
  omaBtn.disabled = false;
}



if(countCookie.innerText === "10"){
  enable();
}else{
  disable();
}



