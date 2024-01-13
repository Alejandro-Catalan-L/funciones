let costo = 400000;
let total = 0;

let precioSpan = document.getElementById("precioInicial");
precioSpan.innerHTML = costo;
let totalSpan = document.getElementById("valorTotal");
totalSpan.innerHTML = total;
let cantidadActual = document.getElementById("cantidad");
let menos = document.getElementById("menos");
let sumar1 = document.getElementById("sumar1");


menos.addEventListener("click", function(e){
    let Cantidad1 = Number(cantidadActual.innerHTML) -1;
    if (Cantidad1 < 0){Cantidad1 = 0};
    cantidadActual.innerHTML = Cantidad1;
    totalSpan.innerHTML = Cantidad1 * costo;
});

sumar1.addEventListener("click", function(e){
    let Cantidad1 = Number(cantidadActual.innerHTML) +1;
    cantidadActual.innerHTML = Cantidad1;
    totalSpan.innerHTML = Cantidad1 * costo;
});