let count = 0
let teller = 0

const cookieBtn = document.querySelector('.btnCookie')
cookieBtn.addEventListener('click', clickCookie)

const countCookie = document.querySelector('.counter')

const cursorBtn = document.querySelector('.cursor')
const omaBtn = document.querySelector('.oma')

function clickCookie() {
  count++
  teller++
  countCookie.innerText = count
}

function disable() {
  cursorBtn.disabled = true
  cookieBtn.disabled = false
}

function powerLock() {
  countCookie.addEventListener('DOMSubtreeModified', function () {
    if (teller < 10) {
      cookieBtn.disabled = false
      cursorBtn.disabled = true
    } else {
      cookieBtn.disabled = true
      cursorBtn.disabled = false
      teller = 0
    }
  })
}

function cursor() {
  newCounter = count += 2
  countCookie.innerText = newCounter
}

function ButtonStyle() {
  const styleCursor = document.querySelector('.cursor')
  styleCursor.classList.add('btn')
  styleCursor.classList.add('btn-primary')
  const styleBtnCookie = document.querySelector('.btnCookie')
  styleBtnCookie.classList.add('btn')
  styleBtnCookie.classList.add('btn-primary')
}

cursorBtn.addEventListener('click', cursor)

powerLock()
disable()
ButtonStyle()
