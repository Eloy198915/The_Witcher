/*const nombres = ['Arturo','Andres','Alejandro','Roberto',
    'Adrian','Antonio','Angel']; 

for (let i = 0; i < nombres.length ; i++) {
    if (nombres[i][0] !== 'A') {
        console.log('Cuidado! Hay un nombre que no empieza por A');
        console.log(nombres[i] + ' no empieza por la letra A');
        break;
    };
    console.log(nombres[i]);
}
*/

/*
Continue
La sentencia continue nos sirve para saltar a
la siguiente iteración.
*/
const invitados = ['Arturo', 'Andres', 'Alejandro', 'Roberto',
    'Adrian', 'Antonio', 'Angel'];
    console.log('Lista de personas aceptadas:')

    for (let i = 0; i < invitados.length; i++) {
        if (invitados[i]=== 'jorge') {
            continue;
        }
        console.log(invitados[i]);
    }