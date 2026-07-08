const visor = document.getElementById('visor');

function adicionar(valor) {
    visor.value += valor;
}

function limpar() {
    visor.value = '';
}

function calcular() {
    try {
        if (visor.value !== '') {
            visor.value = eval(visor.value);
        }
    } catch (erro) {
        visor.value = 'erro';
    }
}