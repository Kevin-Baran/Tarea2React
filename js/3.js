//función tradicional
function saludo(){
    console.log('Función tradicional')
}

saludo();

//arrow function
let saludo2 = () => {
    console.log('Arrow Función')
}

saludo2();

//función con parametros

function saludoConParametros (nombre, edad){
    console.log(`Hola mi nombre es: ${nombre} y tengo ${edad} años`);
}

saludoConParametros('Kevin', 25);

//función con parametros por defecto

function parametrosPorDefecto (equipo='Sin equipo', posicion='Cierre'){
    console.log(`Hola soy judador del ${equipo} y juego de ${posicion}`)
}

parametrosPorDefecto('Dynamo FC');

//arrow function con parametros

let operacion = (num1, num2, operacion) => {
    let resultado = 0;
    switch(operacion){
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num1 / num2;
            break;
        default:
            resultado = 0;
            break;
    }
    return resultado;
}

console.log(`el resultado de la operación es ${operacion(10, 5, 'suma')}`);
console.log(`el resultado de la operación es: ${operacion(10, 5, 'resta')}`);
console.log(`el resultado de la operación es: ${operacion(10, 5, 'multiplicacion')}`);
console.log(`el resultado de la operación es: ${operacion(10, 5, 'division')}`);
console.log(`el resultado de la operación es: ${operacion(10, 5, 'potencia')}`);