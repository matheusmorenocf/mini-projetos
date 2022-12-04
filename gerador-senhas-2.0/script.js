const generatePasswordButton = document.getElementById('generatePassword')
const generatePasswordElement = document.getElementById('generatedPassword')
const letterLower = document.getElementById('letterLower')
const letterUpper = document.getElementById('letterUpper')
const numberChar = document.getElementById('number')
const specialChar = document.getElementById('symbols')

let passwordLength = Number(document.getElementById('passwordLength').value)
document.getElementById('passLength').innerText = passwordLength

const updateLength = () =>{
  passwordLength = Number(document.getElementById('passwordLength').value)
  document.getElementById('passLength').innerText = passwordLength
} 

const getLetterLowerCase = () =>{
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
const getLetterUpperCase = () =>{
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
const getNumber = () =>{
  return Math.floor(Math.random()*10).toString()
}
const getSymbol = () =>{
  const symbols = "(){}[]=<>/,.!@#$%&*_-+"
  return symbols[Math.floor(Math.random()*symbols.length)]
}
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
  let password = ""
  const generators =[

  ]
  if(letterLower.checked){
    generators.push(getLetterLowerCase)
  }
  if(letterUpper.checked){
    generators.push(getLetterUpperCase)
  }
  if(numberChar.checked){
    generators.push(getNumber)
  }
  if(specialChar.checked){
    generators.push(getSymbol)
  }
  if(letterLower.checked == false && letterUpper.checked == false && numberChar.checked == false && specialChar.checked == false){
    alert('Nao é possivel gerar uma senha sem caracteres!')
    generators.push(getNumber)
  }

  for ( i = 0; i < passwordLength; i = i + generators.length){
    generators.forEach(() =>{
      const randomValue = generators[Math.floor(Math.random()*generators.length)]()
      password += randomValue
    })
  }
  password = password.slice(0, passwordLength)
  generatePasswordElement.style.display = 'block'
  generatePasswordElement.querySelector('h2').innerText = password
}


document.getElementById('passwordLength').addEventListener('change', () =>{
  updateLength()
})

generatePasswordButton.addEventListener('click', () => {
  generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})



