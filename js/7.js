const btnEjecutar = document.getElementById("btnEjecutar");
const texto = document.getElementById("texto");

//btnEjecutar.addEventListener("click", () =>{
//    alert("Hola Mundo");
//});

btnEjecutar.addEventListener("click", () => {
    texto.innerHTML = "Hola Mundo";
});