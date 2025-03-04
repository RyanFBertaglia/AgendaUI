export class ControleAgendados {
    constructor(alteraHorario, cancelarHorario, buscaRealizados) {
        this.alteraHorario = alteraHorario;
        this.cancelaHorario = cancelarHorario;
        this.buscaRealizados = buscaRealizados;
    }
    alterarHorario(antigo, novo) {
        return this.alteraHorario.alterarHorario(antigo, novo);
    }
    cancelarHorario(diaCancelado) {
        return this.cancelaHorario.cancelarHorario(diaCancelado);
    }
    buscarRealizados() {
        return this.buscaRealizados.buscarRealizados();
    }
}
