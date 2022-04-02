'use strict';

let somaMussarela = 0;
let somaMista = 0;
let somaQueijo = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaQueijo = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

btnVendas.addEventListener('click', vendas, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

function vendas(e) {
    console.log("oi")
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
    } else if (document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2)
    } else if (document.getElementById('queijo').checked) {
        somaQueijo = somaQueijo + 1;
        vendaQueijo = vendaQueijo + 25.00;
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2)
    }
}
function estorno(e) {
    if (somaMussarela > 0 && document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2)
    } else if (somaMista > 0 && document.getElementById('mista').checked) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2)
    } else if (somaQueijo > 0 && document.getElementById('queijo').checked) {
        somaQueijo = somaQueijo - 1;
        vendaQueijo = vendaQueijo - 25.00;
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2)
    }
}

function planilha(e) {
    TableToExcel.convert(document.getElementById('table'));
}