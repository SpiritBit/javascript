'use strict'

var nombre = prompt("dime nombre");
var apellidos = prompt("dime apellidos");

var texto = ` 
<h1>Hola</h1>
<p>Tu nombre es ${nombre}. Tus apellidos son ${apellidos}</p>
`;

document.write(texto);