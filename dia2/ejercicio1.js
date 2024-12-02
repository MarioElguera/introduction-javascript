console.log("Prueba de ejercicios - Dia 2 - Introducción a JavaScript");

// ----------------------------------------------------------------------------
let a = 3;
let result = 'Menor  a 0';

if (a > 0) {
    result = 'Mayor a 0';
}
console.log(result);

// ----------------------------------------------------------------------------
const mayorEdad = 18;
if (mayorEdad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// ----------------------------------------------------------------------------
let x = 51;

if (x > 50) {
    console.log("Es mayor a 50");

} else if (x < 5) {
    console.log("Es menor a 5");

} else {


    console.log("Esta entre 5 y 50");
}

// ----------------------------------------------------------------------------
const mascota = "perro";

switch (mascota) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo una mascota");
        break;
}

// ----------------------------------------------------------------------------
let str = '';

for (let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str);


// ----------------------------------------------------------------------------
let n = 0;

while (n < 3) {
    n++;
}
console.log(n);

// ----------------------------------------------------------------------------
let resultado = '';
let i = 0;

do {
    i = i + 1;
    resultado = resultado + i;
} while (i < 5);

console.log(resultado);

// ----------------------------------------------------------------------------
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));