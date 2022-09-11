const image = document.getElementById('imgSem');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
const semaforoLigado = ( event ) => {
  ligado[event.target.id]();
  
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex];
  ligado[color]();
  colorIndex++;
}

const ligado = {
  'red': () => image.src = 'imagens/vermelho.png',
  'yellow': () => image.src = 'imagens/amarelo.png',
  'green': () => image.src = 'imagens/verde.png',
  'aut': () => setInterval(changeColor, 1000);
}

buttons.addEventListener('click', semaforoLigado)

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