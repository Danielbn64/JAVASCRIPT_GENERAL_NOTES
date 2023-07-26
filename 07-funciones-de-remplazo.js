var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor Robles";
var texto2 = "es muy buen curso¡¡";
var texto3 = " funciones de remplazo y mas "

//Remplazar
var busqueda = texto1.replace("Javascript", "Symfony");
console.log(busqueda);

//Cortar el string
var busqueda1 = texto1.slice(14);// separa el string desde el caracter 14
console.log(busqueda1);

var busqueda2 = texto1.slice(14, 33);// separa el string desde el caracter 14 al 22
console.log(busqueda2);

//Recortar las palabras y meterlas en un array
var busqueda3 = texto1.split(" ");// separa el string desde el caracter 14 al 22
console.log(busqueda3);

//Recorta los espacios por delante y por detras
var busqueda4 = texto3.trim();//
console.log(busqueda4);