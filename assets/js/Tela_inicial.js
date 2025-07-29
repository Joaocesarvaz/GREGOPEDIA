document.getElementById("entrar").addEventListener("click", function () {
  const videocont = document.getElementById("video-container");
  const video = document.getElementById("video-transicao");

  document.querySelector(".capa").style.display = "none";

  videocont.style.display = "block";
  videocont.classList.remove("desaparecido");
  document.body.style.overflow = "hidden";

  video.currentTime = 0;
  video.play().catch(err => console.error("Erro ao reproduzir:", err));

  const limite = 4;
  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= limite) {
      video.pause();
      videocont.classList.add("desaparecido");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 000);
    }
  });
});

const gatilho = document.getElementById("gatilho");
const ovo = document.getElementById("ovo");

gatilho.addEventListener('mouseenter', () => {
  ovo.style.display = 'block';
});

gatilho.addEventListener('mouseleave', () => {
  ovo.style.display = 'none';
});
