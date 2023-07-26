//Crear arrays basado en un objeto iterable
let array_letras = Array.from("victorroblesweb.es");
console.log(array_letras);

let array_numeros_cuadrado = Array.from([1,2,3,4,5,6], numero => Math.pow(numero, 2));
console.log(array_numeros_cuadrado);

//Comprobar si existe un elemento dentro de un array - includes
var lenguajes = new Array("PHP","Javascript","Java","C#","Python");
console.log(lenguajes.includes("Javascript"));

//Filtrar arrays -filter
let nuevo_elemento = lenguajes.filter(lenguajes => lenguajes.length >= 5);
console.log(nuevo_elemento);

let nuevo_elemento1 = lenguajes.filter(lenguajes => lenguajes.includes("P"));
console.log(nuevo_elemento1);