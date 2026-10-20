const perguntas = [

    {
        pergunta: "Qual é uma das principais funções do solo na agricultura?",
        respostas: [
            "Produzir eletricidade",
            "Fornecer nutrientes para as plantas",
            "Produzir combustível",
            "Criar máquinas agrícolas"
        ],
        correta: 1,
        explicacao: "O solo fornece água, nutrientes e suporte para o crescimento das plantas.",
        icone: "🌱"
    },

    {
        pergunta: "Depois de preparar um solo adequado, qual é uma etapa importante para iniciar uma plantação?",
        respostas: [
            "Plantar as sementes",
            "Retirar toda a água do solo",
            "Cobrir as plantas com plástico",
            "Eliminar todos os insetos"
        ],
        correta: 0,
        explicacao: "Depois do preparo do solo, a semeadura é uma das etapas fundamentais para iniciar a produção.",
        icone: "🌾"
    },

    {
        pergunta: "Por que a irrigação é importante para muitas culturas agrícolas?",
        respostas: [
            "Para aumentar a quantidade de máquinas",
            "Para fornecer água às plantas quando necessário",
            "Para retirar nutrientes do solo",
            "Para impedir o crescimento das plantas"
        ],
        correta: 1,
        explicacao: "A irrigação fornece água às plantas quando a chuva não é suficiente.",
        icone: "💧"
    },

    {
        pergunta: "Qual prática ajuda a conservar a água na agricultura?",
        respostas: [
            "Irrigação sem controle",
            "Desperdício de água",
            "Gotejamento",
            "Retirar a cobertura do solo"
        ],
        correta: 2,
        explicacao: "A irrigação por gotejamento entrega água diretamente próxima às raízes, reduzindo desperdícios.",
        icone: "💦"
    },

    {
        pergunta: "Na pecuária, qual é um dos principais cuidados com o rebanho?",
        respostas: [
            "Deixar os animais sem água",
            "Fornecer alimentação e água adequadas",
            "Evitar qualquer acompanhamento",
            "Impedir os animais de se movimentarem"
        ],
        correta: 1,
        explicacao: "Alimentação, água, manejo e cuidados veterinários são fundamentais para o bem-estar do rebanho.",
        icone: "🐄"
    },

    {
        pergunta: "Qual é uma vantagem do manejo adequado das pastagens?",
        respostas: [
            "Aumentar a degradação do solo",
            "Reduzir a disponibilidade de alimento",
            "Melhorar o aproveitamento do pasto",
            "Eliminar a vegetação"
        ],
        correta: 2,
        explicacao: "O manejo adequado ajuda a conservar a pastagem e melhora sua utilização pelos animais.",
        icone: "🐂"
    },

    {
        pergunta: "Qual prática pode ajudar a diminuir a erosão do solo?",
        respostas: [
            "Manter cobertura vegetal",
            "Retirar toda a vegetação",
            "Deixar o solo sempre descoberto",
            "Aumentar o desmatamento"
        ],
        correta: 0,
        explicacao: "A cobertura vegetal protege o solo contra o impacto da chuva e ajuda a diminuir a erosão.",
        icone: "🌿"
    },

    {
        pergunta: "O que representa uma agricultura mais sustentável?",
        respostas: [
            "Usar recursos naturais sem planejamento",
            "Buscar produção com conservação dos recursos naturais",
            "Desperdiçar água",
            "Retirar toda a vegetação"
        ],
        correta: 1,
        explicacao: "A agricultura sustentável busca produzir alimentos preservando solo, água, biodiversidade e outros recursos.",
        icone: "🌎"
    },

    {
        pergunta: "Qual tecnologia pode ajudar o produtor a acompanhar uma lavoura?",
        respostas: [
            "Sensores e drones",
            "Ferramentas quebradas",
            "Equipamentos sem manutenção",
            "Nenhuma tecnologia"
        ],
        correta: 0,
        explicacao: "Sensores, drones e sistemas de agricultura de precisão podem ajudar no monitoramento das lavouras.",
        icone: "🚜"
    },

    {
        pergunta: "Qual é um dos principais objetivos da agricultura e da pecuária responsáveis?",
        respostas: [
            "Produzir sem cuidar do meio ambiente",
            "Desperdiçar recursos",
            "Produzir alimentos de forma eficiente e sustentável",
            "Eliminar áreas naturais"
        ],
        correta: 2,
        explicacao: "O objetivo é produzir alimentos e outros produtos de maneira eficiente, responsável e com conservação dos recursos.",
        icone: "🌎"
    }

];

let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const resultadoElemento = document.getElementById("resultado");
const proximaBotao = document.getElementById("proxima");
const numeroPergunta = document.getElementById("numeroPergunta");
const barraProgresso = document.getElementById("barraProgresso");
const icone = document.getElementById("icone");

function carregarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;
    icone.textContent = pergunta.icone;

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width = progresso + "%";

    resultadoElemento.textContent = "";

    proximaBotao.style.display = "none";

    respostasElemento.innerHTML = "";

    pergunta.respostas.forEach((resposta, index) => {

        const botao = document.createElement("button");

        botao.textContent = resposta;

        botao.onclick = () => responder(index);

        respostasElemento.appendChild(botao);
    });
}

function responder(indice) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes = respostasElemento.querySelectorAll("button");

    botoes.forEach((botao, index) => {

        botao.disabled = true;

        if (index === pergunta.correta) {
            botao.classList.add("certa");
        }

        if (index === indice && index !== pergunta.correta) {
            botao.classList.add("errada");
        }
    });

    if (indice === pergunta.correta) {

        pontos++;

        resultadoElemento.textContent =
            "✅ Resposta correta! " + pergunta.explicacao;

        resultadoElemento.style.color = "#34813b";

    } else {

        resultadoElemento.textContent =
            "❌ Resposta incorreta. " + pergunta.explicacao;

        resultadoElemento.style.color = "#c0392b";
    }

    proximaBotao.style.display = "block";

    if (perguntaAtual === perguntas.length - 1) {
        proximaBotao.textContent = "Ver resultado 🌾";
    }
}

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();
    }
}

function mostrarResultado() {

    const porcentagem =
        Math.round((pontos / perguntas.length) * 100);

    let mensagem;

    if (porcentagem >= 80) {
        mensagem = "🌟 Excelente! Você conhece muito sobre o campo!";
    } else if (porcentagem >= 50) {
        mensagem = "🌱 Muito bem! Você já possui bons conhecimentos.";
    } else {
        mensagem = "🚜 Continue estudando! O conhecimento no campo sempre pode crescer.";
    }

    document.querySelector(".quiz-container").innerHTML = `

        <div class="icone">🏆</div>

        <h1>Quiz concluído!</h1>

        <h2>Você acertou ${pontos} de ${perguntas.length} perguntas.</h2>

        <p style="font-size: 22px; margin: 20px;">
            ${porcentagem}% de aproveitamento
        </p>

        <p style="margin-bottom: 25px;">
            ${mensagem}
        </p>

        <button
            class="proxima"
            style="display:block"
            onclick="reiniciarQuiz()">
            Jogar novamente 🔄
        </button>
    `;
}

function reiniciarQuiz() {

    perguntaAtual = 0;
    pontos = 0;

    document.querySelector(".quiz-container").innerHTML = `

        <div class="progresso">
            <span id="numeroPergunta">Pergunta 1</span>

            <div class="barra">
                <div id="barraProgresso"></div>
            </div>
        </div>

        <div class="icone" id="icone">🌱</div>

        <h1 id="pergunta"></h1>

        <div id="respostas" class="respostas"></div>

        <div id="resultado" class="resultado"></div>

        <button
            id="proxima"
            class="proxima"
            onclick="proximaPergunta()">
            Próxima pergunta →
        </button>
    `;

    atualizarElementos();

    carregarPergunta();
}

function atualizarElementos() {

    window.perguntaElemento =
        document.getElementById("pergunta");

    window.respostasElemento =
        document.getElementById("respostas");

    window.resultadoElemento =
        document.getElementById("resultado");

    window.proximaBotao =
        document.getElementById("proxima");

    window.numeroPergunta =
        document.getElementById("numeroPergunta");

    window.barraProgresso =
        document.getElementById("barraProgresso");

    window.icone =
        document.getElementById("icone");
}

carregarPergunta();
