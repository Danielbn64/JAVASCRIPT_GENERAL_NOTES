let persona = {
    nombre: "victor",
    apellidos: "robles",
    domicilio: {
        pais: "España",
        ciudad:{
            nombre: "Madrid",
            provincia: "Madrid"
        }
    }
};

// let comprobar_provincia = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.provincia;
// console.log(comprobar_provincia);

let comprobar_provincia = (persona?.domicilio?.ciudad?.provincia) == undefined ? false : true;
console.log(comprobar_provincia);