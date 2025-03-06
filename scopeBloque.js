/* Block Scope / Alcance de tipo bloque
- Pertenecen las variables declaradas con const o let dentro de un bloque { }
- Solo podemos acceder a ellas dentro del bloque

*/
const edad = 19;
if (edad >= 18) {
    const accesoPermitido = true;
    console.log(accesoPermitido);
} else if (edad < 18) {
    const accesoPermitido = false;
    console.log(accesoPermitido);

    const miFuncion = () => {
        console.log(accesoPermitido);
    };
    miFuncion();
}

// este console de abajo dara error ,por que esta fuera del bloque...
//console.log(accesoPermitido);
// o este de abajo al hacerle una variable fuera del bloque {} no dara error
const accesoPermitido = 'si';
console.log(accesoPermitido);

/* Con las variables tipo var, puedes haceder a ellas tanto dentro como fuera del bloque,
 esto no pasaria con let o const, lo aconsejable es trabajar con let o const. */
//if (true) {
//    var nombre = 'Carlos';
//    console.log(nombre);
//}
//console.log(nombre);






