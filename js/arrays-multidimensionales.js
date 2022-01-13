'use strict'

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["la verdad duele", "La vida es bella", "Alien", "Heat"];

var cine = [categorias, peliculas];

/*
// Añadimos elemento al array
peliculas.push("Heat");
console.log(peliculas);

// Quitamos último elemento al array
peliculas.pop();
console.log(peliculas);
*/

/*
// Buscamos película a eliminar
console.log(peliculas);

//Buscar y Eliminar
var eliminar = peliculas.indexOf("Heat");

var resultado = peliculas.splice(eliminar,1);

console.log(peliculas);
console.log(`Se ha eliminado la película "${resultado}"`);

// Convierte en una cadena todos los elementos del array
console.log(peliculas.join());
*/


//Convertir cadena en Array

var cadena = "la verdad duele, La vida es bella, Alien, Heat";
var arrayCadena = cadena.split(", ");


// Ordena array alfabéticamente

console.log("Original", arrayCadena);
console.log("Orden Ascendente", arrayCadena.sort());
console.log("Orden Descendente", arrayCadena.reverse());

