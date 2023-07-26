//Seleccionar elementos por id
//let contenedor = document.getElementById("contenedor");//Metodo tradicional
//let contenedor = querySelector("#contenedor > p a");
//
//let contenedor = document.querySelector(".container");

//Seleccionar elementos con una clase
let contenedor = document.querySelectorAll(".container");

//contenedor.style.border = "1px solid black";
//contenedor.style.backgroundColor = "gray";
contenedor.forEach((elemento, indice) =>{ 
    elemento.innerText = `Hola soy el texto: ${indice}`;
    elemento.className = "ficha";
    elemento.style.border = "1px solid black";
    elemento.style.backgroundColor = "gray";
    if(indice === 2){
        elemento.style.backgroundColor = "orange";
    }
});

let contenedor1 = document.querySelectorAll(".container1");

for(indice in contenedor1){
    contenedor1[indice].style.border = "1px solid black";
    contenedor1[indice].style.backgroundColor = "gray";
    contenedor1[indice].innerText = `Hola soy el texto: ${indice}`;
    if(parseInt(indice) === 2){
        contenedor1[indice].style.backgroundColor = "orange";
    }
}