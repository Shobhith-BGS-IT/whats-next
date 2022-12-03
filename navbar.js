const toggleButton = document.getElementsByClassName('nav-toggle-button')
const navbarLinks = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})