const usuario = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Alejandro','Cesar','Manuel'],
    saludo: () => {
        console.log('Hola!');
    }
};

/* 
    Metodos propios 
    Los objetos pueden tener metodos
    personalizados 
*/
usuario.saludo();

/* 
    Object.keys()
    Nos devuelve un arreglo con las llaves
    (keys) del objeto
*/
const resultados = Object.keys(usuario);
console.log(resultados);

/* 
    Object.values()
    Nos devuelve un arreglo con os valores
    del objeto
*/
const resultado = Object.values(usuario);
console.log(resultado);

/* 
    Object.entries
    Nos devuelve un arreglo con las parejas clave
    y valor del objeto, digamos que hace el trabajo
    de object.values y object.keys juntos
*/
const resultado1 = Object.entries(usuario);
console.log(resultado1);

console.log(`El objeto tiene ${resultados.length} propiedades`); 
