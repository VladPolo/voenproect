//Бургер меню
// const menuBurger = document.querySelector(".icon-menu");
// const menu = document.querySelector(".menu");

// menuBurger.addEventListener("click", function(e) {
//     menuBurger.classList.toggle("menu-open");
//     menu.classList.toggle("menu-open");
// });

const servicesButton = document.querySelectorAll('.services__button');
const servicesButtons = document.querySelector('.services__buttons');
const servicesItem = document.querySelectorAll('.services__item');

servicesButtons.addEventListener('click', function(e) {
    e.preventDefault();
    const clicked = e.target.closest('.services__button');
    
    console.log(clicked);
    if(!clicked) return;
    servicesButton.forEach((servicesButton) => servicesButton.classList.remove('_activ'));
    clicked.classList.add('_activ');
    servicesItem.forEach((content) => content.classList.remove('_activ'));

    document
        .querySelector(`.tab-${clicked.dataset.tab}`)
        .classList.add('_activ');
})
