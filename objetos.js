// en los arreglos se puede añadir mucha informacion , pero muchas veces no sabemos que es que o para que.
const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];

const persona = {
Nombre: 'Carlos',
Edad: 27,
Correo: 'correo@correo.com',
Suscripciones: {
Web: true,
Correo: true,
},
ColoresFavoritos: ['Negro','Verde'],
Saludo: function(){
    alert('Hola a todos amigos !');
}
};

console.log(persona.Nombre);
console.log(persona['Edad']);

//const variable = 'Suscripciones';
//console.log(persona[variable]);

//console.log(persona.Suscripciones.Web);

// Se puede agregar algo a persona como el pais
persona.pais = 'Mexico';
persona.pais = 'Brasil';
console.log(persona);

// Como acceder a la funcion(function)
console.log(persona);
persona.Saludo(); 
