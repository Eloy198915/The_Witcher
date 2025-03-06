// Estructura de una condicional
// if (true) {
// codigo a ejecutar
// }

// ejemplo 1
//  const usuario = {
//   edad: 17,
//   pais: 'Mexico',
//   ticket: true,
//  };

//  if(usuario.edad > 17){
    //console.log('El usuario es mayor de edad, puede entrar al concierto');
//  } else {
    //console.log('El usuario no es mayor de edad');
//  } 

// ejemplo 2
//    const usuario ={
//    edad: 27,
//    pais: 'Mexico',
//    ticket: false,
//    };
//    if(usuario.edad > 17 && usuario.ticket) {

//     console.log('El usuario es mayor de edad y tiene un ticket');

//    } else {
//    console.log('El usuario no tiene mayoria de edad y no tiene ticket');
//    } 

// ejemplo 3 - Anidando condicionales 
//   const usuario ={
//   edad: 14,
//   pais: 'Mexico',
//   ticket: false,

//   };

//   if(usuario.edad >= 18){
//  if(usuario.ticket){
//   console.log('El usuario es mayor de edad y tiene un ticket');
// } else {
// console.log('Es mayor de edad pero no tiene un ticket');
//   }
//   } else {
//    console.log('El usuario es menor de edad');
//  }

// Ejemplo 4 - else if
//const usuario ={
//    edad: 14,
//    pais: 'España',
//    ticket: false,
//};
//if(usuario.pais) {  
//if(usuario.pais === 'Mexico') {  // tambien vale así.
//    console.log('El usuario es mexicano');
//} 
//if(usuario.pais === 'Colombia') {  
//    console.log('El usuario es colombiano');
//};
//if(usuario.pais === 'España') {  
//    console.log('El usuario es de España');
//};


// o lo hacemos con el else if
const usuario ={
    edad: 14,
    pais: 'EEUU',
    ticket: false,
};
if(usuario.pais === 'Mexico') {  
        console.log('El usuario es mexicano');
    } else if(usuario.pais === 'España') {
        console.log('El usuario es de España');
    } else if(usuario.pais === 'Francia') {
        console.log('El usuario es de Francia');
    } else if(usuario.pais === 'Canada') {
        console.log('El usuario es de Canada');
    } else {
        console.log('El usuario no es de ningun pais registrado');
    }




