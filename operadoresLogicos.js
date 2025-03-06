/* Operadores Lógicos
&& And
|| Or
!  Not
*/
// Una pagina para vender voletos de concierto a las personas mayores de edad
//const nombre = 'Carlos';
//const edad = 17;
const nombre = 'Pepe';
const edad = 17;
const tieneEntrada = false;
const tienePermisoDePadres = true;

// ejemplo 1 - &&
//const permitirAcceso = edad >= 18 && tieneEntrada;
//console.log('Acceso permitido al concierto: ' + permitirAcceso);

// ejemplo 2 - Or
const permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermisoDePadres && tieneEntrada;
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// ejemplo 3 - !-> esto lo pones al lado de la variable y te da el resultado contrario , por ejemplo con false daria true
const variable = true;
console.log(!variable);
