const board = document.querySelector('.board')
let color = 'black'
let click = false
// createBoard(16)

function createBoard(size){
    let squares = board.querySelectorAll('div')
    squares.forEach(square => square.remove())
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let total = size*size;
    for (let i=0; i<total; i++){
        let pixel = document.createElement('div')
        pixel.style.background = 'white'
        pixel.addEventListener('mouseover', draw)
        pixel.classList.add('border')
        pixel.classList.add('pixelhover')
        board.appendChild(pixel)
    }
}
function changeSize(){
    document.querySelector('form').onsubmit = function(){
        let size = document.querySelector('#size').value
        if (size >= 2 && size <=100) {
            createBoard(size)
            displayPenMode()
        }
        else console.log('CRASH HONDA SI');
        return false;
    }
}
changeSize() //Watch for changes in grid size change form

function changeColor(colorInput){
    color = colorInput
    console.log(color)
}

function draw(){
    if (click){
        if (color === 'random') this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        else this.style.backgroundColor = color
    }
}

document.querySelector('.board').addEventListener('click', changeClick)

function changeClick(){
    click = !click
    if (click) document.querySelector('.pen').innerHTML = '<h2>Pen: Enabled</h2>'
    else document.querySelector('.pen').innerHTML = '<h2>Pen: Disabled (Click board to enable!)</h2>'
}

function displayPenMode(){
    if (click) document.querySelector('.pen').innerHTML = '<h2>Pen: Enabled</h2>'
    else document.querySelector('.pen').innerHTML = '<h2>Pen: Disabled (Click board to enable!)</h2>'
}

function promptForSize(){
    let size = prompt("How many pixels per side? (Max: 100)")
    if (size >= 2 && size <=100) {
        createBoard(size)
        displayPenMode()
    }
    else console.log('CRASH HONDA SI');

}
// logic when 'reset' button is pressed
function reset(){
    let squares = board.querySelectorAll('div')
    squares.forEach(square => square.remove())
}
