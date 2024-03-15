function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let min = parseInt(document.getElementById('de').value);
    let max = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero; 

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatório(min, max);
        sorteados.push(numero);
    }
    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`     
}

function obterNumeroAleatório(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}