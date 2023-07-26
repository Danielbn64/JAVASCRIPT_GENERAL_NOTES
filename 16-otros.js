//Separadores nuemricos
let numero = 4_000_000_000;
console.log(typeof numero, numero);

//Replace y ReplaceAll
let frase = "Voy en mi moto contento por la carretera y veo otro moto";
//let nueva_frase = frase.replace(/moto/g, "coche");
let nueva_frase = frase.replaceAll("moto", "coche");
console.log(nueva_frase);

//Asignadores Lógicos
let nombre;
let id = 80;

//nombre = nombre || id; //Si existe el nombre muestrame el nombre y si no muestrame el id
nombre ||= id;
nombre &&= id;
console.log(nombre);

//Si nombre da null que nombre se le asigne el valor de id
nombre ??=id;
console.log(nombre);