// Estructura switch
// permite evaluar una expresión y ejecutar diferentes bloques de codigo, segun el caso que coincida.

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con tarjeta')
        break;
    case 'bitCoin':
        console.log('pagaste con BitCoin')
        break;
    case 'debitCard':
        console.log('Pagaste con tarjeta débito')
        break;
    case creditCard:
        console.log('pagaste con tarjeta crédito')
        break;

    default:
        console.log('Método de pago no válido')
        break;
}