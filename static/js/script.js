const menuToggler = document.getElementById("menuToggler");
const menu = document.getElementById("menu");
menuToggler.onclick = (e) => {
    menuToggler.classList.toggle('active');
    menu.classList.toggle('Menu_container__puOAc');
    menu.classList.toggle('Menu_containerOpen__MJuw7');
}
!(window.location.hostname === 'nurali-code.github.io') ? document.getElementsByTagName('body')[0].remove() : false;