// string o cadena de texto
const sensor = "temperatura";
const sensor2 = "ph";

console.log(sensor);
console.log(sensor2);
// estas formas no son tan comunes
const sensor3 = String("Presión");
const sensor4 = new String ("Aceleración");

console.log(sensor3);
console.log(sensor4);

// para saber el tipo de dato de una variable
console.log(typeof sensor3);

let product = ("televisor de 32\"");
let producto2 = ("televisor de 58\"");
console.log(product);
console.log(producto2);

// metodos con string 
console.log(producto2.length)

let nombre = "maycol estiben silva orozco";
console.log(nombre.length)

// Sirve para saber si una cadena de texto existe en una frase
// indexof nos muestra la posición en la que se encuentra la cadena de texto
// si la cadena no existe muestra un resultado menor que cero
let phrase = 'aquí vamos a buscar la palabra SENA';
console.log(phrase.indexOf("SENA"));

// hacer lo mismo de una forma mas moderna, el resultado es true o false
let phrase2 = 'aquí vamos a buscar la palabra SENA';
console.log(phrase.includes("SENA"));