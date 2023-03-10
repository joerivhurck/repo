
let count = 0;

const cookieBtn = document.querySelector('.btnCookie');
cookieBtn.addEventListener("click",clickCookie)

const countCookie = document.querySelector(".counter");

const cursorBtn = document.querySelector('.cursor');
const omaBtn = document.querySelector('.oma');


function clickCookie(){
  count++;
  countCookie.innerText = count;
}

function disable(){
  cursorBtn.disabled = true;
  omaBtn.disabled = true;
}

function powerLock(){
  countCookie.addEventListener('DOMSubtreeModified',function(){
    if(parseInt(countCookie.textContent,10) >= 10){
      cursorBtn.disabled = false;
    }else{
      cursorBtn.disabled = true;
    }
  });
  
  countCookie.addEventListener('DOMSubtreeModified',function(){
    if(parseInt(countCookie.textContent,10) >= 100){
      omaBtn.disabled = false;
    }else{
      omaBtn.disabled = true;
    }
  });
}

function cursor(){
  newCounter = count-=10;
  countCookie.innerText = newCounter;
}
function oma(){
  newCounter = count-=100;
  countCookie.innerText = newCounter;
}
cursorBtn.addEventListener("click",cursor)
omaBtn.addEventListener("click",oma)


powerLock()
disable()

