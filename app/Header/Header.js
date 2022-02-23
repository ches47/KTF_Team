const burgerBtn = document.querySelector('.header__burger-menu');
const menuList = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu--active');
});
