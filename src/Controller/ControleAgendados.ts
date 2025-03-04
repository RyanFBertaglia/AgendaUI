import { Dados } from '../Model/Main/Dados';
import {AlteraHorario} from '../Model/Main/Realizados/AlteraHorario'
import {CancelarHorario} from '../Model/Main/Realizados/CancelaHorario'
import {BuscaRealizados} from '../Model/Main/Realizados/BuscaRealizados'

export class ControleAgendados {
    private alteraHorario: AlteraHorario;
    private cancelaHorario: CancelarHorario;
    private buscaRealizados: BuscaRealizados;
    
    constructor(alteraHorario: AlteraHorario, cancelarHorario: CancelarHorario, buscaRealizados: BuscaRealizados){
        this.alteraHorario = alteraHorario;
        this.cancelaHorario = cancelarHorario;
        this.buscaRealizados = buscaRealizados;
    }

    alterarHorario(antigo:Dados, novo:Dados){
        return this.alteraHorario.alterarHorario(antigo, novo);
    }

    cancelarHorario(diaCancelado:Dados){
        return this.cancelaHorario.cancelarHorario(diaCancelado);
    }

    buscarRealizados(){
        return this.buscaRealizados.buscarRealizados();
    }
}