const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let lastScrollTop = 0; 

window.addEventListener("scroll", function() {
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
       // Scroll nach unten
       document.querySelector('.navbar').style.opacity = 0; 
   } else {
       // Scroll nach oben
       document.querySelector('.navbar').style.opacity = 1; 
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);

//Überblick Abstimmung

const abstimmung = document.querySelectorAll(".abstimmung");

abstimmung.forEach((abstimmung) => {
  abstimmung.addEventListener("click", () => {
       abstimmung.classList.toggle("active");
   });
});

//const answer = document.querySelectorAll(".answer");

//answer.forEach((abstimmung) => {
  //  answer.addEventListener("click", () => {
    //    answer.classList.toggle("active");
    //});
//});