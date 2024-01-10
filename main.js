const menuOpen = document.getElementById('js-menu-open');
const menuClose = document.getElementById('js-menu-close');
const headerNav = document.getElementById('js-header-nav');

menuOpen.addEventListener('click', handleOpenMenu);
menuClose.addEventListener('click', handleCloseMenu);

function handleOpenMenu() {
    headerNav.classList.toggle('menu__open')
}

function handleCloseMenu() {
    headerNav.classList.remove('menu__open')
}