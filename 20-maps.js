//Maps
const antiguos_gatgets = { //Objeto json introduciendo valores al map
    seis:"radicast",
    siete:"telefono sobremesa",
    ocho:"compac disc"
};

const gadgets = new Map(Object.entries(antiguos_gatgets));

gadgets.set(1,"PC")
.set(2,"TV")
//gadgets.set(2,"PC"); las claves nunca se pueden repetir
.set(3,"Tablet")
.set("cuatro", "Movil")
.set("cinco","Laptop");

console.log(gadgets);
console.log(gadgets.get(3));
console.log(gadgets.get("cinco"));

console.log(gadgets.has(2));//Evalua las claves no los valores


