const light = document.querySelector('#light')
const dark = document.querySelector('#dark')
const favoritesContainer = document.querySelector('#favorites-box')
const filterContainer = document.querySelector('#filterBox')
const navbarContainer = document.querySelector('#navbarColor')

light.addEventListener('click', lightMode)
dark.addEventListener('click', darkMode)

function lightMode() {
    favoritesContainer.classList.add('content-box')
    favoritesContainer.classList.remove('content-box-dark')
    filterContainer.classList.add('content-box')
    filterContainer.classList.remove('content-box-dark')
    navbarContainer.classList.add('navbarColor')
    navbarContainer.classList.remove('navbar-dark')
    document.body.classList.remove('dark-body')
}

function darkMode() {
    favoritesContainer.classList.remove('content-box')
    favoritesContainer.classList.add('content-box-dark')
    filterContainer.classList.remove('content-box')
    filterContainer.classList.add('content-box-dark')
    navbarContainer.classList.remove('navbarColor')
    navbarContainer.classList.add('navbar-dark')
    document.body.classList.add('dark-body')
}