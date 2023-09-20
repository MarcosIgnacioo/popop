const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const statsButton = document.getElementsByClassName('statsButton')[0]
const evolutionButton = document.getElementsByClassName('evolutionButton')[0]
const affinitiesButton = document.getElementsByClassName('affinitiesButton')[0]
const cardsButton = document.getElementsByClassName('cardsButton')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var statsNames = document.getElementsByClassName("stat-line");
var stats = [];
var flag = false;
fetch("https://pokeapi.co/api/v2/pokemon/lurantis", requestOptions)
  .then(response => response.json()) // Parsea la respuesta como JSON
  .then(data => {
    // Aquí puedes acceder a los elementos específicos del JSON
    data.stats.forEach(stat => {
        stats.push(stat.base_stat)
    });
    for(var i = 0; i<statsNames.length; i++){
      var bar =  statsNames[i].querySelector('div');
      bar.textContent = stats[i]
      bar.style.width = stats[i]*2+"px"
    }
    statsButton.addEventListener('click', () => {
        if(!flag){
          for(var i = 0; i<statsNames.length; i++){
              var bar =  statsNames[i].querySelector('div');
              flag = true;
              bar.style.opacity    = 100;
              bar.style.transform  = "translateX(15px)";
              bar.style.transition = "opacity 150ms ease-in-out, transform 150ms ease-in-out";
          }
        }
        else{
          for(var i = 0; i<statsNames.length; i++){
            var bar =  statsNames[i].querySelector('div');
            bar.style.opacity = 0;
            bar.style.transform = "translateX(-10px)";
            bar.style.transition = "opacity 150ms ease-in-out, transform 150ms ease-in-out";
            flag = false;
          }
        }
    })
/*  


      statsNames[i].textContent = statsNames[i].textContent + stats[i];
      statsNames[i].style.width = stats[i]+"px";
      statsNames[i].style.backgroundColor = "blue"
*/ 
  })
  .catch(error => console.log('error', error));

