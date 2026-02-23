// async await son caracteristicas de JS que facilitan trabajar con funciones asincronas, permitiendo escribir codigo que se parece mas al sincrono y mas facil de leer
/*
antes del 2015 se usaba .then() y catch() pero ahora se usa async y await que internamente siguen siendo promesas.
async : se declara una funcion asincronica quesiempre devuelve una promesa
await : pausa la ejecucion de la funcion async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.*/


// ================================================================================

// Ejemplo con una función que se cumpla

function downloadNewClients (){
return new Promise(resolve =>{
 console.log("Descargando clientes.... espere porfavor.")
 setTimeout(() =>{
   resolve ("los clientes fueron descargados")
},  8000)
})
}

// async function app() {
//     try{
//         const result = await downloadNewClients()
//         // codigo bloqueado hasta que se resuelva la promesa
//         console.log("codigo que si se bloquea")
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }

// app();
// console.log("codigo que no se bloquea")


function downloadLastOrders (){
return new Promise(resolve =>{
 console.log("Descargando ultimos pedidos.... espere porfavor.")
 setTimeout(() =>{
   resolve("los ultimos pedidos fueron descargados")
},  10000)
})
}

async function app() {
    try{
        // const clients = await downloadNewClients()
        // const orders = await downloadLastOrders()
        //  console.log("codigo que se bloquea")
        // // codigo bloqueado hasta que se resuelva la promesa
        // console.log(clients)
        // console.log(orders)

           const result = await Promise.all([downloadNewClients(), downloadLastOrders()])
        //    console.log("codigo que se bloquea")
           console.log(result[0])
           console.log(result[1])
    }catch(error){
        console.log(error)
    }
}

app();
console.log("codigo que no se bloquea")
