//ejemplo de Array
/*
const ejemploArray = [25, 'Ford Mustang', true, [1,0]];
console.log(ejemploArray[0]);

ejemploArray[0] = 30;
console.log(ejemploArray[0]);
*/

//Recorrer un Array con ciclo For
/*
const autos = ['Toyota', 'Mazda', 'Audi', 'Kia', 'Honda', 'Ford', 'Fiat', 'BMW'];
for (let i=0; i < autos.length; i++){
    console.log(`El auto es: ${autos[i]} en la posición ${i}`);    
}
*/

//Recorrer un arreglo con forEach
/*
const autos = ['Toyota', 'Mazda', 'Audi', 'Kia', 'Honda', 'Ford', 'Fiat', 'BMW'];
autos.forEach((auto, i) => {
    console.log(`El auto es: ${autos[i]} en la posición ${i}`);
    console.log(`el auto es: ${autos[i].toLocaleUpperCase()} en la posición ${i}`);
});
*/

//recorrer un arreglo con while
/*
const autos = ['Toyota', 'Mazda', 'Audi', 'Kia', 'Honda', 'Ford', 'Fiat', 'BMW'];
let i = autos.length - 1;

while (i > 0) {
    console.log(`El auto es: ${autos[i]} en la posición ${i}`);
    i--;
}
*/

//recorrer un arreglo con do while
/*
const autos = ['Toyota', 'Mazda', 'Audi', 'Kia', 'Honda', 'Ford', 'Fiat', 'BMW'];
let i = 0;

do {
    console.log(`El auto es: ${autos[i]} en la posición ${i}`);
    i++;
} while (i < autos.length);
*/

const autos = ['Toyota', 'Mazda', 'Audi', 'Kia', 'Honda', 'Ford', 'Fiat', 'BMW'];
autos.forEach((auto, i) => {
    console.log(`El auto es: ${autos[i].toLowerCase()} en la posición: ${i}`);
});

console.log('Obtener el último elemento del arreglo: ' + autos[autos.length -1]);   
console.log('Obtener el último elemento con pop: ' +autos.pop());
console.log('Obtener el primer elemento con shift   : ' +autos[0]);
console.log('Obtener el primer elemento con shift   : ' +autos.shift());

//splice es un metodo que permite eliminar elementos de un arreglo
autos.splice(0, 3);
console.log(autos);

