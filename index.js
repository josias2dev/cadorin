

var play = false


document.addEventListener('click', () => {
  !play && document.querySelector('#somtriste').play();
  !play && (document.querySelector('.click-text').textContent = "Aumente o volume")
  play = true
})


