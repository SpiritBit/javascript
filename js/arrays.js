'use strict'

var nombre = "Adolfo";
var nombre = ["Adolfo", "Manuel", "Pachón", "Rodríguez"];
var lenguajes = new Array("PHP", "JAVASCRIPT", "CSS", "PYTHON");

// Formas de recorrer un array

lenguajes.map(item => {console.log(item);});

lenguajes.forEach((item, index, data) => {
    console.log(item);
    console.log(index);
    console.log(data);
});

for (var item in lenguajes) {
    console.log(lenguajes[item]);
}
