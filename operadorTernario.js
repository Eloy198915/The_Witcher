// boleto de dos tipos 
 const boleto = 'Regular';
// let codigoDeAcceso;

//   if(boleto === 'vip') {
//   codigoDeAcceso = 'VIP-123-324';
//  } else {
//      codigoDeAcceso = 'Regular-423-23';
//     }
// console.log(codigoDeAcceso);

const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-324' : 'Regular-456-789';

boleto === 'vip' ? console.log('Tu bolero es de tipo vip') : console.log('Tu bolero es de tipo Regular');
console.log(boleto);