

const boardRegions = document.querySelectorAll('.btn')
let vBoard = []
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const output = document.getElementById('output')
let turnPlayer = ''

function initializeGame(){
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  document.getElementById('nameP1').disabled = 'true'
  document.getElementById('nameP2').disabled = 'true'
  turnPlayer = 'Jogador 1'
  playerOne.classList.add('turn')
  boardRegions.forEach(function(button){
    button.classList.remove('win')
    button.innerText = ''
    button.disabled = ''
    output.value = ''
    button.addEventListener('click', handleBoardClick)

  })
}
function handleBoardClick(ev){
  const btn = ev.currentTarget
  const rowColumnPair = btn.dataset.region.split('.')
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  if(turnPlayer === 'Jogador 1'){
    btn.innerText = 'X'
    btn.disabled = 'true'
    vBoard[row][column] = 'X'
    playerOne.classList.remove('turn')
  }else{
    btn.innerText = 'O'
    btn.disabled = 'true'
    vBoard[row][column] = 'O'
    playerTwo.classList.remove('turn')
  }
  console.clear()
  console.table(vBoard)
  const winRegions = getWinRegions()
  if (winRegions.length > 0){
    handleWin(winRegions)
    boardRegions.forEach(function(element){
      element.disabled = 'true'
    })
  }else if (vBoard.flat().includes('')){
    turnPlayer = turnPlayer === 'Jogador 1' ? 'Jogador 2': 'Jogador 1'
    turnPlayer === 'Jogador 1' ? playerOne.classList.add('turn') : playerTwo.classList.add('turn')
  }else{
    output.value = 'EMPATE!'
  }
}

function handleWin(regions){
  regions.forEach(function(region){
    document.querySelector('[data-region="'+ region +'"]').classList.add('win')
  })
  const playerName = turnPlayer === 'Jogador 1' ? document.getElementById('nameP1').value : document.getElementById('nameP2').value
  output.value = 'O vencedor é ' + playerName
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


document.getElementById('start').addEventListener('click', initializeGame)




