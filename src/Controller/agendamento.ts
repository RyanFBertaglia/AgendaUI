import {horariosIndisponiveis} from '../Model/Main/horariosIndisponiveis'
import {salvaHorario} from '../Model/Main/salvaHorario'
import { Dados } from '../Model/Main/Dados';

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
    async salvaHorario(dia:string, hora:string){
        const dados:Dados = {
            "dia": dia, "hora": hora
        };
        const result = await this.salvaHoraio.salvarHorario(dados);
        if(result){
            alert("Horario salvo");
        }else{
            alert("Erro ao salvar o horário")
        }
    }
    
    //salvaHorario()
}