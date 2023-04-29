let imgContainer = document.querySelector(".img-container")

const imgs = [
	"styles/hip1.jpg",
	"styles/hip2.jpg",
	"styles/hip3.jpg"
]

// for (let i = 0; i < imgs.length; i++){
//     let img = document.createElement("img")
//     img.src = imgs[i]
//     img.alt = "Employee in the company"
//     imgContainer.appendChild(img)
// }

function renderImages(){
    let images = ""
    for (let i = 0; i < imgs.length; i++){
        let img = `<img src=${imgs[i]} alt="Employee in the company" >`
        images += img
    }
    imgContainer.innerHTML = images
}

renderImages()