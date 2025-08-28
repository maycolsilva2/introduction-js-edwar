let result;

result = Math.PI;
result= Math.round(2.7);
result= Math.round(2.1);
result=Math.ceil(2.1);  //redondeo hacia arriba
result =Math.floor(2.8); //redondea hacia abajo
result =Math.sqrt(16); //raiz cuadrada
result = Math.abs(-144); //valor absoluto
result = Math.min(1,5, 85,65, 7);
result = Math.random();
result = Math.floor(Math.random() * 100)//imprimir números
console.log(result);

// realizar las 4 operaciones basicas con 2 numeros randoms no mayores a 100
let result2 =Math.floor (Math.random() *100);
let result3 =Math.floor (Math.random() *100);
let suma = result2 + result3;
let resta = result2 - result3;
let mult = result2 * result3;
let division = result2 / result3;
console.log(suma);
console.log(resta);
console.log(mult);
console.log(division);