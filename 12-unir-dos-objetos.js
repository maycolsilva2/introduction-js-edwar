//cuando se unen dos objetos lo ideal es no modificar ninguno de los dos objetos
const product = {
    productName : "sensor de humedad",
    price : 300,
    available : true,
    
}

Object.freeze(product)
//objeto que almacena las medidas
const measurements ={
       weight : '1 kg',    
       measurement : '10 cm'
}

//rest operator,consta de (...)

const newProduct = {...product, ...measurements};

// console.log(product)
// console.log(newProduct)

const car ={
    model : 2026,
    mark : 'bmw'
}

const ball ={
    color : 'blanco',
    type : 'futbol sala'
}

const newCarro ={...car, ...ball};
console.log (newCarro)