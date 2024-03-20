function isCriptografado(texto) {
    // Verifica se o texto contém alguma das palavras-chave da criptografia
    return /enter|imes|ai|ober|ufat/.test(texto);
}

function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function processarTexto(acao) {
    var texto = document.getElementById('texto').value;
    var resultado;

    if (texto.trim() === '') {

        var containerCenter = document.querySelector('.container-center');
        containerCenter.style.display = 'flex';

        var containerTextOn = document.querySelector('.container-text-on');
        containerTextOn.style.display = 'none';
        return;
    }

    if (isCriptografado(texto)) {
        resultado = descriptografar(texto);
    } else {
        resultado = criptografar(texto);
    }

    var containerTextOn = document.querySelector('.container-text-on');
    containerTextOn.style.display = 'flex'; 

    var paragrafoResultado = document.querySelector('.container-text-on p');
    paragrafoResultado.textContent = resultado;


    var containerCenter = document.querySelector('.container-center');
    containerCenter.style.display = 'none';
}

function copiarTexto() {
    var paragrafoResultado = document.querySelector('.container-text-on p');
    var texto = paragrafoResultado.textContent;


    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = texto;
    document.body.appendChild(tempTextArea);


    tempTextArea.select();
    document.execCommand('copy');


    document.body.removeChild(tempTextArea);


    alert('Texto copiado para a área de transferência.');
}


var btnCopy = document.querySelector('.btn-copy');
btnCopy.addEventListener('click', copiarTexto);
