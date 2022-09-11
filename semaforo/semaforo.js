const image = document.getElementById('imgSem');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null

const trafficLight = ( event ) => {
  stopAutomatic();
  turnOn[event.target.id](); 
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; // ternario
  
  /*
  if (colorIndex < 2){
    colorIndex++
  } else{
    colorIndex = 0;
  }
  */

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () =>{
  clearInterval( intervalId )
}

const turnOn = { //funçao dentro de objeto
  'red': () => image.src = 'imagens/vermelho.png',
  'yellow': () => image.src = 'imagens/amarelo.png',
  'green': () => image.src = 'imagens/verde.png',
  'aut': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight)

/*const redButton = document.getElementById('red')
const yellowButton = document.getElementById('yellow')
const greenButton = document.getElementById('green')
const autButton = document.getElementById('aut')

function semRed(){
  image.src = 'imagens/vermelho.png'
}

function semYellow(){
  image.src = 'imagens/amarelo.png'
}

function semGreen(){
  image.src = 'imagens/verde.png'
}


redButton.addEventListener('click', semRed)
yellowButton.addEventListener('click', semYellow)
greenButton.addEventListener('click', semGreen)*/