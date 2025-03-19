//console.log('1');
//console.log('2');
//console.log('3');
//console.log('4');
//console.log('5');
// el metodo forEach es un ciclo solo para arreglos
//const nombres = ['Carlos', 'Christian', 'Christopher',
//    'Estefania', 'Erika', 'Manuel'];
//nombres.forEach((nombres) => {
//    console.log(nombres)
//});
/* 
Ciclo For
Repite un bloque de código mientras se cumpla 
una condición.

Expresion 1: Se ejecuta una sola vez antes de comenzar
a repetir el bloque de codigo.
Expresion 2: Una condicion, mientras se cumpla se
ejecutara el bloque de código.
Expresion 3: Esta expresion se ejecutara siempre y 
despues de que se ejecute el bloque de código
*/
//for(let numero = 3; numero < 332; numero++ ){
//   console.log(numero);
//}
//  otro ejemplo
//for(let numero = 3; numero > -332; numero =
//     numero - 5 ){
//    console.log(numero);
// }
//   ejemplo del 50 al 0 
// for(let numero = 50; numero >= 0; numero-- ){
//   console.log(numero);
//}
// Ciclo for con los nombres de array de arriba
const nombres = ['Carlos', 'Christian', 'Christopher',
    'Estefania', 'Erika', 'Manuel','Eloy','Ricardo'];
//for(let numero = 0; numero < 6; numero++ ){
//    console.log(nombres[numero]);
// }
 /* pero si añado mas nombres a la variable no
 me saldran en el for, por ello podria hacer lo
 siguiente. cambiando la condicion */

// for(let numero = 0; numero < 8; numero++ ){
//    console.log(nombres[numero]);
// }
 // o asi, con lenght, es mas optimo
 for(let numero = 0; numero < nombres.length ; numero++ ){
    console.log(nombres[numero]);
 }