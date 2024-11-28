console.log('Ejercicio 1 ---------------------');
const array = ['Naruto', 'Sasuke', 'Kakashi', 'Chouji', 'Jiraiya', 'Ash', 'Brook', 'Misty', 'Spiderman', 'Batman'];

array.forEach((element, index) => {
    console.log(index, element);
});


// ------------------------------------------------------------------------------------
console.log('Ejercicio 2 ---------------------');
console.log('Posición 3 =>', array[3]);
console.log('Posición 6 =>', array[6]);


// ------------------------------------------------------------------------------------
console.log('Ejercicio 3 ---------------------');
console.log('Tamaño del array => ', array.length);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 4 ---------------------');
array.unshift('Pain');
console.log(array);
console.log(array[0]);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 5 ---------------------');
array.push('Danzo');
console.log(array[array.length - 1]);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 6 ---------------------');
array.splice(6, 2);
console.log(array);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 7 ---------------------');
console.log(array.indexOf("Sasuke"));

// ------------------------------------------------------------------------------------
console.log('Ejercicio 8 ---------------------');
console.log(array.reverse());

// ------------------------------------------------------------------------------------
console.log('Ejercicio 9 ---------------------');
console.log(array.join(', '));

// ------------------------------------------------------------------------------------
console.log('Ejercicio 10 ---------------------');
array.toString();
console.log(array);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 11 ---------------------');
array.map((element, index) => console.log(index, element));

// ------------------------------------------------------------------------------------
console.log('Ejercicio 12 ---------------------');
const array12 = ['☀️', '😎'];
array12.map(element => element + '🔥');
console.log(array12);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 13 ---------------------');
const array13 = ['☀️', '😎'];
console.log(array13.find(element => element.includes('☀️')));

// ------------------------------------------------------------------------------------
console.log('Ejercicio 14 ---------------------');
const array14 = ['Naruto', 'Sasuke', 'Kakashi', 'Chouji', 'Jiraiya', 'Ash', 'Brook', 'Misty', 'Spiderman', 'Batman'];
const filtrarArray = array14.filter(element => element === 'Kakashi');
console.log(filtrarArray);

// ------------------------------------------------------------------------------------
console.log('Ejercicio 15 ---------------------');
const alumno = ['Timmy', 'Garcia', 'Diseño Web'];
const [nombre, apellido, curso] = alumno;
console.log('nombre: ' + nombre);
console.log('apellido: ' + apellido);
console.log('curso: ' + curso);