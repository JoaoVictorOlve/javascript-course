let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

let fruit = ["orange", "apple", "orange", "apple", "orange", "apple"]

function orderFruits(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "orange") {
            orangeShelf.textContent += fruit[i] + " "
        } else if(fruit[i] === "apple"){
            appleShelf.textContent += fruit[i] + " "
        } else {
            console.log("Algo fora do padrão aconteceu")
        }
    }
}

orderFruits()