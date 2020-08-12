document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let width = 10
    let squares = []
    let bombAmount = 20



    //  create board
    function createBoard() {
        // get shuffled game array with random bombs
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('valid')
        console.log(bombArray)
        console.log(emptyArray)

        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.setAttribute("id", i)
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()





})