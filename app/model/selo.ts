export type fiscalStampStatus = 'válido' | 'cancelado' | 'expirado';

export type fiscalStamp = {
    codigo: string,
    produto: string,
    fabricante: string,
    data_emissao: string,
    status: fiscalStampStatus
}
