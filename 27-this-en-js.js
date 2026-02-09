// This es una palabea reservada del sistema, osea que 
// no se puede crear ni funciones ni variables con este nombre

const reservation ={
    userName : "Maycol",
    lastName : "silva",
    userAge: 43,
    total : 100000,
    isPaid: false,

    // Los objetos no pueden contener funciones
    information: function () {
        console.log (`Èl cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}
            hasta el momemnto el estado del pago es ${this.isPaid}`)
    }



};



reservation.information();

const reservation2 ={
    userName : "Estiben",
    lastName : "Orozco",
    userAge: 43,
    total : 150000,
    isPaid: false,

    // Los objetos no pueden contener funciones
    information: function () {
        console.log (`Èl cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}
            hasta el momemnto el estado del pago es ${this.isPaid}`)
    }



};
reservation2.information();