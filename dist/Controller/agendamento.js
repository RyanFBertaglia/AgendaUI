export class agendamento {
    constructor(horariosIndisponiveis, salvaHorario) {
        this.horariosIndisponiveis = horariosIndisponiveis;
        this.salvaHoraio = salvaHorario;
    }
    buscaHorarios(dia) {
        return this.horariosIndisponiveis.listaHorarios(dia);
    }
}
