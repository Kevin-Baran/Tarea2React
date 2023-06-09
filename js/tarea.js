// Tarea 1: Funcion que permita ingresar la edad y retorne true si es mayor de edad o false si no lo es
/*
function mayorEdad (){
    let edad = 20;
    let mensaje;
    edad = (edad>=18) ? mensaje = true : mensaje = false;
    console.log(mensaje);
}
mayorEdad();
*/ 

// Tarea 2: Funcion que permita ingresar el nombre completo de una persona y retorne las iniciales del nombre
// Ejemplo: Juan Perez = J.P.
/*
let inicialNombre = (nombre, apellido) => {
    let inicialNom = nombre.charAt(0);
    let inicialApe = apellido.charAt(0);
    console.log(`${inicialNom}.${inicialApe}.`);
}

inicialNombre ('Kevin', 'Barán');
*/

/*
// Tarea 3: Funcion que permita ingresar el nombre completo de una persona y retorne la cantidad
// de letras que tiene su nombre

let cantLetras = (nombre, apellido) => {
    let cantidad = nombre.length + apellido.length;
    return cantidad;
}

console.log(`El nombre tiene ${cantLetras('Alvaro', 'Cordova')}`);
*/

// Tarea 4: Funcion que permita ingresar el nombre completo de una persona y retorne la cantidad 
// de vocales que tiene su nombre

/*
function cantVocales (nombreCompleto){
    let vocales = "aáeéiíoóuú";
    let cantVocales = 0;
    for(let letra of nombreCompleto){
        if(vocales.includes(letra.toLowerCase())){
            cantVocales++;
        }
    }
    return cantVocales;
};

console.log(`El nombre tiene ${cantVocales('Kevin René Barán Mucía')} vocales`);
*/

// Tarea 5: Funcion que permita ingresar una cadena de texto y un numero y retorne 
// la cadena de texto repetida las veces del numero ingresado
// Ejemplo: Hola Mundo 3 = Hola Mundo, Hola Mundo, Hola Mundo

function repetirTexto (texto, numero){
    let cadenatext = '';
    for(var i=1; i<=numero; i++){        
        cadenatext = cadenatext + texto + ', ';           
    }
    let newcadena = cadenatext.substring(0, cadenatext.length -2) + '.';
    return newcadena;
}
console.log(repetirTexto('Kevin', 5));