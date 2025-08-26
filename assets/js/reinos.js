function criarCard(itemData) {
  const item = document.createElement('article');
  item.classList.add('item');

  item.innerHTML = `
    <h2>${itemData.nome}</h2>
    <div class="conteudo-item">
      <img src="${itemData.imagem}" alt="${itemData.nome}" class="img-dinamica" onerror="this.src='../assets/img/padrao.jpg'" />
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

  const nomesSecretos = ["Mente Brilhante", "Autista Extremo"]; 

  function atualizarLista(filtro = '') {
    container.innerHTML = '';

    const filtroMinusculo = filtro.toLowerCase().trim();

    const dadosFiltrados = dadosOriginais.filter(item => {
      const nomeItemMinusculo = item.nome.toLowerCase();

      if (nomesSecretos.includes(item.nome)) {
        return nomeItemMinusculo === filtroMinusculo;
      } else {
        return nomeItemMinusculo.includes(filtroMinusculo);
      }
    });

    const dadosParaExibir = filtroMinusculo === ''
      ? dadosFiltrados.filter(item => !nomesSecretos.includes(item.nome))
      : dadosFiltrados;

    dadosParaExibir.forEach(itemData => {
      const card = criarCard(itemData);
      container.appendChild(card);
    });

    adicionarEventosBotoes();
  }

  function adicionarEventosBotoes() {
    document.querySelectorAll('.btn-toggle').forEach(botao => {
      botao.addEventListener('click', () => {
        const item = botao.closest('.item');

        if (item.classList.contains('expanded')) {
          item.classList.remove('expanded');
          botao.textContent = 'Ver mais';
        } else {
          document.querySelectorAll('.item.expanded').forEach(i => {
            i.classList.remove('expanded');
            i.querySelector('.btn-toggle').textContent = 'Ver mais';
          });

          item.classList.add('expanded');
          botao.textContent = 'Fechar';
        }
      });
    });
  }

  fetch('../assets/data/reinos.json')
    .then(res => {
      if (!res.ok) throw new Error('Erro ao carregar o JSON');
      return res.json();
    })
    .then(dados => {
      dadosOriginais = dados;
      atualizarLista(); 
    })
    .catch(erro => {
      container.innerHTML = `<p>Erro ao carregar os dados.</p>`;
      console.error(erro);
    });

  pesquisaInput.addEventListener('input', () => {
    atualizarLista(pesquisaInput.value);
  });
});

const nomesSecretos = ["Mente Brilhante", "Autista Extremo"]; 

// ...

const dadosFiltrados = dadosOriginais.filter(item => {
  const nomeItemMinusculo = item.nome.toLowerCase();

  if (nomesSecretos.includes(item.nome)) {
    return nomeItemMinusculo === filtroMinusculo; 
  } else {
    return nomeItemMinusculo.includes(filtroMinusculo);
  }
});

const dadosParaExibir = filtroMinusculo === ''
  ? dadosFiltrados.filter(item => !nomesSecretos.includes(item.nome))
  : dadosFiltrados;