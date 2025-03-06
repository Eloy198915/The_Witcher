/* Local Scope o Variables Locales
- Son las variables declaradas dentro de una funcion.
- Solo podemos acceder a ellas dentro de la funcion.
*/
var numero = 1; // variable fuera de la funcion

var obtenerNumerosLetras = (nombre) => {
   var numero = nombre.length;

   console.log(`${nombre} tiene ${numero} numero de letras`);

   var functionAnidada = () => {
        console.log(numero);
   }
   functionAnidada();
};
obtenerNumerosLetras('Pepe');
//console.log(numero);