let opponent;

let enemyOne =
{
  name: "Steve",
  hp: 12,
  hits: 0,
  items: [],
}
let enemyTwo = {
  name: "Dave",
  hp: 15,
  hits: 0,
  items: []
}
let availableItems = {
  stoneFist: {
    effect: 3,
  },
  knifeHand: {
    effect: 1
  },
  leadFoot: {
    effect: 2
  }
}


let hpElem = document.querySelector("#life")
let hitsElem = document.querySelector("#strikes")


function choose(i) {
  if (!opponent) {


    switch (i) {
      case 1:
        opponent = enemyOne
        break;
      case 2:
        opponent = enemyTwo
        break;
    }
    hitsElem.innerHTML = opponent.hits.toString()
    hpElem.innerHTML = opponent.hp.toString()
  }
}

function hit(i) {
  if (opponent.hp == 0) {
    return
  }

  switch (i) {
    case 1:
      opponent.hp -= 3 + addMods()
      break;
    case 2:
      opponent.hp -= 1 + addMods()
      break;
    case 3:
      opponent.hp -= 5 + addMods()
  }
  opponent.hits += 1


  hitsElem.innerHTML = opponent.hits.toString()
  hpElem.innerHTML = opponent.hp.toString()
  update()
}



function update() {
  if (opponent.hp <= 0) {
    alert("opponent is dead, choose another")

    window.location.reload()
  }
  hitsElem.innerHTML = opponent.hits.toString()
  hpElem.innerHTML = opponent.hp.toString()
}



function giveItem(item) {
  if (!opponent.items.length) {
    opponent.items.push(availableItems[item])
  }
}

function addMods() {
  let effectTotal = 0
  for (let index = 0; index < opponent.items.length; index++) {
    let item = opponent.items[index];
    effectTotal += item.effect
  }
  return effectTotal

}