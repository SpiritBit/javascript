'use strict'

window.addEventListener("load", () => {
    var dashed = document.querySelector(".dashed");

    dashed.style.display = "none";

    var form = document.querySelector("#form");

    form.addEventListener("submit", () => {
        console.log("Submit capturado");
        dashed.style.display = "block";

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
    
        var arrayDatos = [nombre, apellidos, edad];

        for (var index in arrayDatos) {
            var parrafo = document.createElement("p");
            parrafo.append(arrayDatos[index]);
            dashed.append(parrafo);
        }
        });

});