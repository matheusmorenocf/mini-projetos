'use strict';

// let bancoDados = [
//   {'tarefa': 'Estudar JS', 'status': ''},
//   {'tarefa': 'Netflix', 'status': 'checked'},
//   {'tarefa': 'Estudar CSS', 'status': 'checked'}
// ]

let bancoDados = []

const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];

const setBanco = (bancoDados) => localStorage.setItem('todoList', JSON.stringify(bancoDados));

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement('label');
  item.classList.add('item')
  item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <p>${tarefa}</p>
    <input type="button" value="X" data-indice=${indice}>
  `
  document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () =>{
  const todoList = document.getElementById('todoList');
  while(todoList.firstChild){
    todoList.removeChild(todoList.lastChild)
  }
}

const atualizarTela = () => {
  limparTarefas()
  const bancoDados = getBanco();
  bancoDados.forEach((item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) =>{
  const tecla = evento.key;
  const texto = evento.target.value;
  if(tecla === 'Enter'){
    const bancoDados = getBanco();
    bancoDados.push({'tarefa': texto, 'status': ''});
    setBanco(bancoDados);
    atualizarTela();
    evento.target.value = ''
  }
}
const removerItem = (indice) =>{
  const bancoDados = getBanco();
  bancoDados.splice(indice,1);
  setBanco(bancoDados);
  atualizarTela();
}
const atualizarItem = (indice) =>{
  const bancoDados = getBanco();
  bancoDados[indice].status = bancoDados[indice].status === '' ? 'checked' : '';
  setBanco(bancoDados);
  atualizarTela();
}
const clickItem = (evento) =>{
  const elemento = evento.target;
  if(elemento.type === 'button'){
    const indice = elemento.dataset.indice 
    removerItem(indice);
  } else if(elemento.type === 'checkbox'){
    const indice = elemento.dataset.indice 
    atualizarItem(indice);
  }
}
document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();