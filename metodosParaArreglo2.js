/*
   indexOf()
   Obtenemos el primer index de un elemento.
   Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo',
   'Rafael', 'Gema', 'Diana', 'Sara',];
//console.log(nombres.indexOf('Marcos'));
/*
   lastIndexOf()
   Obtenemos el ultimo index de un elemento.
*/
//console.log(nombres.lastIndexOf('Rafael'));

/*
   forEach()
   Nos permite ejecutar una 
   funcion por cada elemento, es muy util.
*/
//nombres.forEach((nombre, index) => {
//   console.log(`Hola ${nombre} y su posicion (${index})`);
//});

/*
   find()
   Nos permite recorrer un arreglo y devuelve
   el PRIMER elemento que retornemos
*/
//nombres.find((nombres) => {
//console.log(`Hola ${nombres}`);
//}); 
//const resultado = nombres.find((nombres) => {
//    if(nombres[0] === 'S'){
//        return nombres;
//    }
//}); 
//console.log(resultado);

/*
   map()
   Nos permite ejecutar una funcion por
   cada elemento y crear un nuevo arreglo
   en base a los resultados de esa funcion.
 */
// imagina que quieres poner cada
//  nombre en mayuscula
//const nombresMayusculas = nombres.map((nombre) => {
//  return nombre.toUpperCase();

//});
//console.log(nombresMayusculas);
// lo de arriba ,se puede ordenar en solo una linea
//const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
//console.log(nombresMayusculas);

/*
   filter()
   Nos permite ejecutar una funcion por cada
   elemento y luego crear un arreglo en base
   a los resultados de esa funcion. Es muy similar
   a map, pero filter solo devuelve los resultados 
   que cumplan con una condicion.
*/
//const nombres4letras = nombres.filter((nombre) => {
//  if(nombre.length === 6){
//    return nombre;
// }
//});
//console.log(nombres4letras);

/*
   includes()
   Nos permite saber si el arreglo contiene un
   elemento especificado
 */
//console.log(nombres.includes('Julio')) // si no esta dice false
//console.log(nombres.includes('Carlos')) // si esta dice true

/*
   every()
   Nos permite ejecutar un condicional sobre
   elemento y nos devuelve true si TODOS los
   elementos cumplieron la condicion.
 */
//const SoloNombres = nombres.every((nombre) => {
//   if(typeof nombre === 'string') {
//      return true;
//  } else {
//   return false;
//  }

//});
//console.log('¿Son solo nombres validos los que hay? ' + SoloNombres);

/*
   some()
   Nos permite ejecutar un condicional sobre cada
   elemento y nos devuelve true si algun elemento
   cumplio la condicion.
 */

const SoloNombres = nombres.some((nombre) => {
   if (typeof nombre !== 'string') {
      return true;
   } else {
      return false;
   }

});
console.log('El arreglo es valido? ' + SoloNombres);

