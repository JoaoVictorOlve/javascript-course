// let start_game_btn = document.getElementById("start-game-btn")
// let new_card_btn = document.getElementById("new-card-btn")
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]

// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// start_game_btn.addEventListener("click", startGame)

// function getRandomCard(){
//     return 5
// }

// function startGame(){
//     renderGame()
// }

// function renderGame(){
//     if (sum <= 20){
//         hasBlackJack = false
//         isAlive = true
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21){
//         hasBlackJack = true
//         isAlive = true
//         message = "You've got Blackjack!"
//     } else {
//         hasBlackJack = false
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     console.log(message)
//     messageEl.textContent = message
//     cardsEl.textContent = "Cards: "
//     for (let i=0; i < cards.length; i++){
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
// }

// new_card_btn.addEventListener("click", newCard)

// function newCard(){
//     console.log("Drawing a new card!")
//     let newCard = getRandomCard()
//     cards.push(newCard)
//     sum += newCard
//     renderGame()
// }

function rollDice(){
    return Math.floor((Math.random() * 6) + 1)
}

result = rollDice()

console.log(result)