//Es como un array que puede almacenar valores de cualquier tipo pero no admite valores
//duplicados:

let gatgets = new Set(["movil","tablet","portatil"]);

console.log(gatgets);

//Agregar elementos al set
gatgets.add("maquina de afeitar");
gatgets.add("PC sobremesa");
gatgets.add("tv");
gatgets.add("tv");//No se va a agregar porque ya existe
gatgets.add("chromecast");

//Eliminar un elemento del set
gatgets.delete("tv");
gatgets.delete("maquina de afeitar");

//Sacar el tamaño del set
console.log(gatgets.size);

//Comprobar si existe un elemento dentro del set
console.log(gatgets.has("tv")),console.log(gatgets.has("chromecast"));

//Recorrer el set
for(let item of gatgets){
    //console.log(item);
}

gatgets.forEach(item => console.log(item));

gatgets.clear();
console.log(gatgets);