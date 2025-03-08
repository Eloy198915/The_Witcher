/*
   length - Devuelve el número de caracteres
   de una cadena de texto
*/
//const texto = 'Hola yo soy Eloy'; 
//console.log(texto.length);
/*
    indexOf() y lastIndexOf() - Devuelve el
     index del primer y ultimo caracter especificado
*/
//const texto = 'Hola yo soy Eloy';
//console.log(texto.indexOf('y'));
// o asi
//const index = texto.indexOf('y');
//console.log(index);

//const texto1 = 'Hola yo soy Eloy';
//console.log(texto1.lastIndexOf('y'));
// o asi
//const index1 = texto1.lastIndexOf('y');
//console.log(index1);

/*
slice() Devuelve un fragmento de una cadena de texto.
1 parametro - index desde donde queremos cortar
2 parametro (opcional) - index hasra donde queremos
cortar
*/
//const texto = 'Hola yo soy carlos!';
//const index = texto.indexOf('s');
//const lastindex = texto.lastIndexOf('s')
//console.log(texto.slice(index, lastindex +1 ));
    //console.log(texto.slice(7,18 + 1));
    //console.log(texto.slice(-7,-2 +1));

//console.log(texto);

/*
    replace() - Devuelve una cadena de texto en
    donde remplaza un valor por otro.
    1 parametro - el texto que queremos remplazar
    2 parametro - el texto que queremos poner
*/

//const texto = 'Hola yo soy carlos!';
//console.log(texto.replace('carlos','Manolo'));

/*
   split() - Convierte una cadena de texto en un
   arreglo.
   tenemos que especificar donde cortar cada elemento
   1 parametro - el caracter que funcionara como 
   separador.
*/
const texto = 'Hola yo soy Carlos!';
console.log(texto.split(' '));
/*
  toUpperCase() y toLowerCase()
  Devuelve una cadena de texto de puras
  minusculas/mayusculas.
 */
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());