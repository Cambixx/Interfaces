const menuNav = document.querySelector('.nav__list')
const menuIcon = document.querySelector('.nav__menu-icon')
const botonMenuCerrar = document.querySelector('.boton__menu-cerrar')

menuIcon.addEventListener('click', () => {
  menuNav.classList.toggle('activo')
})

botonMenuCerrar.addEventListener('click', () => {
  menuNav.classList.toggle('activo')
})