document.addEventListener("DOMContentLoaded", function() {
    // --- Dados do Quiz (Perguntas e Respostas) ---
    const quizData = [
        {
            pergunta: "Qual elemento natural mais te atrai?",
            opcoes: [
                { texto: "Raios e o céu infinito", pontuacoes: { Zeus: 1 } },
                { texto: "Ondas e as profundezas do oceano", pontuacoes: { Poseidon: 1 } },
                { texto: "A terra fértil e as colheitas", pontuacoes: { Deméter: 1 } },
                { texto: "Fogo e forjas incandescentes", pontuacoes: { Hefesto: 1 } }
            ]
        },
        {
            pergunta: "Como você prefere resolver um desafio?",
            opcoes: [
                { texto: "Com sabedoria e estratégia, pensando antes de agir.", pontuacoes: { Atena: 1 } },
                { texto: "Com força e coragem, partindo para a ação direta.", pontuacoes: { Ares: 1 } },
                { texto: "Com carisma e persuasão, buscando a harmonia.", pontuacoes: { Afrodite: 1 } },
                { texto: "Com agilidade e inteligência, buscando o caminho mais rápido.", pontuacoes: { Hermes: 1 } }
            ]
        },
        {
            pergunta: "Qual é o seu maior prazer?",
            opcoes: [
                { texto: "Comandar e tomar grandes decisões.", pontuacoes: { Zeus: 1 } },
                { texto: "Criar beleza e inspirar o amor.", pontuacoes: { Afrodite: 1 } },
                { texto: "Desfrutar de festas e celebrações.", pontuacoes: { Dionísio: 1 } },
                { texto: "Explorar e caçar na natureza selvagem.", pontuacoes: { Ártemis: 1 } }
            ]
        },
        {
            pergunta: "Qual área do conhecimento mais te fascina?",
            opcoes: [
                { texto: "Filosofia e táticas de guerra.", pontuacoes: { Atena: 1 } },
                { texto: "Medicina, música e poesia.", pontuacoes: { Apolo: 1 } },
                { texto: "Mistérios antigos e magia oculta.", pontuacoes: { Hécate: 1 } },
                { texto: "Leis, justiça e a ordem do universo.", pontuacoes: { Temis: 1 } }
            ]
        },
        {
            pergunta: "Se você tivesse um império, onde ele estaria localizado?",
            opcoes: [
                { texto: "No topo das montanhas mais altas.", pontuacoes: { Zeus: 1 } },
                { texto: "No fundo dos oceanos mais profundos.", pontuacoes: { Poseidon: 1 } },
                { texto: "No submundo, controlando os espíritos.", pontuacoes: { Hades: 1 } },
                { texto: "Espalhado por terras férteis e cultivadas.", pontuacoes: { Deméter: 1 } }
            ]
        },
        {
            pergunta: "Qual é a sua principal motivação?",
            opcoes: [
                { texto: "Manter a ordem e a autoridade.", pontuacoes: { Zeus: 1 } },
                { texto: "Buscar a fama e a vitória a todo custo.", pontuacoes: { Ares: 1 } },
                { texto: "Inspirar a criatividade e a expressão artística.", pontuacoes: { Apolo: 1 } },
                { texto: "Proteger e nutrir aqueles que amo.", pontuacoes: { Hera: 1 } }
            ]
        },
        {
            pergunta: "Qual animal místico você escolheria como companheiro?",
            opcoes: [
                { texto: "Uma coruja sábia e observadora.", pontuacoes: { Atena: 1 } },
                { texto: "Um veado ágil da floresta.", pontuacoes: { Ártemis: 1 } },
                { texto: "Um cão de guarda leal (como Cérbero).", pontuacoes: { Hades: 1 } },
                { texto: "Uma criatura marinha poderosa.", pontuacoes: { Poseidon: 1 } }
            ]
        },
        {
            pergunta: "Qual seria seu hobby principal?",
            opcoes: [
                { texto: "Forjar armas ou joias elaboradas.", pontuacoes: { Hefesto: 1 } },
                { texto: "Realizar festas grandiosas e festivais.", pontuacoes: { Dionísio: 1 } },
                { texto: "Viagens rápidas e entregas importantes.", pontuacoes: { Hermes: 1 } },
                { texto: "Cuidar de jardins ou campos.", pontuacoes: { Deméter: 1 } }
            ]
        },
        {
            pergunta: "Qual sentimento você tem mais dificuldade em controlar?",
            opcoes: [
                { texto: "A raiva e o desejo de confrontação.", pontuacoes: { Ares: 1 } },
                { texto: "O ciúme e a possessividade.", pontuacoes: { Hera: 1 } },
                { texto: "A tristeza e o luto pelas perdas.", pontuacoes: { Deméter: 1 } },
                { texto: "A luxúria e a paixão avassaladora.", pontuacoes: { Afrodite: 1 } }
            ]
        },
        {
            pergunta: "Se você tivesse um poder mágico, qual seria?",
            opcoes: [
                { texto: "Controlar o clima e os céus.", pontuacoes: { Zeus: 1 } },
                { texto: "Influenciar a mente e a comunicação.", pontuacoes: { Hermes: 1 } },
                { texto: "Invocar e manipular forças ocultas.", pontuacoes: { Hécate: 1 } },
                { texto: "Causar desastres naturais e tremores.", pontuacoes: { Poseidon: 1 } }
            ]
        }
    ];

    // --- Mapeamento de Deuses para Caminhos de Imagens ---
    const imagensDeuses = {
        Zeus: '../assets/img/deuses/zeus.png',
        Poseidon: '../assets/img/deuses/poseidon.png',
        Hades: '../assets/img/deuses/hades.png',
        Hera: '../assets/img/deuses/hera.png',
        Atena: '../assets/img/deuses/atena.png',
        Apolo: '../assets/img/deuses/apolo.png',
        Ártemis: '../assets/img/deuses/artemis.png',
        Afrodite: '../assets/img/deuses/afrodite.png',
        Hermes: '../assets/img/deuses/hermes.png',
        Dionísio: '../assets/img/deuses/dionisio.png',
        Deméter: '../assets/img/deuses/demeter.png',
        Ares: '../assets/img/deuses/ares.png',
        Hefesto: '../assets/img/deuses/hefesto.png',
        Hécate: '../assets/img/deuses/hecate.png',
        Temis: '../assets/img/deuses/temis.png'
        // Adicione todos os deuses que você tem no seu quiz
    };


    // --- Elementos do DOM ---
    const introductionSection = document.getElementById("introduction");
    const startQuizButton = document.getElementById("startQuizButton");
    const quizSection = document.getElementById("quiz");
    const formularioQuiz = document.getElementById("formularioQuiz");
    const quizContainer = document.getElementById("quizContainer");
    const resultadoDiv = document.getElementById("resultado");
    const imagemDeus = document.getElementById("imagemDeus");
    const textoResultado = document.getElementById("textoResultado");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnProximo = document.getElementById("btnProximo");
    const btnFinalizar = document.getElementById("btnFinalizar");
    const quizNavigation = document.getElementById("quizNavigation"); // Corrigido: Variável declarada aqui!

    let currentQuestionIndex = 0;
    let pontuacoesDeuses = {
        Atena: 0, Ares: 0, Afrodite: 0, Zeus: 0, Poseidon: 0,
        Dionísio: 0, Apolo: 0, Hermes: 0, Hefesto: 0, Hera: 0,
        Deméter: 0, Ártemis: 0, Hades: 0, Hécate: 0, Temis: 0
    };
    let userSelections = {};

    // --- Funções de Controle de Visibilidade ---
    function mostrarIntroducao() {
        introductionSection.style.display = 'block';
        quizSection.style.display = 'none';
        resultadoDiv.style.display = 'none';
    }

    function mostrarQuiz() {
        introductionSection.style.display = 'none';
        quizSection.style.display = 'block';
        resultadoDiv.style.display = 'none';
        renderizarPergunta(); // Renderiza a primeira pergunta ao iniciar o quiz
    }

    function mostrarResultado() {
        introductionSection.style.display = 'none';
        quizSection.style.display = 'none';
        resultadoDiv.style.display = 'block';
    }

    // --- Funções do Quiz ---
    function renderizarPergunta() {
        quizContainer.innerHTML = '';

        const perguntaObj = quizData[currentQuestionIndex];
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta-quiz');

        const tituloPergunta = document.createElement('h3');
        tituloPergunta.textContent = `${currentQuestionIndex + 1}. ${perguntaObj.pergunta}`;
        perguntaDiv.appendChild(tituloPergunta);

        perguntaObj.opcoes.forEach((opcao, opcaoIndex) => {
            const label = document.createElement('label');
            label.classList.add('opcao-card');
            label.htmlFor = `p${currentQuestionIndex + 1}-opcao${opcaoIndex}`;

            const input = document.createElement('input');
            input.type = "radio";
            input.name = `p${currentQuestionIndex + 1}`;
            input.value = JSON.stringify(opcao.pontuacoes);
            input.id = `p${currentQuestionIndex + 1}-opcao${opcaoIndex}`;
            input.style.display = 'none'; // Oculta o radio button original

            const spanTexto = document.createElement('span');
            spanTexto.textContent = opcao.texto;

            label.appendChild(input);
            label.appendChild(spanTexto);

            label.addEventListener('click', () => {
                document.querySelectorAll(`[name="p${currentQuestionIndex + 1}"]`).forEach(radio => {
                    radio.parentElement.classList.remove('selected');
                });
                label.classList.add('selected');
                input.checked = true;
                userSelections[`p${currentQuestionIndex + 1}`] = input.value;
            });

            perguntaDiv.appendChild(label);
        });

        quizContainer.appendChild(perguntaDiv);

        // Restaura a seleção do usuário se já tiver respondido
        const savedValue = userSelections[`p${currentQuestionIndex + 1}`];
        if (savedValue) {
            const selectedInput = quizContainer.querySelector(`input[value="${savedValue}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
                selectedInput.parentElement.classList.add('selected');
            }
        }

        atualizarBotoesNavegacao();
    }

    function atualizarBotoesNavegacao() {
        btnAnterior.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        btnProximo.style.display = currentQuestionIndex === quizData.length - 1 ? 'none' : 'inline-block';
        btnFinalizar.style.display = currentQuestionIndex === quizData.length - 1 ? 'inline-block' : 'none';
    }

    // --- Event Listeners dos Botões de Navegação ---
    startQuizButton.addEventListener('click', mostrarQuiz); // Inicia o quiz ao clicar no botão da introdução

    btnProximo.addEventListener('click', () => {
        const selectedOption = document.querySelector(`input[name="p${currentQuestionIndex + 1}"]:checked`);
        if (!selectedOption) {
            alert("Por favor, selecione uma opção antes de avançar!");
            return;
        }

        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            renderizarPergunta();
        }
    });

    btnAnterior.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderizarPergunta();
        }
    });

    // --- Lógica de Cálculo do Resultado Final ---
    formularioQuiz.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const selectedOption = document.querySelector(`input[name="p${currentQuestionIndex + 1}"]:checked`);
        if (!selectedOption) {
            alert("Por favor, selecione uma opção para a última pergunta!");
            return;
        }

        // Zera as pontuações antes de recalcular
        for (const deus in pontuacoesDeuses) {
            pontuacoesDeuses[deus] = 0;
        }

        // Calcula as pontuações com base nas seleções do usuário
        for (const qName in userSelections) {
            const pontuacoesDaOpcao = JSON.parse(userSelections[qName]);
            for (const deus in pontuacoesDaOpcao) {
                if (pontuacoesDeuses.hasOwnProperty(deus)) {
                    pontuacoesDeuses[deus] += pontuacoesDaOpcao[deus];
                }
            }
        }

        let maiorPontuacao = 0;
        let deusesFinais = [];

        // Encontra a(s) maior(es) pontuação(ões)
        for (const deus in pontuacoesDeuses) {
            if (pontuacoesDeuses[deus] > maiorPontuacao) {
                maiorPontuacao = pontuacoesDeuses[deus];
                deusesFinais = [deus];
            } else if (pontuacoesDeuses[deus] === maiorPontuacao && maiorPontuacao > 0) {
                deusesFinais.push(deus);
            }
        }

        // Exibe o resultado
        if (maiorPontuacao === 0) {
            textoResultado.textContent = "Parece que você ainda não respondeu o suficiente para descobrir seu deus interior. Tente novamente!";
            imagemDeus.src = ""; // Nenhuma imagem se não houver pontuação
            imagemDeus.style.display = 'none';
        } else {
            let resultadoTexto;
            let deusPrincipal = deusesFinais[0]; // Pega o primeiro deus em caso de empate para a imagem

            if (deusesFinais.length > 1) {
                resultadoTexto = `Você se parece com: ${deusesFinais.join(" e ")}! (Houve um empate!)`;
            } else {
                resultadoTexto = `Você se parece com: ${deusesFinais[0]}!`;
            }

            textoResultado.textContent = resultadoTexto;

            // Carrega a imagem do deus
            const caminhoImagem = imagensDeuses[deusPrincipal];
            if (caminhoImagem) {
                imagemDeus.src = caminhoImagem;
                imagemDeus.alt = `Imagem de ${deusPrincipal}`;
                imagemDeus.style.display = 'block'; // Garante que a imagem seja exibida
            } else {
                imagemDeus.src = '';
                imagemDeus.alt = 'Deus não encontrado';
                imagemDeus.style.display = 'none'; // Oculta se não houver imagem
            }
        }

        // Oculta o quiz e seus botões, e mostra o resultado
        quizSection.style.display = 'none';
        if (quizNavigation) { // Verifica se quizNavigation foi encontrada antes de tentar manipulá-la
            quizNavigation.style.display = 'none';
        }
        mostrarResultado(); // Garante que a seção de resultado é exibida
    });

    // Inicia mostrando a introdução
    mostrarIntroducao();
});