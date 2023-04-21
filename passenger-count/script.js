let countEl = document.getElementById("count-el")
let previousEntries = document.getElementById("previous-entries")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    previousEntries.textContent += countStr
    count = 0
    countEl.textContent = 0
}

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

