export interface Anuncio{
    id: number;
    produto?: string;
    caixa: boolean;
    manual: boolean;
    preco: number;
    descricao: string;
    criadoEm?: string;
    atualizadoEm?: string;
    estadoConservacaoId: number;
    jogoId?: number;
    consoleId: number;
    jogoNome: string;
    conservacao: string;
    publico: boolean;
    anunciante: string;
    imagens: Array<any>;
    foto?: string;
    precoMinimo?: number;
    precoMedio?: number;
    precoMaximo?: number;
} 