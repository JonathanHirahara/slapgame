let opponentOne = {
  name: "Steve",
  hitPoints: 20,
}
let opponentTwo = {
  name: "Ralph",
  hitPoints: 23,
}

let strikes = 0;
let hpElem = document.querySelector("#life")
let hitsElem = document.querySelector("#strikes")

function slap() {
  opponentTwo.hitPoints -= 1
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = opponentTwo.hitPoints.toString()
  death()
}
function punch() {
  opponentTwo.hitPoints -= 3
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = opponentTwo.hitPoints.toString()
  death()
}
function stomp() {
  opponentTwo.hitPoints -= 2
  strikes += 1
  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = opponentTwo.hitpoints.toString()
  death()
}
function death() {
  if (opponentTwo.hitPoints <= 0) {
    alert("opponent is dead")
    update()
  }
}
function update() {
  strikes = 0

  hitsElem.innerHTML = strikes.toString()
  hpElem.innerHTML = opponentTwo.hitPoints.toString()
}

update()