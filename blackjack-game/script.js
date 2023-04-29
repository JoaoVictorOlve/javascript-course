let start_game_btn = document.getElementById("start-game-btn")
let new_card_btn = document.getElementById("new-card-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")


let player = {
    name : "Per",
    chips : 145,
    sayHello : function(){
        console.log("Hello")
    }
}

let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

player.sayHello()
playerEl.textContent = player.name + ": $" + player.chips

start_game_btn.addEventListener("click", startGame)

function getRandomCard(){
    let generatedCard = Math.floor((Math.random() * 13) + 1)
    if (generatedCard === 1) {
        return 11
    } else if (generatedCard > 10) {
        return 10
    } else {
        return generatedCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

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

    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

new_card_btn.addEventListener("click", newCard)

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card!")
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
    else {
        console.log("nope")
    }
}