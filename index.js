

var play = false

document.addEventListener('mousemove', () => {
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