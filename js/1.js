//A. uso de var let y const

//var: es una variable global, se puede reasignar y redeclarar

var nombre = 'Juan';
console.log(nombre);

nombre = 'Pedro';
console.log(nombre);

var nombre = 'Jose';
console.log(nombre);

//let: es una variable local, se puede reasignar pero no redeclarar

let apellido = 'Perez';
console.log(apellido);

apellido = 'Lopez';
console.log(apellido);

//const: es una variable local, no se puede reasignar ni redeclarar
// no se puede declarar sin inicializar.

const curso= 'Matemáticas';
console.log(curso);

//scope: es el alcance que tiene una variable dentro de un bloque de código

let edad = 20;

if(edad > 18){
    let adulto = "Mayor de edad"; //esta variable solo se puede usar dentro del if.
    console.log(adulto);
}

//B. Tipos de Datos
// 1. Primitivos: string, number, boolean, null, undefined, symbol

    let nombre1 = "Juan";
    let nombre2 = 'Pedro';
    console.log(nombre1);
    console.log(nombre2);

// 2. compuestos: object, array, function




