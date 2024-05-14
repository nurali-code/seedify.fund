const menuToggler = document.getElementById("menuToggler");
const menu = document.getElementById("menu");
menuToggler.onclick = (event) => {
    menuToggler.classList.toggle('active');
    menu.classList.toggle('Menu_container__puOAc');
    menu.classList.toggle('Menu_containerOpen__MJuw7');
}
// !(window.location.hostname === 'nurali-code.github.io') ? document.getElementById('__next').remove() : false;