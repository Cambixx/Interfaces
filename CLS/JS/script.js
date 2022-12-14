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
    }, 1500);
  }else if (inputTelefono.value == '' ) {
    inputTelefono.style.color = 'red'
    inputTelefono.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputTelefono.style.color = 'black'
      inputTelefono.value = ''
    }, 1500);
  }else if (inputCPostal.value == '' ) {
    inputCPostal.style.color = 'red'
    inputCPostal.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputCPostal.style.color = 'black'
      inputCPostal.value = ''
    }, 1500);
  }else if (inputEmail.value == '' ) {
    inputEmail.style.color = 'red'
    inputEmail.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputEmail.style.color = 'black'
      inputEmail.value = ''
    }, 1500);
  }else if (inputMensaje.value == '' ) {
    inputMensaje.style.color = 'red'
    inputMensaje.value = 'El campo debe estar relleno'
    setTimeout(() => {
      inputMensaje.style.color = 'black'
      inputMensaje.value = ''
    }, 1500);
  }else if (!inputCheck.checked) {
    mensajeTyC.style.color = 'red'
    mensajeTyC.textContent = 'Debe aceptar t??rminos y condiciones'
    setTimeout(() => {
      mensajeTyC.textContent = ''
    }, 1500);
  }
  else{
  inputNombre.value = ''
  inputTelefono.value = ''
  inputCPostal.value = ''
  inputEmail.value = ''
  inputMensaje.value = ''
  inputCheck.checked = false
  vEmergente.classList.add('activo')
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


