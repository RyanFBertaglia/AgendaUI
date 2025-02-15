export class horariosIndisponiveis {
    async listaHorarios(dia) {
        try {
            const response = await fetch(`http://localhost:8080/buscahorarios?data=${dia}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const dados = await response.json();
            let dado = this.limpaData(dados);
            return dado;
        }
        catch (error) {
            alert("Erro ao buscar os horários");
            console.log(error);
        }
    }
    limpaData(dados) {
        var retorno = [];
        dados.map((linha) => {
            let temporaria = linha.hora;
            retorno.push(temporaria);
        });
        return retorno;
    }
}
