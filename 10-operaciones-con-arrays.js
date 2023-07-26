var peliculas = ["La verdad duele","La vida es bella","Gran torino"];

//Añadir elemento al array
peliculas.push("Batman");
console.log(peliculas);

//Convertir un array en string
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Convertir cadenas en arrays
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

var lenguajes = new Array("PHP","Javascript","Java","C#","Python");
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);

var busqueda1 = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda1);

var precios = [9,19,49,79,12];
var busqueda2 = precios.some(precio => precio > 80);//Comprobar si existe el elemento en el array o
//o si son mayores menores o iguales a un elemento especificado
console.log(busqueda2);