function ConverterDataHumana(dataTexto: string): Date {
    const textoLimpo = dataTexto.trim().toLowerCase();

    // 1. Tenta identificar o formato por extenso "mês de ano"
    if (textoLimpo.includes('de')) {
        const meses: { [key: string]: number } = {
        janeiro: 0, fevereiro: 1, março: 2, marco: 2, abril: 3, maio: 4, junho: 5,
        julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11
        };

        // Divide a string por "de" removendo espaços extras
        const partes = textoLimpo.split(/\s+de\s+/);
        
        if (partes.length === 2) {
        const nomeMes = partes[0];
        const ano = parseInt(partes[1], 10);
        
        if (meses[nomeMes] !== undefined && !isNaN(ano)) {
            // Retorna o dia 1 daquele mês e ano
            return new Date(ano, meses[nomeMes], 1);
        }
        }
    }

    // 2. Tenta identificar formatos numéricos como "DD/MM/AAAA" ou "DD-MM-AAAA"
    const formatoNumerico = textoLimpo.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
    if (formatoNumerico) {
        const dia = parseInt(formatoNumerico[1], 10);
        const mes = parseInt(formatoNumerico[2], 10) - 1; // Meses no JS começam em 0
        const ano = parseInt(formatoNumerico[3], 10);
        return new Date(ano, mes, dia);
    }

    // 3. Tenta a conversão nativa do JavaScript caso receba formato ISO (AAAA-MM-DD)
    const dataNativa = new Date(dataTexto);
    if (!isNaN(dataNativa.getTime())) {
        return dataNativa;
    }

    throw new Error(`Formato de data inválido ou não suportado: "${dataTexto}"`);
}

export function CalcularPorcentagemDecorrida(dataInicioHumana: string, dataFimHumana: string): number {
    const dataInicio = ConverterDataHumana(dataInicioHumana);
    const dataFim = ConverterDataHumana(dataFimHumana);

    const inicio = dataInicio.getTime();
    const fim = dataFim.getTime();
    const agora = new Date().getTime();

    // Evita divisão por zero se as datas forem iguais
    if (fim <= inicio) {
        return agora >= inicio ? 100 : 0;
    }

    // Caso o período ainda não tenha começado
    if (agora < inicio) {
        return 0;
    }

    const tempoTotal = fim - inicio;
    const tempoDecorrido = agora - inicio;
    
    const porcentagem = (tempoDecorrido / tempoTotal) * 100;

    // Garante o teto máximo de 100%
    return porcentagem > 100 ? 100 : Math.round(porcentagem);
}
