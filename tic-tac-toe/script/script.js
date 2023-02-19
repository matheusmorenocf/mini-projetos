const buttons = document.querySelectorAll(".buttonGame")
const board = document.getElementById('turn')
const resetButton = document.getElementById('buttonReset') 
const winner = document.getElementById('winner')
let turn = 'X'
let vBoard = []

const reset = () => {
  turn = 'X'
  buttons.forEach(function(element){
    element.classList.remove('win')
    element.classList.remove('turnO')
    element.classList.remove('turnX')
    element.disabled = ''
    element.innerHTML = ``
    board.classList.remove('turnO')
    board.classList.remove('turnX')
    board.innerHTML = `<span class="material-symbols-outlined">
    cancel
    </span>`
    winner.innerHTML = ``
  })
}
const changeTurn = () =>{
  turn == 'X' ? turnX(board):turnO(board)

  turn == 'X' ? turn = 'O':turn = 'X'
}
const turnX = (element) => {
  element.classList.remove('turnO')
  element.classList.add('turnX')
  element.innerHTML = `<span class="material-symbols-outlined">
        cancel
    </span>`
}
const turnO = (element) => {
  element.classList.remove('turnX')
  element.classList.add('turnO')
  element.innerHTML = `<span class="material-symbols-outlined">
        lens
    </span>`
}

function initializeGame(){
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  reset()
  buttons.forEach(function(element){
    
    element.addEventListener('click', handleBoardClick)
      
    })
  }

function handleBoardClick(ev){
  const btn = ev.currentTarget
  const rowColumnPair = btn.dataset.region.split('.')
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  if(turn === 'X'){
    turnX(btn)
    vBoard[row][column] = 'X'
  }else{
    turnO(btn)
    vBoard[row][column] = 'O'
  }
  const winRegions = getWinRegions()
  if (winRegions.length > 0){
    handleWin(winRegions)
    buttons.forEach(function(element){
      element.disabled = 'true'
    })
  }
  changeTurn()
}
function handleWin(regions){
  regions.forEach(function(region){
    document.querySelector('[data-region="'+ region +'"]').classList.add('win')
    winner.innerHTML =  turn == 'X' ? `<span>O vencedor é</span> <span class="material-symbols-outlined turnX">
    cancel
    </span>`:`<span>O vencedor é</span> <span class="material-symbols-outlined turnO">
    lens
    </span>`
  })

}

function getWinRegions(){
  const winRegions = []
  if(vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][1] === vBoard [0][2]){
    winRegions.push('0.0', '0.1', '0.2')
  }if(vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][1] === vBoard [1][2]){
    winRegions.push('1.0', '1.1', '1.2')
  }if(vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][1] === vBoard [2][2]){
    winRegions.push('2.0', '2.1', '2.2')
  }if(vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[1][0] === vBoard [2][0]){
    winRegions.push('0.0', '1.0', '2.0')
  }if(vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[1][1] === vBoard [2][1]){
    winRegions.push('0.1', '1.1', '2.1')
  }if(vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[1][2] === vBoard [2][2]){
    winRegions.push('0.2', '1.2', '2.2')
  }if(vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[1][1] === vBoard [2][2]){
    winRegions.push('0.0', '1.1', '2.2')
  }if(vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[1][1] === vBoard [2][0]){
    winRegions.push('0.2', '1.1', '2.0')
  }
  return winRegions
}


resetButton.addEventListener('click', function(){
  initializeGame()
})

initializeGame()