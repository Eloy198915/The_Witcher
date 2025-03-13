/*
   toString()
*/
//const numero = 10;
//console.log(numero,typeof numero);
//const texto = numero.toString();
//console.log(texto, typeof texto);

/*
   toFixed()
   permite obtener un numero con la cantidad
   de decimales especificados
*/
//const numero = 3.1253;
//console.log(numero.toFixed(2));

/*
   parseInt()   
   Intenta transformar un valor a un entero,
   muy utilizado.
*/
//const numero1 = parseInt(prompt('Escribe un numero'));
//const numero2 = parseInt(prompt('Escribe un numero')); 

//console.log(numero1 + numero2);

/*
    parseFloat()
    Intenta transformar un valor a un numero con decimales 
*/

//const numero1 = parseFloat(prompt('Escribe un numero'));
//const numero2 = parseFloat(prompt('Escribe un numero'));

//console.log(numero1 + numero2);

/*
    Math.random()
    Genera un numero al azar entre 0 y 1
*/
//const numero = Math.random();
//console.log(numero);

/*
    Math.floor()
    Redondea hacia abajo un numero
*/
//console.log(Math.floor('10.6'));
//console.log(Math.floor('11.3'));

/*
    Math.ceil()
    Redondea hacia arriba un numero
*/
//console.log(Math.ceil('10.6'));
//console.log(Math.ceil('11.3'));

/*
     Math.round()
     Redondea hacia el entero mas cercano
*/
console.log(Math.round('10.264'));
console.log(Math.round('11.34'));
/*  
    Ejemplo de numero al azar de 0 a 100
*/
const numero = Math.random();
console.log(Math.floor(numero * 101));
/*  
    Ejemplo de numero al azar de 0 a 51
    de 0 a 101  ,  de 0 a 151
*/
const numero1 = Math.random();
console.log(Math.floor(numero1 * 51));
console.log(Math.floor(numero1 * 101));
console.log(Math.floor(numero1 * 151));