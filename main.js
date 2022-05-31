const board = document.querySelector('.board')

// createBoard(document.querySelector('#size').value)
// createBoard(16)

function createBoard(size){
    let squares = board.querySelectorAll('div')
    squares.forEach(square => square.remove())
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let total = size*size;
    for (let i=0; i<total; i++){
        let pixel = document.createElement('div')
        pixel.style.background = 'red'
        pixel.addEventListener('mouseover', ()=>{
            pixel.style.backgroundColor = 'black';
        })
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


// logic when 'reset' button is pressed
function reset(){
    createBoard(document.querySelector('#size').value)
}
