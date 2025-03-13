 /*
 Operador Spread    
 Permite tomar los elementos de un arreglo u 
 objeto y expandirlos en otro sitio.
 */
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
    nombre: 'Carlos',
    edad: 27,
    ...datosLogin
};
console.log(usuario);