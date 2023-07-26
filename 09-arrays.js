"use strict"

//Arrays, Arreglos, Matrices:

var nombre = "Victor";
var nombres = ["Paco Perez","Daniel Arturo","Rosa Aguiler","Pedro Guzman","Juan Quintero",15,true];
var lenguajes = new Array("PHP","Javascript","Java","C#","Python");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[4]);
console.log(nombres.length);

//var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
//alert(nombres[elemento]);

//Arrays multidimensional:

var categorias = ["Accion", "Terror","Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Gran torino"];

var cine = [categorias, peliculas];

console.log(cine[0][1]);//Categorias Terror
console.log(cine[1][2]);//peliculas Gran Torino