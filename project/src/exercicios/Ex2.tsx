import Apresentacao from "../componentes/apresentacao/Apresentacao";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

const Ex2 = () => {
    const dados = produtos.filter(produto => Number(produto.preco.replace("R$ ", "")) > 1500)
    return (
        <>
            <Apresentacao titulo="Exercicio 2">
                <section>
                    {
                        dados.map(({ nome, preco, cores }) => {
                            return (
                                <div key={nome}>
                                    <h2>{nome}</h2>
                                    <p>Preço: {preco}</p>
                                    <ul>
                                        {cores.map(cor =>
                                            <li style={{ background: cor, color: "white" }} key={cor}>{cor}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </section>
            </Apresentacao>
        </>
    );
};

export default Ex2;