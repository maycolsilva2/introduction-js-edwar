//Maycol Silva Orozco objetos en JS
//Maycol Silva Orozco objetos en JS
//Maycol Silva Orozco Aqui tenemos tres variables 
let productName = "Sensor de humedad";
let price = 300;
let available = true ;

//Maycol Silva Orozco Es un objeto llamado product que almacena las tres variables en una sola
const product = {
    productName : "sensor de humedad",
    price : 300,
    available : true,
    
}
console.log(product);
console.log(typeof product);
console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);
//Maycol Silva Orozco Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:

console.log("el nombre del producto es " + product.productName);
console.log("el precio del producto es " + product.price);
console.log("el producto esta disponible? " + product.available);

//Maycol Silva Orozco Agregar propiedades a un objeto en JS
product.image = 'image.jpg';

console.log(product);