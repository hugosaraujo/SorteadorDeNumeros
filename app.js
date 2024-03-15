
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let min = parseInt(document.getElementById('de').value);
    let max = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero; 

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatório(min, max);
        if(sorteados.includes(numero)){
            i--;
            numero = obterNumeroAleatório(min, max);            
        } else {
            sorteados.push(numero);
        }   
    }
    
    let mensagem = document.getElementById('resultado')
    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao();     
}

function obterNumeroAleatório(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');
    
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    
    }
}


function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
