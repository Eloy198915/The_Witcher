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
const numero1 = parseInt(prompt('Escribe un numero'));
const numero2 = parseInt(prompt('Escribe un numero')); 
if (numero1 === NaN | numero2 === NaN ) {
    alert('Volver a escribir un numero')
} 
console.log(numero1 + numero2);
  
  

