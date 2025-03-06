/* Operadores Aritmeticos 
= Operador de asignacion. Se usa para asignar valores a una variable
+ Suma
- Resta 
* Multiplicacion 
/ Division
% Modulo 
++ Aumento 
-- Disminucion 
*/

//const resultado = 10 + 10; 
//const resultado2 = 10 - 10; 
//const resultado3 = 10 % 4   
/* -> modulo es lo que el restante da por ejemplo 10 dividido en 3 da 9 y
 el 1 sobrante seria el modulo. */

// Vemos abajo ++ de aumento o -- de disminucion  
let numero = 1;
// numero = numero + 1;
// o 
numero++;
//numero--;

console.log(numero);

/* Operadores Asignacion
+= Suma un numero al valor de una variable
-= Resta un numero al valor de una variable
*= Resta un numero al valor de una variable
/= Resta un numero al valor de una variable 
%= Obtiene el sobrante de una division y lo asigna a la variable

*/

let number = 10;
// number = number + 5;
number +=5;

console.log(number); 

/* Operadores de Comparacion:
Nos permite comparar valores 
==    Igual que
===   Igual en valor y typo de valor
!=    Diferente
!==   Diferente en valor y diferente en typo 
>     mayor que 
<     menor que 
>=    mayor o igual que
<=    menor o igual que 
?     operador ternario

*/

// const resultado = 5 > 1; 
//const resultado = 20 >= 20;
//const resultado2 = 20 == 20; // solo compara el valor 

const resultado3 = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)

// ? operador ternario 
 const resultado = 7 > 9 ? 'El valor primero es mayor que el segundo' : 'El segundo valor es mayor que el primero';

console.log(resultado3);


