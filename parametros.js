/*
- Parametros: los valores especificados en la definicion
- Argumentos: los valores que le pasamos a la funcion cuando la invocamos.
*/
//const saludo = (nombre = 'Marta') => {
   // console.log(`Hola ${nombre}!`);

//};

//saludo('Carlos');
//saludo('Alex');
//saludo('Eloy');
//saludo();

/*
   Multiples parametros 
*/

const operacion = (tipo, numero1, numero2) => {
    //console.log(numero1 + numero2);
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numero1 - numero2);
    }
};
operacion('suma', 100, 200);
operacion('resta', 100, 200);
