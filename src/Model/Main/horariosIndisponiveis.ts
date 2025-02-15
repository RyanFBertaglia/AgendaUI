import type { Dados } from "./Dados";

export class horariosIndisponiveis{
    async listaHorarios(dia: string){
        try {
            const response = await fetch(`http://localhost:8080/buscahorarios?data=${dia}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const dados: Dados[] = await response.json();
            let dado: Array<String> = this.limpaData(dados);
            return dado
        }catch (error) {
            alert("Erro ao buscar os horários");
            console.log(error);
        }
    }
        

    limpaData(dados: Dados[]){
        var retorno: Array<String> = [];
        dados.map((linha)=>{
            let temporaria = linha.hora;
            retorno.push(temporaria);
        })
        return retorno;
    }
}