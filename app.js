alert ("Seja bem-vindo ao sorteador de números!");

let numerosSorteados = [];


function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let deTal = parseInt(document.getElementById("de").value);
    let ateTal = parseInt(document.getElementById("ate").value);

     if(deTal >= ateTal){
        alert("O valor 'De' deve ser menor que o valor 'Até'. Por favor, corrija os valores.");
        return;
    }

   
    let totalPossibilidades = ateTal - deTal +1 ;
    if(quantidade + numerosSorteados.length > totalPossibilidades){
        alert("Não há números suficientes disponíveis para sortear a quantidade solicitada.");
        return;
    }

    for(let i = 0; i < quantidade; i++){
        let numero = gerarNumeroAleatorio(deTal, ateTal);
        
        while (numerosSorteados.includes(numero)){
            numero =gerarNumeroAleatorio(deTal, ateTal);

        }
        numerosSorteados.push(numero);
        
    }
          
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(", ")}</label>`;
        alterarStatusBotao();
    }   
    
    

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min +1) + min);

}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
        
    }


}

function limparResultado(){
    numerosSorteados = [];
    document.getElementById("quantidade").value = "";   
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    
    alterarStatusBotao();
}
