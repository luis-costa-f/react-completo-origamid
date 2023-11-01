// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import { useState } from "react";
import Apresentacao from "../componentes/apresentacao/Apresentacao";

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const Ex1 = () => {
    const [dados, setDados] = useState(luana);
    const trocaCliente = () => {
        setDados(dados.cliente === "Luana" ? mario : luana)
    }

    const style = {
        color: dados.ativa ? "green" : "red"
    }
    const total = dados.compras
        .map(item => parseFloat(item.preco.replace("R$ ", ""))).
        reduce((a, b) => a + b)

    return (
        <>
            <Apresentacao titulo="Exercicio 1">
                <button onClick={trocaCliente}>Troca Cliente</button>
                <p>Nome: {dados.cliente}</p>
                <p>Idade: {dados.idade}</p>
                <p>Situação: <span style={style}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
                <p>Total Gasto: R$ {total}</p>
                {total > 10000 && <p>Você esta gastando muito!</p>}
            </Apresentacao>

        </>
    );
};

export default Ex1;

