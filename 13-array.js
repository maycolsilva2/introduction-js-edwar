// arrays en js

const numbers = [10, 20, 30, 80, 100];

// console.log(numbers);
// otra forma de visualización en tabla
console.table(numbers);

// crear un arreglo con el constructor
const months = new Array ('may', 'february', 'january', 'july',);

console.table(months);


const miArray = ['hello', 18, true, false, null, {myName: "edwar", myJob: "teacher"},[3172293, 3147220, 3036193]];

console.log(miArray);
// consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(miArray[5])

// metodo para conocer la longitud de un arreglo
console.log("maycol tu arreglo tiene: " + numbers.length + " elementos");

// un inerador con forEach
const numbers2 = [10, 20, 30, 80, 100, 7, 8]
numbers2.forEach(function(number){
    console.log(number)
})


months.forEach (function(month){
    console.log(month)
})
miArray.forEach(function(element){
    console.log(element)
})