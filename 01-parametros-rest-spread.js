//Parametros REST y SPREAD

//REST
function ListadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas)
}

ListadoFrutas("naranja","manzana","sandia","melon","uvas","coco");

//SPREAD
var frutas = ["naranja","manzana"]
ListadoFrutas(...frutas,"sandia","melon","uvas","coco");

//Desestructuracion
let naranja0 = frutas[0];
let manzana0 = frutas[1];

console.log(manzana0);//Metodo clasico

frutas.push("sandia");
frutas.push("melon");
frutas.push("uvas");
frutas.push("coco");

//Desestructurar arrays
let [naranja, manzana, sandia, melon, uvas, coco] = frutas;
console.log(uvas);
console.log(melon);

//Desestructurar objetos
let persona = {
    nombre: "Daniel",
    edad: 80,
    altura: 190,
    pais: "España"
};

let {nombre0, edad, altura, pais} = persona;

//Desestructurar string
let usuario = "Danial Berroteran 54961700A 11/04/2022 Murcia";
let [nombre,apellido,dni,fecha,ciudad] = usuario.split(" ");

//Crear varias variables
let lenguaje = "JS",framework = "Angular",editor = "Vscode";

//Utilidad parametros funciones
function mostrarUsuario({nombre, apellido = "undefined", ciudad = "Madrid"}){
    console.log(nombre, apellido, ciudad)
}

mostrarUsuario({nombre:"Daniel"});
