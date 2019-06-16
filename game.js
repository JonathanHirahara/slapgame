let Steve = {
  hitPoints: 20,

}
let Ralph = {
  hitPoints: 23,
}

let strikes = 0;


let hpElem = document.querySelector("#life")

let hitsElem = document.querySelector("#strikes")

function update() {
  strikes = 0

  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = Ralph.hitPoints.toString()
}

function slap() {
  Ralph.hitPoints -= 1
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = Ralph.hitPoints.toString()
  death()
}

function punch() {
  Ralph.hitPoints -= 3
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = Ralph.hitPoints.toString()
  death()
}
function stomp() {
  Ralph.hitPoints -= 2
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = Ralph.hitpoints.toString()
  death()
}


function death() {
  if (Ralph.hitPoints <= 0) {
    alert("opponent is dead")
    update()
  }
} update()
