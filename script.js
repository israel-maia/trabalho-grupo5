function cauculoimc() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    valor = peso / (altura * altura);
    document.getElementById('resultado').value = valor.toFixed(2);
}