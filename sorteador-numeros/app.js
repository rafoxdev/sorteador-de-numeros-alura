function sortear() {
   let quantidade = document.getElementById('quantidade').value; 
   let de = parseInt(document.getElementById('de').value);
   let ate = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   for(let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate); // Pega a quantidade de vezes escolhidas pelo usuário.
   

      while (sorteados.includes(numero)) { // Equanto a lista tiver um número repetido, o while vai gerar um novo número até que deixe de se repetir.
         numero = obterNumeroAleatorio(de, ate);
      }
      sorteados.push(numero); // Com a quantidade já escolhida, guarda esses valores dentro da lista sorteados (Array);
   }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
   alterarStatusBotaoReiniciar();

}

function obterNumeroAleatorio(min, max) { // Função com o objetivo de gerar os números, com parâmetros que definem entre o minímo e o máximo.
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
   let botao = document.getElementById('btn-reiniciar');
   if(botao.classList.contains('container__botao-desabilitado')) {
         botao.classList.remove('container__botao-desabilitado');
         botao.classList.add('container__botao');
   } else {
         botao.classList.remove('container__botao');
         botao.classList.add('container__botao-desabilitado');
   }
}

function reiniciar() { // Função que ao clicar no botão reiniciar, limpa o conteúdo inserido anteriormente pelo usuário trazendo um campo vazio, devido ao uso das '' vazias.
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
   alterarStatusBotaoReiniciar();

}
















/**
 * OBSERVAÇÕES DE ESTUDO:
 * 
 * .getElementById: É utilizado para acessar e manipular elementos a partir do seu atributo ID.
 * 
 * .value: O uso dessa notação é para quando queremos recuperar um valor que é recebido em um campo de texto.
 * 
 * parseInt: Define que o tipo de dado recebido pela variável deve ser somente do tipo Inteiro.
 * 
 * .innerHTML: Seu uso é para quando precisa-se manipular o conteúdo HTML interno do elemento.
 * 
 * .textContent: Usado quando precisamos inserir ou modificar um texto simples dentro de um elemento HTML. 
 */
