const seccionInformacionPrincipal = document.getElementById("seccion-informacion-principal")
const seccionTutorial = document.getElementById("seccion-tutorial")
const seccionMasInformacion = document.getElementById("seccion-mas-informacion")


// Función auxiliar
const arraySecciones = [seccionInformacionPrincipal, seccionTutorial, seccionMasInformacion]

const mostrarSección = (array, seccion) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === seccion) {
            array[i].classList.remove("is-hidden")
        }
        else {
            array[i].classList.add("is-hidden")
        }
    }
}

//funcion menu hamburguesa

const menuHamburguesa = document.querySelector(".navbar-burger")
const menuNav = document.querySelector(".navbar-menu")

menuHamburguesa.onclick = () =>{
    menuHamburguesa.classList.toggle("is-active")
    menuNav.classList.toggle("is-active")   
}

// Funciones para mostrar secciones

const linkInformacionPrincipal = document.getElementById("link-informacion-principal")

linkInformacionPrincipal.onclick = () => {
    mostrarSección(arraySecciones, seccionInformacionPrincipal)
}

const linkTutorial = document.getElementById("link-tutorial")

linkTutorial.onclick = () => {
    mostrarSección(arraySecciones, seccionTutorial)
}

const linkMasInformacion = document.getElementById("link-mas-informacion")

linkMasInformacion.onclick = () => {
    mostrarSección(arraySecciones, seccionMasInformacion)
}