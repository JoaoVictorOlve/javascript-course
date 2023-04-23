let greatingEl = document.querySelector("#greating-el")

let sentence = ["Hello", "my", "name", "is", "Jefferson", "Casagrande"]

for (let i = 0; i < sentence.length; i++){
    greatingEl.textContent += sentence[i] + " "
}