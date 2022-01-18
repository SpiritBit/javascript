'use strict'

// Comprobar disponibilidad

//console.log(typeof(localStorage));

// Almacenar elemento

localStorage.setItem("nombre", "Adolfo Pachón");
localStorage.setItem("edad", 54);

var usuario = {nombre: "Adolfo", edad: 54};

var user = JSON.parse(localStorage.getItem("usuario"));

console.log(user);

// Borra elemento
localStorage.removeItem(user);

// Borra todo
localStorage.clear();

