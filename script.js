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

document.addEventListener('keydown', function(evento) {
    const tecla = evento.key;
    if ((tecla >= '0' && tecla <= '9') || tecla === '/' || tecla === '*' || tecla === '-' || tecla === '+' || tecla === '.') {
        adicionar(tecla);
    }
    if (tecla === 'Enter' || tecla === '=') {
        evento.preventDefault();
        calcular();
    }
    if (tecla === 'Backspace' || tecla === 'c' || tecla === 'C') {
        limpar();
    }
});