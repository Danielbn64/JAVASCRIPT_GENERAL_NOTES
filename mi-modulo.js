//Exportar una funcion cualquiera
// function imprimirArray(datos){
//     datos.forEach(element =>{
//         console.log(element);
//     });
//     return datos;
// }

// export default imprimirArray;


//----------------------------------------------------------------------
//Exportar una funcion anonima
// export default function(datos){
//     datos.forEach(element =>{
//         console.log(element);
//     });
//     return datos;
// }
//Solo sirve una funcion anonima suelta si va a ser exportada
//----------------------------------------------------------------------


//----------------------------------------------------------------------
// function saludo(nombre){
//     console.log(nombre);
//     return nombre;
// }

//----------------------------------------------------------------------

//Exportar metodos atraves de objetos:
// let utilidades = { 
//     imprimirArray,
//     saludo
// };
//export default utilidades;

//----------------------------------------------------------------------

//Exportar varios metodos por separado:
export default function imprimirArray(datos){
    datos.forEach(element =>{
        console.log(element);
    });
    return datos;
}

export function saludo(nombre){
    console.log(nombre);
    return nombre;
}