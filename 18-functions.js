// functions en JS
// ¿Que es hoisting?
// hoisting en js es el comportamiento en el que el interprete "MUEVE" las declaraciones de variables y funciones a la parte superior de su ambito(scope) ants de ejecutar el codigo.
// esto significa que puedes usar una función o variable declarada ntes de escribirla en el codigo

// declaración de una función 
// Como esta declarada se puede llamar antes o depues de su creación.
function add (params) {
    console.log(10 + 10)
};

add();

// ===========================================================

// La expresión de un función 
// La expresión de la función solo puede llamarse despues de su creación
const sumar2 = function name(params) {
    console.log (3 + 3)
}
sumar2();

// ========================================
// IIFE (Inmediately Invoked function EXpressión), esta función se llama asi misma.
// Son útiles para proteger las variables para que no se mezclen con las variables de otros archivos. 
(function (name) {
    console.log(`Hello ${name}`)
}) ('maycol');


console.log(client);