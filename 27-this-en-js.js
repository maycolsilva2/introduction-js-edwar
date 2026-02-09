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
    userAge: 31,
    total : 150000,
    isPaid: false,

    // Los objetos no pueden contener funciones
    information: function () {
        console.log (`Èl cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}
            hasta el momemnto el estado del pago es ${this.isPaid}`)
    }



};

const reservation3 ={
    userName : "juam",
    lastName : "silva",
    userAge: 22,
    total : 150000,
    isPaid: false,

    // Los objetos no pueden contener funciones
    information: () => {
        console.log (`Èl cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}
            hasta el momemnto el estado del pago es ${this.isPaid}`)
    }



};                                                                                                




// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio usar la funcion de esta manera, porque esta hace referencia al
// objeto que se esta usando.
reservation.information();
reservation2.information();

// Si se usa arrow function no es capaz de leer los datos en el contexto, dando 
reservation3.information();