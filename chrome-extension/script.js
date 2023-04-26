const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

let myLeads = ["www.awesomelead.com", "www.steam.com", "www.jefferson.com"]

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++)[
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
]
