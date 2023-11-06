import Apresentacao from "../../componentes/apresentacao/Apresentacao";
import { IProduto } from "./IProduto";
import { useState } from "react";
import Produto from "./Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Desafio2 = () => {
    const [produto, setProduto] = useState<IProduto>()
    const [loading, setLoading] = useState<boolean>(true)

    const handleClick = async (url: string): Promise<void> => {
        setLoading(true)

        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);
        const item = await response.json();
        setProduto(item);

        setLoading(false)
    }

    return (
        <div>
            <Apresentacao titulo="Desafio 2 UseState">
                <button style={{ marginLeft: "5rem" }} onClick={() => handleClick("notebook")}>notebook</button>
                <button style={{ marginLeft: "5rem" }} onClick={() => handleClick("smartphone")}>smartphone</button>
                <button style={{ marginLeft: "5rem" }} onClick={() => handleClick("tablet")}>tablet</button>

                {loading && !produto ? <span>Loading</span> : <Produto key={produto?.nome} fotos={produto?.fotos || []} nome={produto?.nome || ""} preco={produto?.preco || ""} />}
            </Apresentacao>
        </div>
    );
};

export default Desafio2;
