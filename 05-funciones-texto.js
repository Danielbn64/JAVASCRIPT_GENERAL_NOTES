"use strict"

//TRANSFORMACION DE TEXTOS:
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor Robles";
var texto2 = "es muy buen curso¡¡";

var dato = numero.toString();
var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto1.toLowerCase();
    
console.log(dato);

// Calcular longitud
var nombre = "Daniel";
console.log(nombre.length);

//Contar objetos en el array
var nombre = ["hola", "holi"];

console.log(nombre.length);

//Concatenar
//var textoTotal = texto1 + ", " + texto2;
var textoTotal = texto1.concat(", " + texto2);
console.log(textoTotal);