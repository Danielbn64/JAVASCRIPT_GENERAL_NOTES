let nombres = ["Victor","Paco","Daniel","Juan"];

//Bucle clasico:
for(let i = 0; i < nombres.length; i++){
    //console.log(nombres[i]);
}

//For of
for(let nombre of nombres){
    //console.log(nombre);
}

//For in saca el indice no el nombre, tambien recorre json
for(let indice in nombres){
    //console.log(indice);
    //console.log(indice, nombres[indice]);
}

//ForEach
nombres.forEach((nombre, indice) =>{
    console.log(indice, nombre);
})

//Symbol iterator, convierte objetos en iterables:
let frutas = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno"
};

frutas[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);
    return {
        next(){
            if(indice >= valores.length){
                return {
                    done: true,
                    value: undefined
                };
            }
            return{
                done: false,
                value: valores[indice++]
            }
        }
    };
}

for(let propiedad of frutas){
    //console.log(propiedad);
}

for(let propiedad in frutas){
    console.log(propiedad + ": ", frutas[propiedad]);
}
