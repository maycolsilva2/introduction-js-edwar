//Maycol Silva Orozco Desestructuración de objetos

const product = {
    productName : "sensor de humedad",
    price : 300,
    available : true,
    
}


//Maycol Silva Orozco Aqui ejemplo de desestructuración de objetos
const productPrice = product.price;
//const productName = product.productName;

console.log(productPrice);
console.log(product.productName);


//Maycol Silva Orozco Para que sirve el Destructuring? sirve para extraer los valores de objetos

const {price, available, productName} = product;

console.log(price, available, productName);