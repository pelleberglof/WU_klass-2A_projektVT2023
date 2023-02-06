const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
    console.log("hej")
}

burger.addEventListener('click', toggleMenu)