'use strict'

window.addEventListener("load", function() {
    // EVENTOS

    // Eventos de ratón

    var boton = document.querySelector("#btn");

    boton.addEventListener("click", function () {cambiarColor(boton);});
    boton.addEventListener("mouseover", function () {over(boton);});
    boton.addEventListener("mouseout", function () {out(boton);});

    function cambiarColor (item) {
        item.style.background = "red";
        console.log("ok");
    }

    function over (item) {
        item.style.background = "yellow";
    }

    function out (item) {
        item.style.background = "green";
    }

    // Eventos  para campos de formulario

    var campo = document.querySelector("#nombre");

    campo.addEventListener("focus", function() {console.log("onFocus()");});
    campo.addEventListener("blur", function() {console.log("onBlur()");});
    campo.addEventListener("keydown", tecla => {console.log("keydown", tecla.key);});
    campo.addEventListener("keypress", tecla => {console.log("keypress", tecla.key);});
    campo.addEventListener("keyup", tecla => {console.log("keyup", tecla.key);});
});