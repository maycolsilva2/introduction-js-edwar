// Funciones parametros y argumentos


// los parametros se pasan en los parentesis de la función 
function add(num1, num2) {
    return console.log(num1 + num2)
}

add(5, 15)//estos valores que se envian a la función se llaman argumentos
add(7, 85)
add(3, 20)
add(5, 15)
add(7, 7)
add(5, 5)

const add1 = (function(num3, num4){
    return console.log (num3 + num4)
})
add1(7, 85)
add1(3, 20)
add1(5, 15)
add1(7, 7)
add1(5, 5)

// =================================================
// ejemplo cunado no se colocan argumentos,se colocan los valors en los parametros
function add2(num7 = 35, num8 = 10) {
    return console.log(num7 - num8);
}
add2()

// Función que retorna un valor 
function add4(num9, num10) {
    return num9*num10
}

const result = add4(4 , 5)
console.log(result)


// Ejemplo un poco mas avanzado
let total = 0;
// Función para sumar productos
function addShoppingCart(price) {
    return total += price;
}
// Función para agregar el impuesto a pagar
function calculateTax(total) {
    return 1.19 * total;
}
total = addShoppingCart(800);
total = addShoppingCart(500);
total = addShoppingCart(200);
total = addShoppingCart(900);

console.log(`la suma de los productos es ${total}`)
const totalToPay = calculateTax(total);
console.log(`la suma de los productos mas el iva es de: ${totalToPay}`)