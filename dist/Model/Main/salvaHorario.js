export class salvaHorario {
    async salvarHorario(dados) {
        try {
            const response = await fetch("http://localhost:8080/marcar", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            });
            if (response.ok == true) {
                return true;
            }
            return false;
        }
        catch (error) {
            alert("Erro ao buscar os horários");
            console.log(error);
            return false;
        }
    }
}
