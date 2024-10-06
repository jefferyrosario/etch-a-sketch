
function createDiv() {
    const div = document.createElement("div")
    div.classList.add("div")
    return div
}

function hover() {
    const allDivs = document.querySelectorAll(".div")
    allDivs.forEach((divs) => {
        divs.addEventListener("mouseover", () => {
            divs.id = "hover"
            console.log(divs.className)
        })
    })
}

function createGrid(gridSize = 16) {
    
    let squareSize = 900 / gridSize

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = createDiv()
            div.style.width = `${squareSize}px`
            div.style.height = `${squareSize}px`
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
const buttons = document.querySelector(".button")
let gridSize = 16
createGrid(40)

buttons.addEventListener('click', () => {
    if (container.firstChild) {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }
    gridSizePromt = prompt("How big do you want your grid? ex. 5 will give a 5x5 grid.")
    gridSize = parseInt(gridSizePromt)
    createGrid(gridSize)
})





