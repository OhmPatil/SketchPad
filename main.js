const board = document.querySelector('.board')
let color = 'black'
// createBoard(document.querySelector('#size').value)
createBoard(16)

function createBoard(size){
    let squares = board.querySelectorAll('div')
    squares.forEach(square => square.remove())
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let total = size*size;
    for (let i=0; i<total; i++){
        let pixel = document.createElement('div')
        // pixel.style.background = 'red'
        pixel.addEventListener('mouseover', draw)
        pixel.classList.add('pixel')
        pixel.classList.add('pixelhover')
        board.appendChild(pixel)
    }
}
function changeSize(){
    document.querySelector('form').onsubmit = function(){
        let size = document.querySelector('#size').value
        createBoard(size)
        return false;
    }
}
changeSize() //Watch for changes in grid size change form

function changeColor(colorInput){
    color = colorInput
    console.log(color)
}

function draw(){
    if (color === 'random') this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    else this.style.backgroundColor = color
}
// logic when 'reset' button is pressed
function reset(){
    if (document.querySelector('#size').value != '') createBoard(document.querySelector('#size').value)
    else createBoard(16)
}
