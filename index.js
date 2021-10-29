

var play = false


document.addEventListener('click', () => {
  !play && document.querySelector('#somtriste').play();
  
  play = true
})


