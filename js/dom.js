'use strict'

/*
// Selección de elemento por ID

// Opción 1
//var caja = document.getElementById("caja");

//Opción 2
var caja = document.querySelector("#caja");

console.log(caja);

caja.innerHTML = "Nuevo texto";
caja.style.fontWeight = "bold";
*/

// Selección de elementos por Etiqueta

var todosDivs = document.getElementsByTagName("div");

//console.log(todosDivs);

for (var item in todosDivs) {
    if (todosDivs[item].tagName == "DIV") {
        console.log(todosDivs[item].innerText);
    }
}

/*
//console.log(todosDivs);
//console.log(todosDivs["length"]);

for (var index = 0; index <= todosDivs["length"]-1; index++) {
    console.log(index + " - " + todosDivs[index].textContent);    
}
*/

// Selección de elementos por Clase