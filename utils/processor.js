import { log } from "./logger.js";

export function processarPedido(cliente, valor) {
    const mensagem = `Pedido de ${cliente} no valor de R$ ${valor.toFixed(2)} foi processado!`;
    log(mensagem);
    document.getElementById('resultado').innerText = mensagem;

    const confirmar = () => {
        log(`Confirmação enviada para ${cliente}.`);
    };
    confirmar();
}