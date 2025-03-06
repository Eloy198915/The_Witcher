const colores = [' Rojo ', ' Verde ', ' Azul '];

/*
  .length
  (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colores.length);

/*
  .toString()
  Nos permite transformar un arreglo a una cadena de texto.
  por ejemplo para poder mostrarlo en el navegador 
*/
//document.body.innerHTML = colores.toString();

/*
    join()
    nos permite transformar un arreglo a una cadena
    de texto y separar cada elemento 
*/
//console.log(colores.join('-'))
/*
    sort()
    Nos permite ordenar un arreglo de cadenas de texto,
    de forma alfabetica.
*/
const letras = ['t','b','e','o'];
console.log(letras.sort());

//const numeros = [3, 4, 5, 2, 1];
//console.log(numeros.sort());

//const numeros = [15,4,333,2,1];
//numeros.sort((a, b) => a - b);
//console.log(numeros);

/*
    reverse()
    Nos permite ordenar un arreglo de forma
    descendente
*/
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.reverse());
//console.log(letras.reverse());
/*
   concat()
    Nos permite juntar dos arreglos en uno solo.
*/
const arreglo = [1,2,3,4];
const arreglo2 = ['A','B','C','D',];
const arreglo3 = arreglo.concat(arreglo2);

console.log(arreglo3);
/*
   push()
    Nos permite agregar un elemento
    al final de un arreglo.
*/
colores.push(' Negro ');
console.log(colores);

/*
   pop()
    Nos permite eliminar el ultimo elemento
     de un arreglo.
*/
colores.pop();
colores.pop();
console.log(colores);
/*
   shift()
    Elimina el primer elemento de un arreglo y
    recorre los elementos.
*/
const dias = ['Lunes','Martes','Miercoles',
  'Jueves','Viernes','Sabado','Domingo',];
  const diaEliminado = dias.shift();
  console.log(dias[0]);
  console.log(dias);
  // abajo muestra el dia eliminado.
  console.log(diaEliminado);
/*
   unshift()
    Agrega un elemento al inicio del arreglo
    y empuja los elementos.
*/
dias.unshift('Carlos');
console.log(dias);
console.log(dias[0]);

/*
   splice()
    Nos permite insertar elementos a un arreglo
    donde los especifiquemos.
    -1 parametro - posicion donde queremos comenzar
    a insertar los elementos.
    -2 parametro - si queremos eliminar elementos
    del  arreglo desde la posicion indicada.
    - Resto de parametros - Los elementos  a insertar.
*/
const amigos = ['Alejandro','Cesar','Manuel'];
amigos.splice(1, 2, 'Roberto','Raul');
console.log(amigos);

/*
   slice()
   Nos permite copiar una parte de
    un arreglo a otro.
    - 1 parametro - Posicion desde donde queremos
    copiar.
    - 2 parametro - Hasta antes de que elemento
    copiar.
*/
const frutas = ['Fresa','Manzana','Uva','Piña','Mango','Naranja','Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
