import { calculadorTotal } from "./utils/calculadora.js";
import { aplicarDesconto } from "./utils/discount.js";
import { log } from "./utils/logger.js";
import { processarPedido } from "./utils/processor.js";

const form = document.getElementById('pedidoForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cliente = document.getElementById('cliente').value;
    const produtosSelecionado = [...document.querySelectorAll('input[name="produto"]:checked')];
    const itens = produtosSelecionado.map(input => ({
        nome: 'Produto',
        preco: Number(input.value)
    }));

    if (itens.length === 0) {
        alert('Selecione ao menos um produto!');
        return;
    }

    const totalComTaxa = calculadorTotal(itens, preco => preco * 1.1);
    log(`total com taxa: R$ ${totalComTaxa.toFixed(2)}`);

    const totalFinal = aplicarDesconto(totalComTaxa);
    const desconto = totalComTaxa - totalFinal;
    log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
    log(`Valor final: R$ ${totalFinal.toFixed(2)}`);

    processarPedido(cliente, totalFinal);
    form.reset();
});

