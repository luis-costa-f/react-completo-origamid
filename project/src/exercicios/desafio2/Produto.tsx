import { IProduto } from "./IProduto"

const Produto = (produto: IProduto): JSX.Element => {
    return (
        <div>
            <h1>{produto.nome}</h1>
            <p>R$ {produto.preco}</p>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </div>
    )
}

export default Produto
