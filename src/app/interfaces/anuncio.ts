export interface Anuncio{
    id: number;
    produto?: string;
    caixa: boolean;
    manual: boolean;
    preco: number;
    descricao: string;
    criadoEm?: Date;
    atualizadoEm?: Date;
    estadoConservacaoId: number;
    jogoId?: number;
    consoleId: number;
    jogoNome: string;
    conservacao: string;
    publico: boolean;
} 