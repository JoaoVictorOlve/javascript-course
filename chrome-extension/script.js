// const inputEl = document.querySelector("#input-el")
// const inputBtn = document.querySelector("#input-btn")
// const tabBtn = document.querySelector("#tab-btn")
// const deleteBtn = document.querySelector("#delete-btn")
// const ulEl = document.querySelector("#ul-el")

// myLeads = []

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if(leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }


// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// tabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     })
// })

// deleteBtn.addEventListener("dblclick", function(){
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// function render(leads){
//     let listItems = ""

//     for (let i = 0; i < leads.length; i++){
//         listItems += `<li><a target='_blank' href='${leads[i]}' > ${leads[i]} </a></li>`
//     }

//     ulEl.innerHTML = listItems
// }

let countriesSentence = "largest countries"
let countriesList = ["China", "India", "USA"]

let fruitsSentence = "best fruits"
let fruitsList = ["Bananas", "Apples"]

function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `

    let lastIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++){
        if (i === lastIndex){
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

console.log(generateSentence(countriesSentence, fruitsList))