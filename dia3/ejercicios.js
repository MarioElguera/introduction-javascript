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
alumno.metodo1 = () => console.log(alumno.nombre + ' ' + alumno.apellido);
alumno.metodo1();