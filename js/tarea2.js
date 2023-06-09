//reconocer una palabra palindroma

document.addEventListener("DOMContentLoaded", function(){
    const palabra = document.getElementById("palabra");
    const btnEjecutar = document.getElementById("btnEjecutar");
    const palindrome = document.getElementById("palindrome");

    btnEjecutar.addEventListener("click", () => {
        function palabraPalindrome (palabra){
            const newPalabra = palabra.replace(/[\W_]/g, "").toLowerCase();
            const palabraInvertida = newPalabra.split("").reverse().join("");
            console.log(palabraInvertida);
            return palabraInvertida == newPalabra ? "es palindroma" : "no es palindroma";
        }
        palindrome.innerHTML = (`la palabra ${palabra.value} ${palabraPalindrome(palabra.value)}`);        
    })
})


//sustituir vacales por caracter ingresado

document.addEventListener("DOMContentLoaded", function(){
    const nombre = document.getElementById("nombre");
    const caracter = document.getElementById("caracter");
    const btnSustituir = document.getElementById("btnSustituir");
    const nombreCompleto = document.getElementById("nombreCompleto");

    btnSustituir.addEventListener("click", () => {
        function vocales (string){
            const newNombre = string.replace(/[aáAÁeéEÉiíIÍoóOÓuúUÚ]/g, caracter.value);
            return newNombre;
        }
        nombreCompleto.innerHTML = (`${vocales(nombre.value)}`);
    })
})



//fecha de cumpleaños
const nom = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const btnCalcular = document.getElementById("btnCalcular");
const cumple = document.getElementById("cumpleanio");

const edad = (fecha) => {
    //obtener fecha actual
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    //obtener fecha ingresada en el formulario
    const anoNacimiento = parseInt(String(fecha).substring(0, 4));
    const mesNacimiento = parseInt(String(fecha).substring(5, 7));
    const diaNacimiento = parseInt(String(fecha).substring(8, 10));
    
    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad --;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }

    return edad;
    
}
    document.addEventListener("DOMContentLoaded", function () {


        btnCalcular.addEventListener("click", () => {
            cumple.innerHTML = (`Tu nombre es ${nom.value}: ${edad(fecha.value)} años.`)
        })
    })


//números primos del 1 al 100

function numPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

const btnMostrar = document.getElementById("btnMostrar");
const agregar = document.getElementById("numPrimos");

btnMostrar.addEventListener("click", () => {
    let parrafo = document.createElement("p");
    parrafo.innerText = "1";
    agregar.appendChild(parrafo);

    for (let i = 2; i < 101; i++) {
        if (numPrimo(i)) {
            let parrafo = document.createElement("p");
            parrafo.innerText = i + " ";
            parrafo.style.background = "lightblue";
            parrafo.style.borderRadius = "50%";
            parrafo.style.width = "50px";            
            parrafo.style.textAlign = "center";
            parrafo.style.color = "blue";
            agregar.appendChild(parrafo);
        }else{
            let pa = document.createElement("p");
            pa.innerText = i + " ",                        
            agregar.appendChild(pa);
        }
        
    }
})