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
        nombre: 'Julia',
        apellido: 'López'
    },
    "persona3" : {
        nombre: 'Juan',
        apellido: 'López'
    },
    "persona4" : {
        nombre: 'Aldo',
        apellido: 'López'
    },
    "persona5" : {
        nombre: 'Jorge',
        apellido: 'X'
    }
};

console.log(objetoData.persona1.nombre);
console.log(objetoData['persona1'].nombre);
console.log(objetoData['persona1']['nombre']);
console.log(objetoData.persona1['nombre']);

// Recorer un objeto de objetos:

// ERROR: No podemos usar map en un objeto, sólo en un array.
// objetoData.map(elemento => console.log('hola'));

// Paso 1: Creamos un array con las keys del objeto iterar
// const arrayKeys = Object.keys(objetoData);
// console.log(arrayKeys);

// Paso 2: iteramos array de keys y accedemos a cada objeto 
// arrayKeys.map(key => console.log(objetoData[key].nombre));

// Lo mismo de arriba pero en un solo paso
Object.keys(objetoData).map(key => console.log(objetoData[key].nombre));

// Otra forma de iterar un objeto
for (const property in objetoData) {
    console.log(objetoData[property].nombre);
}
