import { IProduto } from "./IDesafio1"

const Produto = (produto: IProduto) => {
    const { nome, propriedades } = produto
    return (
        <div>
            <div style={{ border: "1px solid", padding: "1rem", margin: '1rem 0' }}>
                <p>{nome}</p>
                <ul>
                    {propriedades.map(propriedade => {
                        return <li key={propriedade}>{propriedade}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Produto
