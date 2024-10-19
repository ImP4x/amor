//ref https://dribbble.com/shots/3278810-I-Love-You-Responsive

var heart = document.querySelector('.heart'),
    reload = document.querySelector('.reload'),
    hearts = document.querySelector('.hearts'),
    allHearts = document.querySelectorAll('.hearts div'),
    heartAnime = document.querySelector('.heart.anime');

heart.addEventListener('click', animation);
reload.addEventListener('click', refresh);

function PlayAudio() {
  var audio = document.getElementById("fnd");
  audio.volume = 0.4;
  audio.play();
}

function animation() {
   heart.classList.add("active");
   reload.setAttribute("style", "opacity: 1; cursor: pointer; pointer-events: auto;");
   heartAnime.style.opacity = "0";
   allHearts.forEach(function(element) {
     element.classList.add("active");
   });
   
   // Espera un poco antes de mostrar el cuadro de texto
   setTimeout(function() {
     document.querySelector('.lttr').style.display = "block"; // Muestra el cuadro
     document.querySelector('.lttr').style.opacity = "1"; // Cambia la opacidad
   }, 500); // Espera 500 ms antes de mostrar el cuadro
 } 

 function refresh() {
   heart.classList.remove("active");
   reload.setAttribute("style", "opacity: 0; pointer-events: none;");
   heartAnime.style.opacity = "1";
   allHearts.forEach(function(element) {
     element.classList.remove("active");
   });
 
   // Ocultar el cuadro de texto
   var lttr = document.querySelector('.lttr');
   lttr.style.display = 'none'; // Asegúrate de que se oculte al reiniciar
 }