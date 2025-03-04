import { Dados } from "../Dados";

export class BuscaRealizados {
    async buscarRealizados(): Promise<Dados> {
        try {
            const response = await fetch("http://localhost:8080/buscamarcados", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const dados: Dados = await response.json();
            return dados;

        } catch (error) {
            alert(error);
            console.error("Erro na requisição:", error);
            throw error;
        }
    }
}