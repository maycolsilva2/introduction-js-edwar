// Diferencia entre metodos y funciones

const num1 = 10;
const num2 ='20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// Parsear es covertir un tipo de variable a otro tipo
console.log(num1);
console.log(parseInt(num2));

// Este método convierte de número a tring
console.log(num1.toString())
console.log(num1);

// ==============================================
// Función: Bloque de código independiente que realiza una tarea 
function greet(params) {
    console.log('hello')
};
greet(); //argumentos

// ===========================================================
const person = {
    userName: 'maycol',
    greet: function (params) {
        console.log(`hello, i'm ${this.userName}`)
    }
}

// Metodo es una función asociada a un objeto(se llama atraves de un ponto(.))
person.greet();//este es un metodo porque pertenece a person
console.log(typeof person);


// una función existe por si sola, por el contrario un metodo es una función dentro de un objeto