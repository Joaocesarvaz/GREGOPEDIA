const botao = document.getElementById('entrar');

const transicao = document.getElementById('transicao');

botao.addEventListener('click', () => {
      transicao.classList.add('ativo');
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500); 
    });
    