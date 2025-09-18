"use strict"
const numbers= [0, 12, 8, 9, 5, 70, 120];
// Agregar elementos a mi arreglo pero con este metodo se requiere conocer la longitud del arreglo
// const numberslength =numbers.length
// console.log(numberslength)
// numbers [numberslength] = 100;

//console.log(numbers);

//Con el método push se agregan elemento al final del arreglo
numbers.push(700);

// console.log(numbers)

// console.table(numbers)
// // Metodo unshift para agregar elementos a un array
numbers.unshift(-3, -2, -1);
// console.log(numbers);

// //Método pop para eliminar el ultimo elemento
// numbers.pop()
// console.log(numbers);

// // metodo shift para eliminar el primer array
// numbers.shift()

// Método splice elimina todos los elementos a partir del indice asignado.
numbers.splice(2);
console.table(numbers);
