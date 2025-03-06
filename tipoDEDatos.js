// Cadena de texto
const nombre = 'Carlos'; 
const parrafo = "Este es un 'parrafo'";
const parrafo2 = "Este es un 'parrafo'";
// const parrafo3 = 'Este es un \'parrafo\'';
// Numero 
const numero = 4;
const numero2 = -3.45;
// Boleano  false o true
const usuarioConectado = false; 
const mayorQue = 3 > 2; 

console.log(3 > 2);
// Arrays - arreglos 
const arreglo = [1, 10, 5, 6, 8,];
console.log(arreglo);
const arreglo2 = ['texto', 456 , true, {propiedad: 'valor'}, [3,4,5] ];
console.log(arreglo2);
// Objetos
const persona = { 
    nombre: 'Carlos',
    edad: 24,
    coche: {
        marca: 'Opel',
        color: 'verde Oliva',
    }
 };
 console.log(persona);
 console.log(persona.coche.color);

// Function o funcion, para invocar codigo.
function hola() {
    console.log('hola');
}

hola();
// null  ,lo puedes utilizar para reiniciar el valor de una variable.
const miVariable = null;
// Undefined
const miVariable2 = undefined;