// Estructura de control IF
// const score = Number(prompt(`Ingrese el puntaje`));

// if (score == 100) {
//     console.log(`si el puntaje es 100`);
// }else{
//     console.log(`El puntaje es diferente de 100`);
// }
// // =================================================

// if (score!== 100){
//     console.log(`El puntaje es diferente de 100`)
// }else{
//     console.log(`El puntaje es 100`)
// }

// ====================================================
const rol = String(prompt('Ingrese su rol'))

if(rol == 'admin'){
    console.log(`Tienes acceso a toda el sistema`)
}else if (rol == 'editor') {
    console.log(`Puedes editar funciones basicas`)
}else{
    console.log('No tienes ingreso al sistema')
}