const usuario = {
    nombre: 'Carlos',
    pais: 'Argentino',

};
//if (usuario.pais === 'Mexico'){
//console.log('El usuario es Mexicano');

//} else if(usuario.pais === 'España') {
//console.log('El usuario es Español');
//} else if(usuario.pais === 'Brasil') {
//    console.log('El usuario es Brasileño');
//    } else {
//        console.log('El usuario es de otro pais');
//    }

switch (usuario.pais) {
    case 'Mexico':
        console.log('El usuario es Mexicano');
        break;
    case 'España':
        console.log('El usuario es Español');
        break;
    case 'Argentino':
        console.log('El usuario es Argentino');
        break;
default:
    console.log('El usuario es de un pais no registrado');
}


