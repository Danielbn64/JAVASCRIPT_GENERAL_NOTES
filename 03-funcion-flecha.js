//Funciones flecha:
//Consisten en sustituir la palabra function y en su lugar colocar una flecha => del otro lado del los parentesis
//Ejemplos:

function suamme(numero1,numero2,sumaymuestra,suma_por_dos){
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    suma_por_dos(sumar);
    return sumar
}

//FUNCIONES NORMALES:
/*
suamme(5,7,function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));
});
*/


//FUNCIONES FLECHA:
suamme(5,7, dato => {
    console.log("La suma es: ",dato);
},
dato => {
    console.log("La suma por dos es: ",(dato*2));
});

//LAS FUNCIONES FLECHA NO TIENE UNA PALABRA CLAVE POR LO TANTO NO SE PUEDE USAR COMO METODO
//SOLO SE RECOMIENDA USAR LAS FUNCIONES FLECHA SI SON FUNCIONES DE CALLBACK
//SI LA FUNCION FLECHA LLEVA DOS PARAMETROS SE DEBEN COLOCAR PARENTECIS ENTRE ELLOS
