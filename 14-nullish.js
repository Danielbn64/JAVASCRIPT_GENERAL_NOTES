function multiplicacion(numero1, numero2){
    //numero1 = (numero1 == null ? 1 : numero1);
    //numero2 = (numero2 == null ? 1 : numero2);

    numero1 = numero1 ?? 1;
    numero2 = numero2 ?? 1;
    return numero1 * numero2;
}
console.log(multiplicacion(2, 12));

function mostrarUsuario(id, nombre){
    // let mi_usuario = (id + " " + nombre) ?? "Usuario desconocido";
    // return mi_usuario;
    id = id ?? 0;
    nombre = nombre ?? "Usuario desconocido";
    return id + " " + nombre;
}

console.log(multiplicacion(2));

//console.log(mostrarUsuario(2, "victor"));//si le pasas un solo valor o no le pasas ningun parametro
//aparece undefined
console.log(mostrarUsuario());