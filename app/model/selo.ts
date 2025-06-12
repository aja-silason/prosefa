
export type fiscalStamp = {
    codigo: string,
    produto: string,
    fabricante: string,
    data_emissao: string,
    status: 'válido' | 'cancelado' | 'expirado' | string
}
