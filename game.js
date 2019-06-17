let enemyOne =
{
  name: "Steve",
  hp: 12
}
let enemyTwo = {
  name: "Dave",
  hp: 15
}
let item =
{
  name: "strength stim",
  effect: 2,
}

let opponent;
let hp = 0;
let hits = 0
let hpElem = document.querySelector("#life")
let hitsElem = document.querySelector("#strikes")
hitsElem.innerHTML = hits.toString()
hpElem.innerHTML = hp.toString()

function choose(i) {
  switch (i) {
    case 1:
      opponent = enemyOne
      hp = enemyOne.hp
      hitsElem.innerHTML = hits.toString()
      hpElem.innerHTML = hp.toString()
      break;
    case 2:
      opponent = enemyTwo
      hp = enemyTwo.hp
      hitsElem.innerHTML = hits.toString()
      hpElem.innerHTML = hp.toString()
      break;
  }
}

function hit(i) {
  switch (i) {
    case 1:
      hp -= 3
      break;
    case 2:
      hp -= 1
      break;
    case 3:
      hp -= 5
  } hits += 1


  hitsElem.innerHTML = hits.toString()
  hpElem.innerHTML = hp.toString()
  death()
}

function death() {
  if (hp <= 0) {
    alert("opponent is dead")
    update()
  }
}
function update() {
  hits = 0
  hp = 0
  hitsElem.innerHTML = hits.toString()
  hpElem.innerHTML = hp.toString()
}

