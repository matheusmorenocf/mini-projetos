const output = document.querySelector('#currentTime')


output.addEventListener('onload', watch())

function watch(){
    const time = new Date()
    let hour = time.getHours()
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
    output.innerText = hour + " : " + minutes + " : " + seconds
    setInterval("watch()", 250)
}

