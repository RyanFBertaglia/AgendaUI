import { Dados } from '../Model/Main/Dados';
import {AlteraHorario} from '../Model/Main/Realizados/AlteraHorario'
import {CancelaHorario} from '../Model/Main/Realizados/CancelaHorario'
import {BuscaRealizados} from '../Model/Main/Realizados/BuscaRealizados'

export class ControleAgendados {
    private alteraHorario: AlteraHorario;
    private cancelaHorario: CancelaHorario;
    private buscaRealizados: BuscaRealizados;
    
    constructor(alteraHorario: AlteraHorario, cancelarHorario: CancelaHorario, buscaRealizados: BuscaRealizados){
        this.alteraHorario = alteraHorario;
        this.cancelaHorario = cancelarHorario;
        this.buscaRealizados = buscaRealizados;
    }

    alterarHorario(antigo:Dados, novo:Dados){
        return this.alteraHorario.alterarHorario(antigo, novo);
    }

    async cancelarHorario(diaCancelado:Dados){
        const result = await this.cancelaHorario.cancelarHorario(diaCancelado);
        if(result){
            alert("Horário Removido");
            window.location.reload();
        }else{
            alert("Tente novamente mais tarde");
        }
    }

    buscarRealizados(){
        return this.buscaRealizados.buscarRealizados();
    }
}