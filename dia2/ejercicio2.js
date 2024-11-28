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