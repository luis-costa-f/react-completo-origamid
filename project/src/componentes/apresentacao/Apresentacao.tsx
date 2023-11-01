import { IApresentacao } from "./IApresentacao"

const Apresentacao = ({ titulo, children }: IApresentacao) => {
    return (
        <div>
            <hr />
            <h1>{titulo}</h1>
            {children}
            <hr />
        </div>
    )
}

export default Apresentacao