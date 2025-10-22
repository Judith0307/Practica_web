/*Promesas y Async/Await*/
/*Ejemplo 01: Promesa*/
let miPromesa = new Promise(function(resolve, reject) {
    let exito = true; 
    if (exito) {
        resolve("Operación exitosa.");
    } else {
        reject("Error en la operación.");
    }
});

miPromesa
    .then(function(mensaje) {
        console.log(mensaje);
    })
    .catch(function(error) {
        console.log(error);
    });

/*Ejemplo 02: Async/Await*/
async function ObtenerDatos() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let datos = await respuesta.json();
    console.log(datos);
}
ObtenerDatos();
