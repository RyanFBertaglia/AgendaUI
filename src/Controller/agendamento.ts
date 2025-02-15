import {horariosIndisponiveis} from '../Model/Main/horariosIndisponiveis'
import {salvaHorario} from '../Model/Main/salvaHorario'

export class agendamento{
    private horariosIndisponiveis: horariosIndisponiveis;
    private salvaHoraio: salvaHorario;
    
    constructor(horariosIndisponiveis: horariosIndisponiveis, salvaHorario: salvaHorario){
        this.horariosIndisponiveis = horariosIndisponiveis;
        this.salvaHoraio = salvaHorario;
    }

    buscaHorarios(dia: string){
        return this.horariosIndisponiveis.listaHorarios(dia);
    }
    
    //salvaHorario()
}