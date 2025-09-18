//Rest operator o spread operator
//Lo que se busca es NO NO NO modificar el arreglo original.

const months = ['Decembre', 'Novembre', 'March'];
console.table(months);
// Se crea un nuevo arreglo y lo unimos con otro.
const newArray = [...months, 'January'];

console.table(newArray);
// El nuevo arreglo se puede agregar al final o al inicio
const newArray2 = ['january', ...months];
console.table(newArray2);

months.unshift("January");
console.table(months);

months.push("July")
console.table(months)