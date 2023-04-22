let start_game_btn = document.getElementById("start-game-btn")
let new_card_btn = document.getElementById("new-card-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = 9
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

start_game_btn.addEventListener("click", startGame)

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        hasBlackJack = false
        isAlive = true
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        hasBlackJack = true
        isAlive = true
        message = "You've got Blackjack!"
    } else {
        hasBlackJack = false
        isAlive = false
        message = "You're out of the game!"
    }
    console.log(message)
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
}

new_card_btn.addEventListener("click", newCard)

function newCard(){
    console.log("Drawing a new card!")
    let newCard = 1
    sum += newCard
    renderGame()
}