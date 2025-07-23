// Função para criar o card de cada item (deus, animal, etc)
function criarCard(itemData) {
  const item = document.createElement('article');
  item.classList.add('item');

  item.innerHTML = `
    <h2>${itemData.nome}</h2>
    <div class="conteudo-item">
      <img src="${itemData.imagem}" alt="${itemData.nome}" class="img-dinamica" />
      <p class="descricao-curta">${itemData.descricaoCurta}</p>
      <button class="btn-toggle">Ver mais</button>
      <div class="descricao-longa">
        <h3>História</h3>
        <p>${itemData.historia}</p>
        <h3>Outros detalhes</h3>
        <p>${itemData.detalhes}</p>
      </div>
    </div>
  `;

  return item;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.lista-itens');
  const pesquisaInput = document.getElementById('pesquisa');

  let dadosOriginais = [];

  // Nomes dos personagens que só aparecem com pesquisa exata
  const nomesSecretos = ["Mente Brilhante", "Autista Extremo"]; // Adicione aqui os nomes EXATOS dos personagens

  // Função para atualizar a lista com base no filtro
  function atualizarLista(filtro = '') {
    // Limpa container
    container.innerHTML = '';

    const filtroMinusculo = filtro.toLowerCase().trim();

    // Filtra os dados
    const dadosFiltrados = dadosOriginais.filter(item => {
      const nomeItemMinusculo = item.nome.toLowerCase();

      // Lógica para personagens secretos
      if (nomesSecretos.includes(item.nome)) {
        // Se for um personagem secreto, só mostra se a pesquisa for o nome exato
        return nomeItemMinusculo === filtroMinusculo;
      } else {
        // Para os outros personagens, a lógica de pesquisa parcial continua
        return nomeItemMinusculo.includes(filtroMinusculo);
      }
    });

    // Se o filtro estiver vazio, remova os personagens secretos dos dados filtrados
    // para que eles não apareçam por padrão
    const dadosFinaisParaExibir = filtroMinusculo === ''
      ? dadosFiltrados.filter(item => !nomesSecretos.includes(item.nome))
      : dadosFiltrados;


    // Cria e insere cards
    dadosFinaisParaExibir.forEach(itemData => {
      const card = criarCard(itemData);
      container.appendChild(card);
    });

    // Adiciona eventos dos botões "Ver mais"
    adicionarEventosBotoes();
  }

  // Função para adicionar eventos nos botões "Ver mais"
  function adicionarEventosBotoes() {
    document.querySelectorAll('.btn-toggle').forEach(botao => {
      botao.addEventListener('click', () => {
        const item = botao.closest('.item');

        if (item.classList.contains('expanded')) {
          item.classList.remove('expanded');
          botao.textContent = 'Ver mais';
        } else {
          // Fecha outros cards abertos (apenas um aberto por vez)
          document.querySelectorAll('.item.expanded').forEach(i => {
            i.classList.remove('expanded');
            i.querySelector('.btn-toggle').textContent = 'Ver mais';
          });

          // Abre esse card
          item.classList.add('expanded');
          botao.textContent = 'Fechar';
        }
      });
    });
  }

  // Busca os dados do JSON
  fetch('../assets/data/titans.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Erro ao carregar o JSON');
      }
      return res.json();
    })
    .then(dados => {
      dadosOriginais = dados;
      atualizarLista(); // Carrega a lista inicial (sem os personagens secretos)
    })
    .catch(erro => {
      container.innerHTML = `<p>Erro ao carregar os dados.</p>`;
      console.error(erro);
    });

  // Evento do input de pesquisa
  pesquisaInput.addEventListener('input', () => {
    atualizarLista(pesquisaInput.value);
  });
});