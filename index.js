/*@Autor Gsfantasma*/
/*Projec by Rocketseat*/

const elementoResposta = document.querySelector ("#resposta")//faz inclusao da variavel resposta
const inputPergunta = document.querySelector("#inputPergunta")//faz inclusao da variavel pergunta
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [ 
   "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
   
  //console.log(numeroAleatorio)

  //clicar em fazer pergutna
  function fazerPergunta() {

    if(inputPergunta.value == "") {
      alert("Digite sua pergunta")
      return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"//faz inclusão da pergunta

    //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    //console.log(numeroAleatorio)
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]//Transforma em html
    
    elementoResposta.style.opacity = 1;
    
  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
