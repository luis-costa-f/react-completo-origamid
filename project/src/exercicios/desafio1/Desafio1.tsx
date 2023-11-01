import Apresentacao from "../../componentes/apresentacao/Apresentacao"
import Home from "./Home";
import Produtos from "./Produtos";
import Header from "./Header";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Desafio1 = () => {
    let Componente;
    const { pathname } = window.location

    if (pathname === '/produtos') Componente = Produtos
    else Componente = Home

    return (
        <div>
            <Apresentacao titulo="Desafio 1">
                <Header />
                <Componente />
            </Apresentacao>
        </div >
    )
}

export default Desafio1
