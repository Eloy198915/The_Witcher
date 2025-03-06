const arreglo = ['Texto', 675, false, {propiedad:'valor'}, [1,4,5]];
console.log(arreglo);

const amigos = ['Alejandro','Manuel','Cesar'];
console.log(amigos[0]);

const colors = ['verde','azul','amarillo','negro','rojo','marron','naranja'];
console.log(colors[3]);


const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Amarillo';
colores[2] = 'Verde';
colores[3] = 'Negro';
// se puede sobrescribir tambien.
colores[5] = 'Granate';
colores[5] = 'Blanco';

console.log('El arreglo tiene : ' + colores.length + ' colores');
// push -> para añadir un elemento o varios al final del array
colores.push('Azul');
console.log(colores);