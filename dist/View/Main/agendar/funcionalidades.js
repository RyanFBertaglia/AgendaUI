import {agendamento} from "../../../Controller/agendamento.js";
import { horariosIndisponiveis } from "../../../Model/Main/horariosIndisponiveis.js";
import { salvaHorario } from "../../../Model/Main/salvaHorario.js";

const toggleButton = document.getElementById("diaEscolhido");
const container = document.getElementById("espaçoContainer");
const conteudoExtra = document.getElementById("espaçoHorarios");
const listaHorarios = new horariosIndisponiveis();
const salvarHorario = new salvaHorario()
const agendamentoInstance = new agendamento(listaHorarios, salvarHorario, null);
var dia = "";
let horario = "";

const paginaPrincipal = document.getElementById("botaoDeCima");
const paginaLogin = document.getElementById("botaoDeBaixo");

paginaPrincipal.addEventListener("click", ()=>{
    window.location.href = "/View/Main/reagendar";
});
paginaLogin.addEventListener("click", ()=>{
    window.location.href = "/View/Auth/Login"
})


toggleButton.addEventListener("click", async () => {
    dia = document.getElementById('DD').value;
    await filtraHoras(dia);
    if (conteudoExtra.style.display === "none" || !conteudoExtra.style.display) {
        conteudoExtra.style.display = "block";
        container.classList.add("show-grid");
    } else {
        conteudoExtra.style.display = "none";
        container.classList.remove("show-grid");
    }
});

async function filtraHoras(dia){
    const NaoDisponiveis = await agendamentoInstance.buscaHorarios(dia);
    const cells = document.querySelectorAll("td");
    cells.forEach(cell => {
     if (NaoDisponiveis.includes(cell.dataset.horario)) {
            cell.classList.add("naoPode");
         cell.dataset.usavel = "false";
     } else {
         cell.dataset.usavel = "true";
       }

      cell.addEventListener("click", () => {
         cells.forEach(c => c.classList.remove("selecionado"));
            if (cell.dataset.usavel === "true") {
                cell.classList.add("selecionado");
                horario = cell.dataset.horario;
            }
    });
});
}
const botao = document.getElementById("envia");
botao.addEventListener("click", () => {
    console.log(dia);
    console.log(horario);
    const data = formatarData(dia);

    let novoHtmlConfirmação = `
    <h1>Dia: ${data}</h1>
    <h1>Horário: ${horario}</h1>
    <button class="botaozinho" id="confirmarButton">Confirmar</button>
    <button class="botaozinho" id="cancelarButton">Cancelar</button>`;
    
    var confirmacao = document.getElementById("elementoConfirmação");
    var embaçaTela = document.getElementById("elementoBlur").style.filter = "blur(4px)";
    
    conteudoExtra.style.display = "none";
    confirmacao.style.display = "block";
    confirmacao.innerHTML = novoHtmlConfirmação;

    const confirmarButton = document.getElementById("confirmarButton");
    const cancelarButton = document.getElementById("cancelarButton");

    if (confirmarButton) {
        confirmarButton.addEventListener("click", confirmar);
    } else {
        console.error("Botão 'Confirmar' não encontrado");
    }

    if (cancelarButton) {
        cancelarButton.addEventListener("click", cancelar);
    } else {
        console.error("Botão 'Cancelar' não encontrado");
    }
});

async function confirmar() {
    const result = await agendamentoInstance.salvaHorario(dia, horario);
    let textoAgradecimento = `
    <h1>Obrigado</h1>
    <button class="botaozinho" id="FecharAgradecimento">Fechar</button>`;
    
    var confirmacao = document.getElementById("elementoConfirmação");

    confirmacao.innerHTML = textoAgradecimento;
    const fechar = document.getElementById("FecharAgradecimento")
    fechar.addEventListener("click", cancelar);
}

function cancelar() {
    var embaçaTela = document.getElementById("elementoBlur");
    embaçaTela.style.filter = "";
    var confirmacao = document.getElementById("elementoConfirmação");
    confirmacao.style.display = "none";
}

function formatarData(data) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR').replace(/\//g, '-');
}