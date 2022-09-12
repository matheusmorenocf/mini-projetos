'use strict';

const sons = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'

}

const criarDiv = (texto) => {
  const div = document.createElement('div'); //Criando a div
  div.classList.add('key'); // Adicionando a classe 'key' a div
  div.textContent = texto; // Adicionando o texto a div
  div.id = texto; // Adicionando o id da div, o texto e o id sao os mesmos
  document.getElementById('container').appendChild(div); // Criando a div na arvore DOM
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) =>{
  const audio = new Audio(`sounds/${sons[letra]}`);
  audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra)
                                            .classList.add('active');

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove('active');
  div.addEventListener('transitionend', removeActive)
};

const ativarDiv = (evento) => {
  /* Substituir o if pelo ternario
  let letra = ''
  if(evento.type == 'click'){
    letra = evento.target.id;
  } else{
    letra = evento.key.toUpperCase();
  }
  */
  const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase(); //Substituto do if

  const letraPermitida = sons.hasOwnProperty(letra);//Verificar se eu cliquei em uma das letras ou somente no container
  if(letraPermitida){
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra)
  }
  
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv); //Quando clicar em qualquer lugar do container ele ativa a funçao ativarDiv, nao colocar o evento nas keys, pois elas ainda nao existem e nao sabemos quantas serao.

window.addEventListener('keydown',ativarDiv)
