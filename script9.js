/*Eventos en JavaScript*/
/*Ejemplo 01: Evento click*/
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

/*Ejemplo02: Evento onload*/
window.onload = function() {
    console.log("La página ha cargado completamente.");
}