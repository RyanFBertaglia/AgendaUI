export class agendamento {
    constructor(horariosIndisponiveis, salvaHorario) {
        this.horariosIndisponiveis = horariosIndisponiveis;
        this.salvaHoraio = salvaHorario;
    }
    buscaHorarios(dia) {
        return this.horariosIndisponiveis.listaHorarios(dia);
    }
    async salvaHorario(dia, hora) {
        const dados = {
            "dia": dia, "hora": hora
        };
        const result = await this.salvaHoraio.salvarHorario(dados);
        if (result) {
            alert("Horario salvo");
        }
        else {
            alert("Erro ao salvar o horário");
        }
    }
}
