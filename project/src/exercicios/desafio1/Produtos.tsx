import { IProduto } from "./IDesafio1"
import Produto from "./Produto";
import Titulo from "./Titulo";

const produtos: IProduto[] = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = (): JSX.Element => {
    return (
        <section>
            <Titulo titulo="Produto" />
            {produtos.map(produto => {
                return (
                    <Produto key={produto.nome} {...produto} />
                )
            })}
        </section>
    )
}

export default Produtos
