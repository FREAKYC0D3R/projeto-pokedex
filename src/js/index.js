console.log(
  "Seja Bem-Vindo! Este é um Site que estou usando como teste de HTML,CSS e JS, é uma página em construção então muitas coisas ainda não funcionam ou não foram finalizadas!"
);

const botaoAlterar = document.getElementById("botao-alterar");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const luaSol = document.querySelector(".imagem-botao");

botaoAlterar.addEventListener("click", () => {
  const ativado = body.classList.contains("modo-escuro");
  if (ativado) {
    /*console.log("Modo Escuro está ativado.");*/
    body.classList.remove("modo-escuro");

    header.classList.remove("modo-escuro");

    main.classList.remove("modo-escuro");

    luaSol.setAttribute("src", "./src/images/sun.png");
  } else {
    body.classList.add("modo-escuro");

    header.classList.add("modo-escuro");

    main.classList.add("modo-escuro");

    luaSol.setAttribute("src", "./src/images/moon.png");
  }
});
