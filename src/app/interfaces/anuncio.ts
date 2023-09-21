export interface Anuncio{
    id: number;
    caixa: boolean;
    manual: boolean;
    preco: number;
    descricao: string;
    criadoEm: Date;
    atualizadoEm: Date;
    estadoConservacaoId: number;
    jogoId?: number;
    consoleId: number;
    jogoNome: string;
    conservacao: string;
} 