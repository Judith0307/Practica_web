/*Objetos*/
/*Ejemplo 01: Objeto basico*/
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona.nombre); // Imprime "Juan"
console.log(persona.edad);  // Imprime 30
console.log(persona.ciudad); // Imprime "Madrid"

/*Ejemplo 02: Objeto con metodo*/
let coche = {
    marca: "Toyota",
    modelo: "Corolla",

    mostrarInfo: function() {
        console.log("Coche: " + this.marca + " " + this.modelo);
    }
};
coche.mostrarInfo(); // Imprime "Coche: Toyota Corolla"

/*Ejemplo 03: Objeto anidado*/
let estudiante = {
    nombre: "Ana",
    edad: 22,
    carrera: "Ingeniería",
    universidad: {
        nombre: "Universidad Nacional",
        ubicacion: "Lima"
    }
};
console.log(estudiante.nombre); // Imprime "Ana"
console.log(estudiante.universidad.nombre); // Imprime "Universidad Nacional"