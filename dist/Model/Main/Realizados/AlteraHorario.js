export class AlteraHorario {
    async alterarHorario(antigo, novo) {
        const dados = this.serializacao(antigo, novo);
        try {
            const response = await fetch("http://localhost:8080/atualizarHorario", {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            });
            if (response.ok == true) {
                return true;
            }
            return false;
        }
        catch (error) {
            alert(error);
            console.log(error);
            return false;
        }
    }
    serializacao(antigo, novo) {
        return {
            anterior: {
                dia: antigo.dia,
                hora: antigo.hora
            },
            atual: {
                dia: novo.dia,
                hora: novo.hora
            }
        };
    }
}
//Primeiro adiciona o novo horario e depois remove o antigo
//Remove o novo se não consegue adicionar
