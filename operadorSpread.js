 /*
 Operador Spread    
 Permite tomar los elementos de un arreglo u 
 objeto y expandirlos en otro sitio.
 */
/*
const frutas = ['Manzana','Pera','Piña','Melon'];
const comidaFavorita = ['Pizza','Sushi', ...frutas];
console.log(comidaFavorita);
// si añades algo mas o eliminas algo en frutas , automaticamente saldra en consola tambien.


const datosLogin = {
   nombre: 'Arturo',
   correo: 'correo@correo.com',
   pasword: '123'
};

const usuario = {
    ...datosLogin,
    nombre: 'Carlos',
    edad: 27,
    
};
console.log(usuario);
*/
/*
   Parametro Rest
   Permite que una funcion contenga un numero
   indefinido de argumentos.
   Los argumentos extra que encuentre los convertira
   en un arreglo.
*/
const registrarUsuario = (nombre,correo, ...datosAdicionales) => {
    console.log(nombre,correo,...datosAdicionales);
};
registrarUsuario('Carlos','correo@correo.com');
registrarUsuario('Raul','correo1@correo.com','Edad ' + 28,'España');
registrarUsuario('Mateo','correo2@correo.com');
registrarUsuario('Lucia','correo3@correo.com','Edad ' + 21,'Francia');

/*
   Destructuración de objetos 
   Nos permite obtener elementos o propiedades de
   un arreglo u objeto y guardarlos en una variable
 */
const amigos = ['Manuel','Juanra','Alex'];
//const primerAmigo = amigos[0];
//const segundoAmigo = amigos[1];
//const tercerAmigo = amigos[2];
// o podemos hacer :
const [primerAmigo,segundoAmigo,tercerAmigo]
 = amigos;

console.log(tercerAmigo);

// o en objetos 
const persona = {
   nombre: 'Carlos',
   edad: 24,
   pais: 'Canada'
};
//const {nombre,edad,pais}
// = persona;
// console.log(edad,pais);

//const mostrarEdad = (nombre, edad) => {
//    console.log(`${nombre} tiene ${edad} años`);
//}
//mostrarEdad(persona.nombre, persona.edad);
// tambien funciona igual asi
const {nombre,edad,pais}
 = persona;
 console.log(edad,pais);

const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarEdad(persona);