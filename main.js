// setTimeout(() => {
//     const parrafo = document.getElementById('parrafo');
//     parrafo.style.color = 'red';
// }, 1100);


function changeColor(newColor) {
    const elem = document.getElementById('parrafo');
    elem.style.color = newColor;
}

function changeColor2() {
    const elem = document.getElementById('parrafo');
    const color = document.getElementById('color').value;
    elem.style.color = color;

    console.log("prueba de consola");
}