//arrow function
//En JS es una forma mas corta de escribir funciones usando la sintaxis () =>

//Sintaxis más breve, ideal para funciones pequeñas 
// NO tiene su propio this,hereda el this del contexto donde se define.

// Función sin parametros
const add = function () {
    console.log(16 + 3);
}

add();

// Funcion con parametros
const add2 = function (num1, num2) {
    console.log(num1 + num2)
}
add2(4,8)

// Las llaves son opcionales cuando después de la flecha solo tengo una senstencia
const add3 = (num3, num4) =>{
    console.log(num3 + num4)
}
add3 (6,9)

// Otro ejemplo

const learn = (technology) => {
    console.log(`apendiendo ${technology}`)
}

learn('JavaScript');


// ================================================================================
const months = new Array ('may', 'february', 'january', 'july', 'Decembre', 'novembre', 'February');

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


// months.forEach( function (month){
//             if(month == 'novembre'|| month == 'Decembre' ){
//             console.log("se verifico el arreglo y el mes si existe");

//             }else{
//                 console.log ('el mes no existe');
//             }
// })


months.forEach(month => {
            if(month == 'novembre'|| month == 'Decembre' ){
            console.log("se verifico el arreglo y el mes si existe");

            }else{
                console.log ('el mes no existe');
            }
})
// =========================================================================
// const result = shoppingCart.some(function(product){
//     return product.price === 800;
// })
// console.log(result);

const result = shoppingCart.some(product =>
    product.price === 800);
console.log(result);

// let and const: new ways of declaring variables

// const result3 = shoppingCart.reduce(function(total, product){
//     return total + product.price;
// }, 0)
// console.log(result3);

const result3 = shoppingCart.reduce((total, product) =>
    total + product.price, 0)
console.log(result3);


// const result6 = shoppingCart.filter(function(product){
//     return product.price<600;
// })

// console.log(result6)


const result6 = shoppingCart.filter((product) =>
     product.price<600
)

console.log(result6)    

// =============================================

// function greet(userName){
//     console.log(`Hello ${userName}`)
// }
// console.log(greet("maycol"));

const greet = userName =>
    console.log(`Hello ${userName}`)
greet('maycol');

// ==============================================

const boost = num => num * num;
console.log(boost(4))


const boost2 = num => Math.pow(num, 2);
console.log(boost2(100))

// ==============================================
// Arrow function con retorno explicito

// Se usa cuando el cuerpo de una función tiene llaves{}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7))

// ========================================
// Retorno implicito, cuando la función no tiene llaves realiza el retorno implicitamente 
const add11 = (num6, num7) => num6 + num7;
console.log(add11(4, 6))