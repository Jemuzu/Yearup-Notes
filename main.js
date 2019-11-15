let playerParty = document.getElementById('player-party')
let generateBtn = document.getElementById('generate-btn')
generateBtn.addEventListener('click', () = {
  let list = []
  while (list.length < 4) {
    let person = prompt('Give me a name to this person:')
    list.push(person)
  }
  generateUnits(party, list)
}}

const generateUnits = (party, list) => { //Positional Argument
  for (name of list) {
    let unit = new Unit(name)
    party.add(unit)
  }
  return true
}




class Party {
  constructor(name) {
    this.name = name
    this.units = []

  }

  add(unit) {
    this.units.push(unit)
    console.log(`${unit.name} has joined ${this.name}`)
    this.drawUnitOnScreen(unit)
  }

  drawUnitOnScreen(unit) {
    playerParty
    let li = document.createElement('li')
    li.innerHTML = `${unit.name} --HP: ${unit.hp}`
    playerParty.appendChild(li)
  }
}



class Unit {
  constructor(name)
  this.name = name
  tis,hp = 100
  this.atk = 25
  this.alive = true
  }
}

let names = ['Doctor Mario', 'Sonic', 'James', 'Mario']
let party = new Party('Lets dance!')
