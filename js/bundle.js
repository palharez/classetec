$("document").ready(function () {
  handleTyping();
});


function handleTyping() {
  $(".element").typed({
    strings: [
      "Eduardo Palhares",
      "Vinicius Morini",
      "Leonardo Alves",
      "Luana Otsuka",
      "Jade Fernandes",
      "Daygo Campos",
      "Kauane Katsumi",
      "Erick Dourado",
      "Daniel Correa",
      "Bruno Figueiredo",
      "Almir Chaves",
      "Alex Oliveira",
      "Lucas Luiz",
      "Simone Cristina",
      "Felipe Souza",
      "Gustavo Pereira",
      "Eduardo Garçon",
      "Pedro Pereira",
      "Erick Davi",
      "Giovanna Milciukas",
      "Matheus Henrique",
      "Nilo Ferreira",
      "Andreon Caíque",
      "Rodrigo Sacramento",
      "Péterson Libório",
    ],
    typeSpeed: 50,
    starDelay: 200,
    backDelay: 600,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
}
