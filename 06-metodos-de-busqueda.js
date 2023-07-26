var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor Robles uno el mejor curso que hay de javascript y a un precio accesible";
var texto2 = "es muy buen curso¡¡";

//Buscar una palabra dentro de un string:
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda1 = texto1.lastIndexOf("curso");
console.log(busqueda1);

var busqueda2 = texto1.search("curso");
console.log(busqueda2);

var busqueda3 = texto1.match(/curso/gi);
console.log(busqueda3);

var busqueda4 = texto1.substring(14,19);//del caracter 14, al 19 letras en adelante
console.log(busqueda4);

var busqueda5 = texto1.charAt(44);
console.log(busqueda5);

var busqueda6 = texto1.startsWith("Bi");
console.log(busqueda6);

var busqueda7 = texto1.includes("Javascript");
console.log(busqueda7);

