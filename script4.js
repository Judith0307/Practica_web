/*Estructuras condicionales*/
//determina si es mayor de edad o menor de edad
let edad = 18;
if (edad >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/*Ejemplo 2*/
let temperatura = 30;
if (temperatura >= 25) {
    console.log("Hace calor");
} else {
    console.lof("Hace frio");
}

/*Se requiere determinar el promedio de tres notas ingresadas por el usuario al mismo 
tiempo que se indica si el estudiante esta aprobado o reprobado. Se considera que un 
estudiante esta aprobado si su promedio es mayor o igual a 11 y desaprobado si el 
promedio es menor a 11.*/

nota1 = prompt("Ingrese su primera nota: ");
nota2 = prompt("Ingrese su segunda nota: ");
nota3 = prompt("Ingrese su tercera nota: ");


var suma = nota1 + nota2 + nota3;

if (suma >= 11){
    console.log("Usted esta aprobado");
} else {
    console.log("Usted esta desaprobado");
}
