function sumar() {
    let number1 = document.getElementById('txt1');
    let number2 = document.getElementById('txt2');

    const resultado = parseInt(number1.value) + parseInt(number2.value);
    const showSum = document.getElementById('showSum');
    showSum.innerHTML = resultado;

    number1.value = '';
    number2.value = '';
}