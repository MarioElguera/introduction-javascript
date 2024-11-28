const alumno = {
    nombre: "Mario",
    apellido: "Elguera",
    edad: 31,
    direccion: "Armatambo 225",
}

// ------------------------------------------------------------------------------------
console.log('Ejercicio 1 ---------------------');
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 2 ---------------------');
const { nombre, apellido, edad } = alumno;
console.log('nombre: ', nombre);
console.log('apellido:', apellido);
console.log('edad:', edad);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 3 ---------------------');
let alumno3 = { name: "Mario", apellido: "Elguera" };
alumno3.metodo1 = function () {
    console.log(this.name + ' ' + this.apellido);
}

alumno3.metodo1();