const objetoLiteral = {
    nombre: 'Hiromi', 
    apellido: 'Ak'
};

// console.log(objetoLiteral.nombre);
// console.log(objetoLiteral['nombre']);

const arrayObjetos = [
    {
        nombre: 'Hiromi', 
        apellido: 'Ak'
    },
    {
        nombre: 'Ana', 
        apellido: 'B'
    },
    {
        nombre: 'Luis', 
        apellido: 'C'
    }
];

// console.log(arrayObjetos[0].nombre);
// console.log(arrayObjetos[0]['nombre']);

// arrayObjetos.map(elemento => console.log(elemento.apellido));
// arrayObjetos.map(elemento => console.log(elemento['apellido']));

const objetoData = {
    "persona1" : {
        nombre: 'Diana',
        apellido: 'López'
    },
    "persona2" : {
        nombre: 'Diana',
        apellido: 'López'
    },
    "persona3" : {
        nombre: 'Diana',
        apellido: 'López'
    },
    "persona4" : {
        nombre: 'Diana',
        apellido: 'López'
    }
};

console.log(objetoData.persona1.nombre);
console.log(objetoData['persona1'].nombre);
console.log(objetoData['persona1']['nombre']);
console.log(objetoData.persona1['nombre']);

//Recorer un objeto de objetos:

objetoData.map(elemento => console.log('hola'));
