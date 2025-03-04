export class ControleAgendados {
    constructor(alteraHorario, cancelarHorario, buscaRealizados) {
        this.alteraHorario = alteraHorario;
        this.cancelaHorario = cancelarHorario;
        this.buscaRealizados = buscaRealizados;
    }
    alterarHorario(antigo, novo) {
        return this.alteraHorario.alterarHorario(antigo, novo);
    }
    async cancelarHorario(diaCancelado) {
        const result = await this.cancelaHorario.cancelarHorario(diaCancelado);
        if (result) {
            alert("Horário Removido");
            window.location.reload();
        }
        else {
            alert("Tente novamente mais tarde");
        }
    }
    buscarRealizados() {
        return this.buscaRealizados.buscarRealizados();
    }
}
