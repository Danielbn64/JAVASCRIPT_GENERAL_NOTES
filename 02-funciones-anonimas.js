//Funciones anonimas
//es una funcion que no tiene nombre;

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

//Callback
//Es una funcion que se ejecuta dentro de otra
function suamme(numero1,numero2,sumaymuestra,suma_por_dos){
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    suma_por_dos(sumar);
    return sumar
}

//console.log(suamme(4,5));

suamme(5,7,function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));
});