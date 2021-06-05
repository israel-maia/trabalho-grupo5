function cauculoimc() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var valor = peso / (altura * altura);

    if (altura !== '' && peso !== ''){
        console.log('oi')

        if (valor < 18.5) {
            document.getElementById('resultado').value = valor.toFixed(2) + '' + ' Ta magrelo meu nobre';
        }

        else if (valor < 25.5) {
            document.getElementById('resultado').value = valor.toFixed(2) + '' + ' Ta com o peso ideal meu nobre';
        }

        else {
        document.getElementById('resultado').value = valor.toFixed(2) + '' + ' Ta gordao meu nobre';
    }
    }else{
        document.getElementById('resultado').value = 'por favor preencha todos os campos'
    
    }
}
