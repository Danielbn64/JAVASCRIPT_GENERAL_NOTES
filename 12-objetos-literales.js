let titulo = "El señor de los anillos";
let genero = "Accion";
let duracion = "2 horas";

const peliculas = {
    titulo,
    genero,
    duracion,
    [genero + " 2022"]: "propiedad compuesta",
    mostrar(){
        return this.titulo + " " + this.genero;
    }
};

console.log(peliculas.mostrar());
console.log(Object.values(peliculas));
// Object.entries(peliculas).forEach(elemento => console.log(elemento));
Object.entries(peliculas).forEach(([clave, valor]) => console.log(clave, valor));