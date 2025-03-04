import { ControleAgendados } from "../../../Controller/ControleAgendados.js";
import {BuscaRealizados} from "../../../Model/Main/Realizados/BuscaRealizados.js";
import {CancelaHorario} from "../../../Model/Main/Realizados/CancelaHorario.js";
import {AlteraHorario} from "../../../Model/Main/Realizados/AlteraHorario.js";

document.addEventListener("DOMContentLoaded", () => adicionarElementos());
const loader = document.querySelector('.loader');
const paginaPrincipal = document.getElementById("botaoDeCima");
const paginaLogin = document.getElementById("botaoDeBaixo");

paginaPrincipal.addEventListener("click", ()=>{
    window.location.href = "/View/Main/agendar";
});
paginaLogin.addEventListener("click", ()=>{
    window.location.href = "/View/Auth/Login"
})

const alteraHorario = new AlteraHorario();
const buscaRealizados = new BuscaRealizados();
const cancelaHorario = new CancelaHorario();

const controleAgendados = new ControleAgendados(alteraHorario, cancelaHorario, buscaRealizados);
var qtd = 0;

async function adicionarElementos() {
    loader.style.display = 'block';
    const dados = await controleAgendados.buscarRealizados();
    renderizaElementos(dados);
}


function renderizaElementos(dados) {
    
    const container = document.getElementById("container");
    container.innerHTML = "";

    const espacoInicial = document.createElement("div");
    espacoInicial.innerHTML = `<br><br><br>`;
    container.appendChild(espacoInicial);

    dados.forEach((element, index)=>{
        const celula = document.createElement("div");
        celula.classList.add("celula");
        celula.dataset.id = `a${index+1}`;
        celula.innerHTML = `
            <h5>Dia: ${element.dia}</h5>
            <h5>Hora: ${element.hora}</h5>
            <button class="modificar" data-action="desmarcar">Desmarcar</button>
            <button class="modificar" data-action="remarcar">Remarcar</button>
        `;
        const buttons = celula.querySelectorAll('.modificar');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                const idCelula = celula.dataset.id;

                if (action === 'desmarcar') controleAgendados.cancelarHorario(selecionaDados(celula)); //console.log(selecionaDados(celula));
                if (action === 'remarcar') console.log(selecionaDados(celula));//controleAgendados.remarcarConsulta(idCelula);
            });
        });
        container.appendChild(celula);
    })
}

function selecionaDados(celula) {
    const dia = celula.querySelector("h5:nth-child(1)").textContent.split(": ")[1];
    const hora = celula.querySelector("h5:nth-child(2)").textContent.split(": ")[1];
    return { dia, hora };
}

function direcionaReagendamento(celula){
    sessionStorage.setItem(horario, JSON.stringify(selecionaDados(celula)));
    window.location.href = '/Main/reagendar';
}