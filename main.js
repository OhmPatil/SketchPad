const board = document.querySelector('.board')
createBoard(document.querySelector('#size').value)


function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let total = size*size;
    for (let i=0; i<total; i++){
        let pixel = document.createElement('div')
        pixel.style.background = 'red'
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

changeSize()