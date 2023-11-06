export interface IFoto {
    src: string;
    titulo: string;
}

export interface IProduto {
    fotos: IFoto[];
    nome: string;
    preco: string;
}