// los booleanos tienen dos valores verdadero y falso

let age = 42;
// .Mayor que
let isOlderThan = age >= 18;

console.log(isOlderThan);

// =========
let userName = "";

let haveName = userName !== "";

console.log(userName)
// ==========
// En JS 0 es falsy, pero cualquier número distinto a 0 es truthy
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(10))
console.log(Boolean(-5))
console.log(typeof Boolean(-5))
// =================
// En JS null or undefined siempre se convertira en false
let nullValue = null;
let undefinedValue;
console.log (Boolean(nullValue));
console.log (Boolean(undefinedValue));

// =================
// Los booleanos son las bases de las decisiones
let haveAccess = true
if (haveAccess) {
    console.log ("welcome to sistem")
}else{
    console.log ("denied access")
}