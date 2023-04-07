var itens = []
var precos = []
var saldo = 0
var carrinho = window.document.querySelector('select#compras')
var total = window.document.querySelector('div#total')
var valor_carteira = window.document.getElementsByTagName('span')[0]
var valor_gasto = window.document.getElementsByTagName('span')[1]
var txtValor = window.document.getElementById('txtValor')

txtValor.focus()

valor_carteira.innerHTML = `<strong>R$${saldo.toFixed(2)}</strong>` // Mostra o saldo da carteira (toFixed para 2 casas depois da ,)

// Soma ao saldo um valor definido no input (chamado em adicionarSaldo)
function somarSaldo(valor) {
  saldo += valor
  return saldo
}

function adicionarSaldo() {
  somarSaldo(Number(txtValor.value))
  txtValor.value = ''
  valor_carteira.innerHTML = `<strong>R$${saldo.toFixed(2)}</strong>`
  window.alert('Saldo adicionado!')
}

// Executa a medida que se carrega a página
window.onload = function () {
  window.alert('Seja bem-vindo ao Restaurante do Malucão!')
}

// Muda a cor da fonte do objeto passado como parametro
function mudarCorFonte(objeto) {
  objeto.style.color = 'blue'
}

// Faz a mesma coisa que o mudarCorFonte, mas para a cor original
function voltarCorFonte(objeto) {
  objeto.style.color = 'white'
}

function mudarOpacidade(objeto) {
  objeto.style.opacity = '.3'
}

function voltarOpacidade(objeto) {
  objeto.style.opacity = '1'
}

// Adiciona o preço do item selecionado em um array (vetor) de preços
function adicionar(posicao) {
  var opcao = window.document.createElement('option') // Cria um objeto da tag option
  var item = window.document.getElementsByClassName('prato')[posicao]
  var preco = window.document.getElementsByClassName('preco')[posicao]

  opcao.innerText = `${item.innerText} - R$${preco.innerText}` // Adiciona no texto de option

  precos.push(Number(preco.innerText)) // Adiciona o texto do item como number dentro do array de preços

  carrinho.appendChild(opcao) // Mostra as opções no selection

  valor_gasto.innerHTML = `<strong>R$${somar(precos).toFixed(2)}</strong>`
}

// Percorre o array de preços passado como parâmetro, somando cada um de seus itens, e retorna essa soma no final
function somar(precos) {
  var soma = 0

  for (var i = 0; i < precos.length; i++) {
    soma += precos[i]
  }

  return soma
}

// Reduz do saldo o total pago, mostrando telas de alerta dependendo se o saldo estiver positivo ou não
function pagar() {
  if (saldo - somar(precos) >= 0) {
    saldo -= somar(precos)
    window.alert(
      `Seu saldo atual é de R$${saldo.toFixed(2)}! Obrigado, volte sempre!`
    )
  } else {
    window.alert(
      'Saldo insuficiente para pagar a conta! Por isso, deverá lavar pratos para pagar a dívida.'
    )
  }
  window.location = '' // Retorna à página novamente
}
