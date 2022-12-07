function copy (event){
  const resultInput = document.getElementById('result')
  const button = event.currentTarget
  if(button.innerText === 'Copy'){
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

export { copy }