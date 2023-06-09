document.addEventListener("DOMContentLoaded", function () {

    const btnEjecutar = document.getElementById("btnEjecutar");
    const res = document.getElementById("res");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");

    btnEjecutar.addEventListener("click", () => {
        res.innerHTML = (`Hola ${nombre.value} ${apellido.value} tienes ${edad.value} años.`);

        if (edad.value >= 18) {
            res.innerHTML += ("<br> Eres mayor de edad.")
        }

        res.innerHTML += (`<br> Tu nombre ${nombre.value} tiene ${nombre.value.length} caracteres.`);
    })


    operacion.addEventListener("change", () => {
        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");
        const operacion = document.getElementById("operacion");
        const resultado = document.getElementById("resultado");

        switch (operacion.value) {
            case "1":
                resultado.innerHTML = (`La suma de ${num1.value} + ${num2.value} es: ${parseFloat(num1.value) + parseFloat(num2.value)}`);
                break;
            case "2":
                resultado.innerHTML = (`La resta de ${num1.value} - ${num2.value} es: ${parseFloat(num1.value) - parseFloat(num2.value)}`);
                break;
            case "3":
                resultado.innerHTML = (`La multiplicación de ${num1.value} * ${num2.value} es: ${parseFloat(num1.value) * parseFloat(num2.value)}`);
                break;
            case "4":
                if (num2.value == 0) {
                    resultado.innerHTML = "No se puede dividir entre cero";
                    break;
                }
                resultado.innerHTML = (`La división de ${num1.value} / ${num2.value} es: ${parseFloat(num1.value) / parseFloat(num2.value)}`);
                break;
            default:
                resultado.innerHTML = ("No se ha seleccionado ninguna operación");
                break;
        }
    })
});