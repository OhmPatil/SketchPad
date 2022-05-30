const board = document.querySelector('.board')

createBoard(document.querySelector('#size').value)

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let total = size*size;
    for (let i=0; i<total; i++){
        let pixel = document.createElement('div')
        pixel.style.background = 'white'
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

const pixels = document.querySelectorAll('.pixel')

// logic when 'black' button is pressed
function black(){
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => pixel.setAttribute('style', 'background:black;')))
}

// logic when 'reset' button is pressed
function reset(){
    pixels.forEach(pixel => pixel.setAttribute('style', 'background:white'))
}
