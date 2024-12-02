setTimeout(() => {
    document.getElementById('parrafo').innerHTML = 'Hello Javascript';
}, 1000);


document.getElementById('parrafo2').innerHTML = 'Hello Javascript2';
setTimeout(() => {
    const elem = document.getElementById('parrafo2');
    elem.style.color = 'red';
}, 1000);

function changeColor(newColor) {
    const elem = document.getElementById('parrafo3');
    elem.style.color = newColor;
}

function changeColor2() {
    const elem = document.getElementById('parrafo3');
    const color = document.getElementById('color').value;
    elem.style.color = color;

    console.log("prueba de consola");
}