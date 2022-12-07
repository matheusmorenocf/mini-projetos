const output = document.getElementById('output')
function calcular(){
  const name = document.getElementById('txtname').value
  const height = document.getElementById('txtheight').value
  const weight = document.getElementById('txtweight').value
  if (name.length == 0 || height.length == 0 || weight.length == 0){
    alert('Informações incompletas!')
  } else{
    const imc = (weight / (height**2)).toFixed(1)
    let classe = ''
    if (imc < 18.5){
      classe = 'abaixo do peso normal'
    } else if (imc > 18.5 && imc < 24.9){
      classe = 'com peso normal'
    } else if(imc > 25 && imc < 29.9){
      classe = 'com exesso de peso'
    } else if(imc > 30 && imc < 34.9){
      classe = 'com obesidade classe 1'
    } else if(imc > 35 && imc < 39.9){
      classe = 'com obesidade classe 2'
    } else if(imc > 40){
      classe = 'com obesidade classe 3'
    } 
    output.innerHTML = `${name} seu IMC é ${imc} e você está ${classe}.`
  }
  
}