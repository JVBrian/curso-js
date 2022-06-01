// //Función tradicional
// function sumaNumeros (a,b) {
//     return a + b
// }

//console.log(sumaNumeros(5,9))

// //Función flecha
// const sumaFlecha = a =>  a + 5;
//console.log(sumaFlecha(9))

const valorEdad = 18;
const edadPersona = 12;
//Condicional Ternario
// const resultado = edadPersona >= valorEdad ? "Mayor de edad" : "Menor de edad"
// console.log(resultado)

//Condicionales IF, ELSE IF, ELSE
// if (
//   edadPersona >= valorEdad &&
//   edadPersona > 0 &&
//   edadPersona <= 120 &&
//   typeof (edadPersona === Number)
// ) {
//   console.log("Mayor de edad");
// } else if (edadPersona < valorEdad && edadPersona > 0) {
//   console.log("Menor de edad");
// } else {
//   console.log("Dato invalido");
// }

//SWITCH CASE
const edad = 5;
switch(edad){
    case 20:
    case 10:
    case 5:
        console.log("El resultado es A")
        break;
    case 15:
        console.log("El resultado es B")
        break;
    default:
        console.log("Este valor es por defecto")
}
