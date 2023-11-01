export interface ITitulo {
    titulo: string;
}

export interface IProduto {
    nome: string;
    propriedades: string[];
}

export interface IProdutos {
    produtos: IProduto[];
}
