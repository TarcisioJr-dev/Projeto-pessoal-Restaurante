let res = document.getElementById('conteudo-popup')
let popup = document.getElementById('pop-up')

document.querySelector('#cafemanha').addEventListener('click', function() {
  var menu1 = document.querySelector('.menu1')
  menu1.style.display = (menu1.style.display === 'block' ? 'none' : 'block')
})
document.querySelector('.fecha1').addEventListener('click', function() {
  var menu1 = document.querySelector('.menu1')
  menu1.style.display = 'none'
})

document.querySelector('#jantaalmo').addEventListener('click', function menu2() {
  var menu2 = document.querySelector('.menu2')
  menu2.style.display = (menu2.style.display === 'block' ? 'none' : 'block')
})
document.querySelector('.fecha2').addEventListener('click', function(){
  var menu2 = document.querySelector('.menu2')
  menu2.style.display = 'none'
})

document.querySelector('#bebidas').addEventListener('click', function menu3() {
  var menu3 = document.querySelector('.menu3')
  menu3.style.display = (menu3.style.display === 'block' ? 'none' : 'block')
})
document.querySelector('.fecha3').addEventListener('click', function(){
  var menu3 = document.querySelector('.menu3')
  menu3.style.display = 'none'
})

document.querySelector('#porcoes').addEventListener('click', function menu4() {
  var menu4 = document.querySelector('.menu4')
  menu4.style.display = (menu4.style.display === 'block' ? 'none' : 'block')
})
document.querySelector('.fecha4').addEventListener('click', function(){
  var menu4 = document.querySelector('.menu4')
  menu4.style.display = 'none'
})

var somatotal = 0
var troco = 0
var somatroco = 0
var cupomfinal = ''
var cupom = ''
var cont = 1
var compras = ''
let total = 0
let valorParcela = 0
let valorPago = 0

function somar(){
  popup.style.display = 'block'

  var cafepreto = document.getElementById('cafe_preto').value
  var cafeleite = document.getElementById('cafecleite').value
  var cafecreme = document.getElementById('cafeccreme').value
  var bolo = document.getElementById('bolochoc').value
  var pao = document.getElementById('paoqueijo').value
  var donut = document.getElementById('donuts').value
  var misto = document.getElementById('mistoquente').value

  var frango = document.getElementById('filefrango').value
  var peixe = document.getElementById('filepeixe').value
  var vaca = document.getElementById('bifevaca').value
  var porco = document.getElementById('carneporco').value

  var coca = document.getElementById('coca').value
  var guara = document.getElementById('guara').value
  var sprite = document.getElementById('sprite').value
  var laranja = document.getElementById('laranja').value
  var acerola = document.getElementById('acerola').value
  var skol = document.getElementById('skol').value
  var brahma = document.getElementById('brahma').value
  var heine = document.getElementById('heine').value
  var corona = document.getElementById('corona').value
  var vodka = document.getElementById('vodka').value
  var wisky = document.getElementById('wisky').value

  var fritas = document.getElementById('frita').value
  var fritasbac = document.getElementById('fritabacon').value
  var carneassada = document.getElementById('assada').value
  var espetinho = document.getElementById('espetinho').value
  var xtudo = document.getElementById('xtudo').value

  
  if((cafepreto==0)&&(cafeleite==0)&&(cafecreme==0)&&(bolo==0)&&(pao==0)&&(donut==0)&&(misto==0)&&(frango==0)&&(peixe==0)&&(vaca==0)&&(porco==0)&&(coca==0)&&(guara==0)&&(sprite==0)&&(laranja==0)&&(acerola==0)&&(skol==0)&&(brahma==0)&&(heine==0)&&(corona==0)&&(vodka==0)&&(wisky==0)&&(fritas==0)&&(fritasbac==0)&&(carneassada==0)&&(espetinho==0)&&(xtudo==0)){
    cupom = '<p class="titulo">Nenhuma compra foi realizada!</p><p class="titulo">Espero que na próxima encontre o que deseja!</p><p class="titulo" id="emoji">\u{1F601}</p>'
    cupom += '<button onclick="fechar()">Fechar</button>'
    res.innerHTML = cupom
  }else{
    compras = ''
    total = 0
    cupom = '<p class="titulo">A compra feita foi:</p>'
    if(cafepreto > 0){
      let precocafepreto = cafepreto * 2.99
      compras += `<br>${cafepreto} Café preto.....R$${precocafepreto.toFixed(2)}`
      total += precocafepreto
    }
    if(cafeleite > 0){
      let precocafeleite = cafeleite * 5.99
      compras += `<br>${cafeleite} Café com Leite.....R$${precocafeleite.toFixed(2)}`
      total += precocafeleite
    }
    if(cafecreme > 0){
      let precocafecreme = cafecreme * 8.99
      compras += `<br>${cafecreme} Café com Creme e Leite.....R$${precocafecreme.toFixed(2)}`
      total += precocafecreme
    }
    if(bolo > 0){
      let precobolo = bolo * 5.50
      compras += `<br>${bolo} Bolo de Chocolate.....R$${precobolo.toFixed(2)}`
      total += precobolo
    }
    if(pao > 0){
      let precopaoqueijo = pao * 3
      compras += `<br>${pao} Pão de Queijo.....R$${precopaoqueijo.toFixed(2)}`
      total += precopaoqueijo
    }
    if(donut > 0){
      let precodonuts = donut * 4.50
      compras += `<br>${donut} Donuts.....R$${precodonuts.toFixed(2)}`
      total += precodonuts
    }
    if(misto > 0){
      let precomistoquente = misto * 12
      compras += `<br>${misto} Misto Quente...R$${precomistoquente.toFixed(2)}`
      total += precomistoquente
    }
    if(frango > 0){
      let precofrango = frango * 25
      compras += `<br>${frango} Filé de Frango.....R$${precofrango.toFixed(2)}`
      total += precofrango
    }
    if(peixe > 0){
      let precopeixe = peixe * 28
      compras += `<br>${peixe} Filé de Peixe.....R$${precopeixe.toFixed(2)}`
      total += precopeixe
    }
    if(vaca > 0){
      let precovaca = vaca * 30
      compras += `<br>${vaca} Bife de Vaca.....R$${precovaca.toFixed(2)}`
      total += precovaca
    }
    if(porco > 0){
      let precoporco = porco * 30
      compras += `<br>${porco} Bife de Porco.....R$${precoporco.toFixed(2)}`
      total += precoporco
    }
    if(coca > 0){
      let precococa = coca * 9
      compras += `<br>${coca} Lata de Coca-Cola.....R$${precococa.toFixed(2)}`
      total += precococa
    }
    if(guara > 0){
      let precoguarana = guara * 9
      compras += `<br>${guara} Lata de Guaraná Antártica..R$${precoguarana.toFixed(2)}`
      total += precoguarana
    }
    if(sprite > 0){
      let precosprite = sprite * 8
      compras += `<br>${sprite} Lata de Sprite.....R$${precosprite.toFixed(2)}`
      total += precosprite
    }
    if(laranja > 0){
      let precolaranja = laranja * 16
      compras += `<br>${laranja} Jarra de Suco de Laranja.....R$${precolaranja.toFixed(2)}`
      total += precolaranja
    }
    if(acerola > 0){
      let precoacerola = acerola * 16
      compras += `<br>${acerola} Jarra de Suco de Acerola.....R$${precoacerola.toFixed(2)}`
      total += precoacerola
    }
    if(skol > 0){
      let precoskol = skol * 6
      compras += `<br>${skol} Lata de Cerveja Skol.....R$${precoskol.toFixed(2)}`
      total += precoskol
    }
    if(brahma > 0){
      let precobrahma = brahma * 6
      compras += `<br>${brahma} Lata de Cerveja Brahma.....R$${precobrahma.toFixed(2)}`
      total += precobrahma
    }
    if(heine > 0){
      let precoheineken = heine * 10
      compras += `<br>${heine} Longneck Heineken.....R$${precoheineken.toFixed(2)}`
      total += precoheineken
    }
    if(corona > 0){
      let precocorona = corona * 12
      compras += `<br>${corona} Longneck Corona.....R$${precocorona.toFixed(2)}`
      total += precocorona
    }
    if(vodka > 0){
      let precovodka = vodka * 3
      compras += `<br>${vodka} Dose de Vodka.....R$${precovodka.toFixed(2)}`
      total += precovodka
    }
    if(wisky > 0){
      let precowisky = wisky * 8
      compras += `<br>${wisky} Dose de Wisky.....R$${precowisky.toFixed(2)}`
      total += precowisky
    }
    if(fritas > 0){
      let precofrita = fritas * 25
      compras += `<br>${fritas} Batata Palito Frita.....R$${precofrita.toFixed(2)}`
      total += precofrita
    }
    if(fritasbac > 0){
      let precofritabacon = fritasbac * 32
      compras += `<br>${fritasbac} Batata Frita com Bacon.....R$${precofritabacon.toFixed(2)}`
      total += precofritabacon
    }
    if(carneassada > 0){
      let precoassada = carneassada * 40
      compras += `<br>${carneassada} Carne Assada.....R$${precoassada.toFixed(2)}`
      total += precoassada
    }
    if(espetinho > 0){
      let precoespetinho = espetinho * 32
      compras += `<br>${espetinho} Espetinho com Mandioca....R$${precoespetinho.toFixed(2)}`
      total += precoespetinho
    }
    if(xtudo > 0){
      let precoxtudo = xtudo * 26
      compras += `<br>${xtudo} Sanduiche.....R$${precoxtudo.toFixed(2)}`
      total += precoxtudo
    }
    cupomfinal = '<p class="titulo">As compras feitas foram:</p>'
    cupomfinal += compras
    cupomfinal += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}</p>`
    cupomfinal += '---------------------------------------'

    cupom += compras
    cupom += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}`
    somatotal = Number(total)
    cupom += `<br>Deseja finalizar a compra ou comprar mais?</p>`
    cupom += `<br>`
    cupom += '<p class="titulo"><button id="pagar" onclick="formaPagamento()">Pagar</button>   '
    cupom += '<button id="comprar" onclick="fechar()">Comprar</button></p>'
    res.innerHTML = cupom
    
    cupom = ''
    cupom += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}</p><br>`
  }
  
}

function finalizar(){
  popup.style.display = 'none'
  location.reload()
}

function fechar(){
  popup.style.display = 'none'
}

var c = 0
let restante
somatroco = 0
troco = 0
let vlrpago = 0

function pagar(){
  cupom += '<p class="titulo">Informe o valor para pagamento:</p>'
  cupom += '<p class="titulo">R$<input type="number" name="vlrpago" id="vlrpago" autofocus min="0">  '
  cupom += '<p class="titulo"><button id="procpagar" onclick="processarpagamento()">Pagar</button>'
  cupom += '  <button onclick="formaPagamento()">Voltar</button></p>'
  res.innerHTML = cupom
}

function formaPagamento(){
  cupom =`<p class="titulo">Escolha o Método Pagamento:</p>`
  cupom +='<div id="modoPagamento">'
  cupom +=`<input type="radio" name="modoPagamento" value="dinheiro" checked>`
  cupom +='<label for="dinheiro">Dinheiro</label>'
  cupom +=`<input type="radio" name="modoPagamento" value="pix">`
  cupom +='<label for="pix">PIX</label>'
  cupom +=`<input type="radio" name="modoPagamento" value="cartao">`
  cupom +='<label for="cartao">Cartão</label>'
  cupom +='</div>'
  cupom +=`<button onclick="redirecionar()">Continuar</button>`

  res.innerHTML = cupom
}

function redirecionar(){
  let modoPagamento = document.querySelector('input[name="modoPagamento"]:checked').value
  switch (modoPagamento){
    case 'dinheiro':
      cupom = ''
      cupom += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}</p><br>`
      pagar()
      break
    case 'pix':
      cupom = ''
      cupom += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}</p><br>`
      pix()
      break
    case 'cartao':
      cupom = ''
      cupom += `<p class="titulo">O valor total da compra foi R$${total.toFixed(2)}</p><br>`
      cadastrarCartao()
      break
  }
}

function pix(){
  cupom = `<p class="titulo">PIX:</p>`
  cupom += `<img src="./src/imagens/qr_code.avif" alt="qr-code">`
  cupom += `<p class="titulo">Insira o comprovante abaixo:</p>`
  cupom += `<p class="titulo"><input type="file" name="comprovantePix" id="comprovantePix" required></p>`
  cupom += `<p class="titulo">Insira seu telefone para confirmação pix</p>`
  cupom += `<p class="titulo"><input type="tel" name="telefonePix" id="telefonePix" required placeholder="(99) 9 9999-9999"></p>`
  cupom += `<p class="titulo"><button onclick="processarPagamentoPix()">Finalizar</button>`
  cupom += `  <button onclick="formaPagamento()">Voltar</button></p>`
  res.innerHTML = cupom
}

function processarPagamentoPix(){
  let comprovantePix = document.getElementById('comprovantePix').value
  let telefonePix = document.getElementById('telefonePix').value
  if(comprovantePix == '' || telefonePix == ''){
    alert('Preencha todos os campos para continuar!')
  }else{
    cupomfinal += '<hr>'
    cupomfinal += '<p class="titulo">+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p>'
    cupomfinal += `<p class="titulo">O valor total pago foi R$${somatotal.toFixed(2)}</p>`
    cupomfinal += `<p class="titulo">Pago com o PIX</p>`
    cupomfinal += `<p class="titulo">Obrigado por comprar conosco! \u{1F601}</p>`
    cupomfinal += '<hr>'
    cupomfinal += `<p class="titulo"><button onclick="finalizar()">Finalizar</button>`
    res.innerHTML = cupomfinal
  }
}


function cadastrarCartao(){
  
  cupom+='<input type="text" name="numeroCartao" id="numeroCartao" required placeholder="Número do Cartão">'
  cupom+='<input type="text" name="nomeCartao" id="nomeCartao" required placeholder="Nome do Titular"> '
  cupom+='<input type="text" name="validadeCartao" id="validadeCartao" required placeholder="Validade">'
  cupom+='<input type="text" name="cvvCartao" id="cvvCartao" required placeholder="CVV"></input>'
  
  let juro = 5
  let valorIntermediario = 0
  cupom+='<select name="parcelar" id="parcelar">'
  switch (Number(somatotal)){
    default:
      cupom+=`<option value="debito" selected>Débito</option>`
      cupom+=`<option value="1">1 parcela X ${somatotal.toFixed(2)} = ${somatotal.toFixed(2)}</option>`
      cupom+=`<option value="2">2 parcelas X ${(somatotal/2).toFixed(2)} = ${somatotal.toFixed(2)}</option>`
      cupom+=`<option value="3">3 parcelas X ${(somatotal/3).toFixed(2)} = ${somatotal.toFixed(2)}</option>`
      cupom+=`<option value="4">4 parcelas X ${(somatotal/4).toFixed(2)} = ${somatotal.toFixed(2)}</option>`
      cupom+=`<option value="5">5 parcelas X ${(somatotal/5).toFixed(2)} = ${somatotal.toFixed(2)}</option>`
      for(let cont = 6; cont <= 10; cont++){
        valorIntermediario = somatotal / cont
        valorPago = (valorIntermediario + (valorIntermediario / 100) * juro) * cont
        valorParcela = valorPago / cont
        cupom+=`<option value="${cont}">${cont} parcelas X ${valorParcela.toFixed(2)}<sub>+ ${juro}%</sub> = ${valorPago.toFixed(2)}</option>`
        juro += 5
      }
      break;
  }
  cupom+='</select>'
  cupom+='<p class="titulo"><button id="procpagar" onclick="processarPagamentoCartao()">Pagar</button>'
  cupom += `  <button onclick="formaPagamento()">Voltar</button></p>`
  res.innerHTML = cupom
  
}

function processarPagamentoCartao(){
  let numeroCartao = document.getElementById('numeroCartao').value
  let nomeCartao = document.getElementById('nomeCartao').value
  let validadeCartao = document.getElementById('validadeCartao').value
  let cvvCartao = document.getElementById('cvvCartao').value
  let parcelar = document.getElementById('parcelar').value

  if(nomeCartao == '' || numeroCartao == '' || validadeCartao == '' || cvvCartao == ''){
    alert('Preencha todos os campos para continuar!')
  }else{
    switch (parcelar){
      case 'debito':
        cupomfinal = ''
        cupomfinal += 'As compras feitas foram:'
        cupomfinal += compras
        cupomfinal += '<hr>'
        cupomfinal += '<p class="titulo">+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p>'
        cupomfinal += `<p class="titulo">O valor total pago foi R$${somatotal.toFixed(2)}</p>`
        cupomfinal += `<p class="titulo">Com o Cartão de Débito</p>`
        cupomfinal += `<p class="titulo">Obrigado por comprar conosco! \u{1F601}</p>`
        cupomfinal += '<hr>'
        cupomfinal += `<p class="titulo"><button onclick="finalizar()">Finalizar</button>`
        res.innerHTML = cupomfinal
        break
      default:
        valorPago = valorParcela * Number(parcelar)
        cupomfinal = ''
        cupomfinal += 'As compras feitas foram:'
        cupomfinal += compras
        cupomfinal += '<hr>'
        cupomfinal += '<p class="titulo">+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p>'
        cupomfinal += `<p class="titulo">O valor total pago foi R$${valorPago.toFixed(2)}</p>`
        cupomfinal += `<p class="titulo">Parcelado em ${parcelar} vezes</p>`
        cupomfinal += `<p class="titulo">O valor da parcela é R$${valorParcela.toFixed(2)}</p>`
        cupomfinal += `<p class="titulo">Obrigado por comprar conosco! \u{1F601}</p>`
        cupomfinal += '<hr>'
        cupomfinal += `<p class="titulo"><button onclick="finalizar()">Finalizar</button>`
        res.innerHTML = cupomfinal
    } 
  }
}

function processarpagamento(){
  c ++
  vlrpago = Number(document.getElementById('vlrpago').value)
  
  if(vlrpago == 0){
    alert('Insira um valor válido para continuar!')
  }else{
    somatroco += vlrpago
    restante = total - somatroco
    cupomfinal += `<br>O ${c}º pagamento foi de R$${vlrpago.toFixed(2)}`
    if(restante > 0){
      cupom = `<p class="titulo">O valor restante para pagamento é R$${restante.toFixed(2)}</p>`
      pagar()
    }else{
      cupomfinal += '<hr>'
      cupomfinal += '<p class="titulo">+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</p>'
      cupomfinal += `<p class="titulo">O valor total pago foi R$${somatroco.toFixed(2)}</p>`
      cupomfinal += `<p class="titulo">O seu troco é: R$${-restante.toFixed(2)}</p>`
      cupomfinal += '<p class="titulo">Obrigado por comprar conosco! \u{1F601}</p>'
      cupomfinal += '<hr>'
      cupomfinal += `<p class="titulo"><button onclick="finalizar()">Finalizar</button>`
      res.innerHTML = cupomfinal
    }
  }
}