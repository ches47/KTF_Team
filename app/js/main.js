document.addEventListener('DOMContentLoaded', function () {

    // const burgerBtn = document.querySelector('.header__burger-menu');
    // const menuList = document.querySelector('.menu');

    // burgerBtn.addEventListener('click', () => {
    //     menuList.classList.toggle('menu--active');
    // });


    // //languages
    const headerLanguages = document.querySelector('.header__languages');
    const headerLanguagesArrow = document.querySelector('.header__languages-arrow');

    headerLanguages.addEventListener('click', () => {
        headerLanguagesArrow.style.transform = "rotate(180deg)";
    });







});


