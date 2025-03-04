import { Dados } from "../Dados";

export class CancelarHorario{
    async cancelarHorario(dados: Dados): Promise<boolean>{
            try {
                const response = await fetch("http://localhost:8080/cancelar", {
                    method: "Delete",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dados), 
                })
                if(response.ok == true){
                    return true;
                }
                return false;
            }catch (error) {
                alert("Erro ao buscar os horários");
                console.log(error);
                return false;
            }
        }
    }