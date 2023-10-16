export interface ResumoCompra {
    id: number;
    comprovantePagamento: any;
    codigoRastreio: any;
    status: string;
    criadoEm: string;
    atualizadoEm: string;
    enderecoCompraId: number;
    anuncioId: number;
    itemNome: string;
    caixa: boolean;
    manual: boolean;
    preco: number;
    foto: string;
    anunciante: string;
    comprador?: string;
}