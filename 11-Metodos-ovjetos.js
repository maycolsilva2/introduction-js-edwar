//Maycol Silva Orozco Metodos para los objetos

//Maycol Silva Orozco Con esta linea del codigo grantizo excelentes practicas
"use strict"

const product = {
    productName : "sensor de humedad",
    price : 300,
    available : true,
    
}

const speedMax = 80;
//speedMax = 70; 
console.log(speedMax);

//Maycol Silva Orozco Aunque el objeto product este declarado como constante permite agregar propiedades 
product.quantity = 18;
console.log(product);

//Maycol Silva Orozco con el método o función freeze congelamos los objetos para que no se puedan agregar mas propiedades o eliminarlas o modificarlas (editarlas)
//Object.freeze(product);

//Maycol Silva Orozco Si usamos el motodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedad
//Object.seal(product);

//Maycol Silva Orozco Agregamos una nueva propiedad
//product.color = "red";


//Maycol Silva Orozco ver si un un roducto esta congeldo
console.log("esta congelado el producto?: " + Object.isFrozen(product));
let response;
if (Object.isFrozen(product)) {
    response = "si";
}else {
    response = "no"
}
console.log("esta congelado el producto?: " + response);
//Maycol Silva Orozco eliminar una propiedad
//delete product.price;
//console.log(product)

//Maycol Silva Orozco modificar o editar las propiedades
product.productName = "sensor de ph";
console.log(product);

//Maycol Silva Orozco ver si esta sellado
console.log("esta congelado el producto?: " + Object.isSealed(product));