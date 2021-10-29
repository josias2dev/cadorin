

var play = false

setTimeout(() => {
  document.body.click();
}, 1000)

document.addEventListener('mousemove', () => {
  !play && document.querySelector('#somtriste').play();
  
  play = true
})

document.addEventListener('click', () => {
  !play && document.querySelector('#somtriste').play();
  
  play = true
})



document.addEventListener('touchstart', () => {
  !play && document.querySelector('#somtriste').play();
  
  play = true
})


document.addEventListener('touchmove', () => {
  !play && document.querySelector('#somtriste').play();
  play = true
})