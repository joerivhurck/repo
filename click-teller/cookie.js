let count = 0
let clickCount = 0

const cookieBtn = document.querySelector('.btnCookie')
cookieBtn.addEventListener('click', clickCookie)

const countCookie = document.querySelector('.counter')

const cursorBtn = document.querySelector('.cursor')
const upgradeBtn = document.querySelector('.btnUpgrade')

function clickCookie() {
  count++
  clickCount++
  countCookie.innerText = count
  console.log(clickCount)
}

function disable() {
  cursorBtn.disabled = true
  cookieBtn.disabled = false
  upgradeBtn.disabled = true
}

function powerLock() {
  countCookie.addEventListener('DOMSubtreeModified', function () {
    if (clickCount < 10) {
      cookieBtn.disabled = false
      cursorBtn.disabled = true
    } else {
      cookieBtn.disabled = true
      cursorBtn.disabled = false
      clickCount = 0
    }
  })
}

function upgradeLock() {
  countCookie.addEventListener('DOMSubtreeModified', function () {
    if (countCookie.innerText >= 10) {
      upgradeBtn.disabled = false
    } else {
      upgradeBtn.disabled = true
    }
  })
}

function upgradeCost() {
  let upgradeCounter = (count -= 10)
  countCookie.innerText = upgradeCounter
}
function cursor() {
  let newCounter = (count += 2)
  countCookie.innerText = newCounter
}
let gameloopInterval = null
function toggleAutoPlay() {
  if (gameloopInterval === null) {
    gameloopInterval = setInterval(gameloop, 1000)
  }
}

function gameloop() {
  let loop = count++
  countCookie.innerText = loop
}

function ButtonStyle() {
  const styleCursor = document.querySelector('.cursor')
  styleCursor.classList.add('btn')
  styleCursor.classList.add('btn-warning')
  const styleBtnCookie = document.querySelector('.btnCookie')
  styleBtnCookie.classList.add('btn')
  styleBtnCookie.classList.add('btn-primary')
  const styleBtnUpgrade = document.querySelector('.btnUpgrade')
  styleBtnUpgrade.classList.add('btn')
  styleBtnUpgrade.classList.add('btn-danger')
}

cursorBtn.addEventListener('click', cursor)
upgradeBtn.addEventListener('click', toggleAutoPlay)
upgradeBtn.addEventListener('click', upgradeCost)

powerLock()
disable()
ButtonStyle()
upgradeLock()
