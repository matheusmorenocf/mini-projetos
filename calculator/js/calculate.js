const input = document.getElementById('input')

function calculate(){
  const resultInput = document.getElementById('result')
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
  if(input.value === ''){
    resultInput.value = '0'
  }
}

function keyClick (charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

function keyPress (event){
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "%", " "]
  event.preventDefault()
  if(allowedKeys.includes(event.key)){
    input.value += event.key
    return
  }
  if(event.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(event.key === 'Enter'){
    calculate()
  }
}

function clear (){
  input.value = ''
  input.focus()
}

export { calculate, keyClick, keyPress, clear }