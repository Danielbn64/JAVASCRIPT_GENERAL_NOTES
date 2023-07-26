let personas = ["victor","paco","pepe","juan","antonio"];
let paises = [{
    nombre: "España",
    continente: "Europa"
},{
    nombre: "Francia",
    continente: "Europa"
},{
    nombre: "Australia",
    continente: "Oceania"
}];

//Some
let existeAlguno = personas.some(nombre => nombre === "francisco");
console.log(existeAlguno);

//Every
let esIgualEnTodos = paises.every(pais => paises.continente === "Europa");
console.log(esIgualEnTodos);

//Map
personas.map(persona => console.log(persona));

//Reduce: devuelever todos los valores en uno solo
console.log(personas.reduce((acumualdor, actual) =>{
    let valor_actual = ", " + actual ;
    return acumualdor + valor_actual;
}));