const botonEnviar = document.querySelector('.boton-enviar')
const botonCerrar = document.querySelector('.boton-cerrar')
const vEmergente = document.querySelector('.vEmergente')
const menuNav = document.querySelector('.nav__list')
const menuIcon = document.querySelector('.nav__menu-icon')
const botonMenuCerrar = document.querySelector('.boton__menu-cerrar')
const botonEspecialidades = document.querySelector('.botonEspecialidades')

const inputNombre = document.querySelector('.input-nombre')
const inputTelefono = document.querySelector('.input-telefono')
const inputCPostal = document.querySelector('.input-cPostal')
const inputEmail = document.querySelector('.input-email')
const inputMensaje = document.querySelector('.input-mensaje')
const inputCheck = document.querySelector('.input-check')
const mensajeTyC = document.querySelector('.mensaje-tyc')



botonEnviar.addEventListener('click', () => {
  if (inputNombre.value == '') {
    inputNombre.style.color = 'red'
    inputNombre.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputNombre.style.color = 'black'
      inputNombre.value = ''
    }, 2000);
  }else if (inputTelefono.value == '' ) {
    inputTelefono.style.color = 'red'
    inputTelefono.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputTelefono.style.color = 'black'
      inputTelefono.value = ''
    }, 2000);
  }else if (inputCPostal.value == '' ) {
    inputCPostal.style.color = 'red'
    inputCPostal.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputCPostal.style.color = 'black'
      inputCPostal.value = ''
    }, 2000);
  }else if (inputEmail.value == '' ) {
    inputEmail.style.color = 'red'
    inputEmail.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputEmail.style.color = 'black'
      inputEmail.value = ''
    }, 2000);
  }else if (inputMensaje.value == '' ) {
    inputMensaje.style.color = 'red'
    inputMensaje.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputMensaje.style.color = 'black'
      inputMensaje.value = ''
    }, 2000);
  }else if (!inputCheck.checked) {
    mensajeTyC.style.color = 'red'
    mensajeTyC.textContent = 'Debe aceptar términos y condiciones'
    setTimeout(() => {
      mensajeTyC.textContent = ''
    }, 2000);
  }
  else{
  vEmergente.classList.add('activo')
  inputNombre.value = ''
  inputTelefono.value = ''
  inputCPostal.value = ''
  inputEmail.value = ''
  inputMensaje.value = ''
  }
})

botonCerrar.addEventListener('click', () => {
  vEmergente.classList.remove('activo')
})

menuIcon.addEventListener('click', () => {
  menuNav.classList.toggle('activo')
})

botonMenuCerrar.addEventListener('click', () => {
  menuNav.classList.toggle('activo')
})

//ESTO NO FUNCIONA :(
botonEspecialidades.addEventListener('click', () => {
  window.location = "./PaginasWeb/depresion"
  location.href="./PaginasWeb/depresion";

})

