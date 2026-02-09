// ForEach map son metodos exclusivos de arreglos
const shoppingCart = [
    {productName: 'smart tv 60', price: 900 , color: "red"},
    {productName: 'smart tv 50', price: 700 , color: "green"},
    {productName: 'tablet', price: 500 , color: "yellow"},
    {productName: 'smart phone', price: 900 , color: "black"},
    {productName: 'google assistand', price: 600 , color: "blue"},         
    {productName: 'sound-bar', price: 400 , color: "orange"},
    {productName: 'sound-bar', price: 900 , color: "purple"},
    {productName: 'play station', price: 800 , color: "red"},
    {productName: 'wii', price: 450 , color: "brown"},
    {productName: 'mouse', price: 50 , color: "pink"},    
]

//Recorrer un arreglo por cada elemento
// shoppingCart.forEach(function(product){
    //    console.log(product);
// });

// shoppingCart.forEach(function(product){
    //    console.log(product.price);
// });

// shoppingCart.forEach(function(product){
    //    console.log(product.productName);
// });

// shoppingCart.forEach(function(product){
    //    console.log(product.color);
// });


// ===============================================
// Ahora forEach con arrow function

shoppingCart.forEach((product) => console.log(product));
shoppingCart.forEach((product) => console.log(product.price));
shoppingCart.forEach((product) => console.log(product.productName));
shoppingCart.forEach((product) => console.log(product.color));



// =======================================

const array = shoppingCart.map( product => `${}`)