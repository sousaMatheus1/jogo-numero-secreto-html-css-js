//PARA APARECER OS TITULOS E PARAGRAFOS INCIAIS DO JOGO
exibirMensagemNaTela()

//PARA APARECER OS TITULOS E PARAGRAFOS INICIAIS DO JOGO
function exibirMensagemNaTela() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//FAZ O TRABALHO DE IR ATE O HTML E MAQUIAR PARA APARECER TEXTOS QUE QUERO
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //PARA QUE, ATRAVES DO RESPONSIVEVOICE QUE FOI ADCIONADO NO HTML POSSA SER EXECUTADO E LER OS TEXTOS
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//GERAR NUMEROS ALETORIOS 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    
    //VERIFICA SE TODOS OS NUMEROS JA FORAM SORTEADOS, SE SIM, ELE ZERA A LISTA
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //VERIFICA SE EXISTE UM NUMERO ALEATORIO NA LISTA, SE SIM ELE MANDA CRIAR OUTRO
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    //SE O NUMERO NAO EXISTIR NA LISTA, ELE PEGA ELE E ADICIONA NA LISTA
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
        
    }
}

// BOTAO CHUTAR
function verificarChute() {
    //COLETA DO HTML A VARIAVEL INSERIDA NO CAMPO DO SITE
    let chute = document.querySelector('input').value;
    //CONFIRMA SE O CHUTE FOI IGUAL AO NUMERO SECRETO ESCOLHIDO
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    //DA A DICA SE O CHUTE FOI MAIOR OU MENOR QUE O NUMERO SECRETO
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

// LIMPAR A BARRA DE INPUT 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

// BOTAO NOVO JOGO
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}












