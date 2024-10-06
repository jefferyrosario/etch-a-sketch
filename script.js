
function createDiv() {
    const div = document.createElement("div")
    div.classList.add("div")
    return div
}

function createGrid(gridSize = 16, width = "20px", height = "20px") {

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = createDiv()
            div.classList.add("div")
            div.style.height = height
            div.style.width = width
            container.appendChild(div)
            if (j == gridSize - 1) {
                const breakIt = document.createElement("secondBreak")
                breakIt.classList.add("secondBreak")
                container.appendChild(breakIt)
            }
        }
    }
    hover()
}

const container = document.querySelector(".container")

createGrid(16)

function hover() {
    const allDivs = document.querySelectorAll(".div")
    allDivs.forEach((divs) => {
        divs.addEventListener("mouseover", () => {
            divs.id = "hover"
            console.log(divs.className)
        })
    })
}

const buttons = document.querySelector(".button")
let gridSize = 16
console.log(container.getComputedStyle())
buttons.addEventListener('click', () => {
    if (container.firstChild) {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }
    gridSizePromt = prompt("How big do you want your grid? ex. 5 will give a 5x5 grid.")
    gridSize = parseInt(gridSizePromt)
    width = 20 + "px"
    height = 20 + "px"
    createGrid(gridSize, width = width, height = height)
})





