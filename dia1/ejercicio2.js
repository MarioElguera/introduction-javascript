function send() {
    const txtArea = document.getElementById('txtArea');
    const parrafo = document.getElementById('parrafo');

    const textAreaValue = txtArea.value;
    parrafo.innerHTML = textAreaValue;
}

function clean() {
    let txtArea = document.getElementById('txtArea');
    const parrafo = document.getElementById('parrafo');

    txtArea.value = "";
    parrafo.innerHTML = "";
}