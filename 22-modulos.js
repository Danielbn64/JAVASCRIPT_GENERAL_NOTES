//import imprimirArray from "./mi-modulo.js"//Importar un solo metodo


//import utilidades from "./mi-modulo.js"//Importar un array atraves de un objeto


//import {imprimirArray, saludo} from "./mi-modulo.js"//Importar varios metodos por separado


import imprimirArray, {saludo} from "./mi-modulo.js"//Importar varios metodos uno por defecto y el otro no


//Para poder usar modulos importados se debe escribir en la etiqueta script de index.html type="module"


console.log("Archivo main de mi proyecto");
let nombres = ["Daniel", "Paco", "Pepe"];
//utilidades.imprimirArray(nombres);//Importar un array atraves de un objeto
imprimirArray(nombres);

saludo("daniel")