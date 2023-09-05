const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const statsButton = document.getElementsByClassName('statsButton')[0]
const evolutionButton = document.getElementsByClassName('evolutionButton')[0]
const affinitiesButton = document.getElementsByClassName('affinitiesButton')[0]
const cardsButton = document.getElementsByClassName('cardsButton')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

statsButton.addEventListener('click',() =>{
  document.getElementsByClassName('main-content')[0].replaceWith(document.getElementsByClassName('test')[0])
})