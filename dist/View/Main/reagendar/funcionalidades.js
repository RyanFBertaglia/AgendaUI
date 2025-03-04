import {ControleAgendados} from "../../../Controller/ControleAgendados";

document.addEventListener("DOMContentLoaded", adicionarElementos(6));

const controleAgendados = new ControleAgendados;




function adicionarElementos(qtd) {
    const container = document.getElementById("container");
    container.innerHTML = ""; 


    const content = document.createElement("div");
    content.innerHTML = `<br> <br> <br>`
    container.appendChild(content);

    for (let i = 1; i <= qtd; i++) {
        const content = document.createElement("div");
        content.classList.add("celula");

        content.innerHTML = `
            <h5>Dia: 10/21/2121</h5>
            <h5>Hora: 12:00</h5>
            <button class="modificar" name="Desmarcar">Desmarcar</button>
            <button class="modificar" name="Remarcar">Remarcar</button>
        `;

        container.appendChild(content);
    }
}