// more methodes for arrays
const months = new Array ('may', 'february', 'january', 'july',);

// Este no tiene constructor

const shoppingCart = [
    {productName: 'smart tv 60', price: 900},
    {productName: 'smart tv 50', price: 700},
    {productName: 'tablet', price: 500},
    {productName: 'smart phone', price: 900},
    {productName: 'google assistand', price: 600},
    {productName: 'sound-bar', price: 400},
    {productName: 'sound-bar', price: 900},
    {productName: 'play station', price: 800},
    {productName: 'wii', price: 450},
    {productName: 'mouse', price: 50},
]

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso month es un parametro 
months.forEach(function(month){
    console.log(month)
});

// verificar si un mes existe con un forEach
months.forEach(function(month1){
    if (month1 == 'july'){
    console.log("the month of june exist in the array")
    }else{
        console.log("doesn't exist")
    }
});


// buscar en un arreglo si algo existe, si existe devuelve un true si no un false
const result = months.includes("july")
 console.log (result);

//  =================================
// En JS includes no funciona bien con los objetos 
const result2 = shoppingCart.includes("tablet")
console.log(result2)

const num = 5 == 5;
console.log('igualación doble ' + num);
const num2 = 5 == '5';
console.log('igualación doble ' + num2);

// Con igualación triple verifica si es del mismo valor y tipo
const num3 = 5 === '5';
console.log('igualación triple ' + num3);

// ==================================
// En conslusion para un arreglo plano se usa iclude y opara un arreglo de objetos se usa some.
// const result5 = shoppingCart.some(function(product){
//     return product.productName ==='tablet'
// })
// console.log(result5)

// Hace lo mismo que el codigo anterior pero mas corto con arrow function
let result5 = shoppingCart.some(product => product.productName === "play station")
console.log(result5)

// ===============
// sumar todos los precios del carrito de compras
// result5 = shoppingCart.reduce(function(total, product){
// return total + product.price
// },0)
// console.log(result5)

// lo mismo pero con función flecha
result5 = shoppingCart.reduce((total,product) => total + product.price, 0)
console.log(result5)


// ======================
result5 = shoppingCart.filter(function(product) {
    return product.price < 700
})
console.log (result5)

// lo mismo pero con función flecha
result5 = shoppingCart.filter((product) => product.price < 700)
console.log(result5)

result5 = shoppingCart.filter(function(product) {
    return product.price > 50
})
console.log (result5)

result5 = shoppingCart.filter((product) => product.price > 50)
console.log(result5)

// todos excepto un tipo

result5 = shoppingCart.filter(function (product) {
    return product.productName === "sound-bar"
});
console.log (result5)

result5 = shoppingCart.filter ((product) => product.productName === "sound-bar")
console.log(result5)

// todos excepto un tipo

result5 = shoppingCart.filter(function (product) {
    return product.productName !== "sound-bar"
});
console.log (result5)

result5 = shoppingCart.filter ((product) => product.productName !=="sound-bar")
console.log(result5)   