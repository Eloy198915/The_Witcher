/*const operacion = (tipo, numero1, numero2) => {
    let resultado;

    if (tipo === 'suma') {
       resultado = numero1 + numero2;
    } else if (tipo === 'resta') {
        resultado = numero1 + numero2;
    }

    return resultado; // me devuelve el resultado abajo, en miVariable, es codigo mas limpio
    }
const miVariable = operacion('suma', 100, 11);
console.log(miVariable);
*/
// O puedes usar return asi ...

const operacion = (tipo, numero1, numero2) => {

    if (tipo === 'suma') {
        return numero1 + numero2;
    } else if (tipo === 'resta') {
        return numero1 + numero2;
    }
};
const miVariable = operacion('suma', 100, 33);
console.log(miVariable);