let health = 10;
let hits = 0;


let lifeElem = document.querySelector("#life")

let hitsElem = document.querySelector("#strikes")

function update() {
  hits = 0
  health = 10
  hitsElem.innerHTML = hits.toString()
  lifeElem.innerHTML = health.toString()
}


function slap() {
  health -= 1
  hits += 1
  hitsElem.innerHTML = hits.toString()
  lifeElem.innerHTML = health.toString()
  death()
}

function punch() {
  health -= 3
  hits += 1
  hitsElem.innerHTML = hits.toString()
  lifeElem.innerHTML = health.toString()
  death()
}
function stomp() {
  health -= 2
  hits += 1
  hitsElem.innerHTML = hits.toString()
  lifeElem.innerHTML = health.toString()
  death()
}


function death() {
  if (health <= 0) {
    alert("opponent is dead")
    update()
  }
} update()
