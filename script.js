const perguntas = [
  {
    texto: "1. Qual o nome do movimento em que a bailarina gira sobre uma perna?",
    alternativas: ["Plié", "Pirouette", "Souplesse", "Port de bras"],
    correta: 1
  },
  {
    texto: "2. O 'Battement tendu devant' é executado em qual direção?",
    alternativas: ["Atrás", "Na frente", "Em diagonal", "Ao lado"],
    correta: 1
  },
  {
    texto: "3. O que significa 'En dehors'?",
    alternativas: ["Preparatória", "Para dentro", "Saltar", "Para fora"],
    correta: 3
  },
  {
    texto: "4. Qual dessas alternativas é um salto?",
    alternativas: ["Relevé", "Cambré", "Assemblé", "Plié"],
    correta: 2
  },
  {
    texto: "5. O que é 'Demi plié' ?",
    alternativas: ["Um giro", "Flexão de costas", "Flexão de joelhos", "Esticar as pontas"],
    correta: 2
  },
    {
    texto: "6. O que é 'Sauté' ?",
    alternativas: ["Uma posição de braços", "Esticar as pontas", "Um salto", "Caminhar na meia ponta"],
    correta: 2
  },
      {
    texto: "7. O que é 'Relevé' ?",
    alternativas: ["Um salto", "Subir na meia ponta", "Uma reverência", "Uma posição de braços"],
    correta: 1
  },
        {
    texto: "8. O que são 'Pantomimas' ?",
      alternativas: ["Piruetas duplas", "1ª posição aberta", "Conjunto de bailarinas", "Mímicas"],
    correta: 3
  },
          {
    texto: "9. O movimento que desliza o pé pelo chão até a ponta dos dedos sem perder o contato com o chão se chama: ",
      alternativas: ["Battement tendu", "1ª posição fechada", "Pantomimas", "Galop"],
    correta: 0
  },
            {
    texto: "10. O movimento que lança uma das pernas rápido e desce devagar com sustentação  é o: ",
      alternativas: ["Battement soutenu", "Grand Plié", "Grand battement", "Echappé"],
    correta: 2
  }
  
];



const quizContainer = document.getElementById('quiz-container');

perguntas.forEach((pergunta, index) => {
  const div = document.createElement('div');
  div.classList.add('pergunta');
  div.innerHTML = `<p>${pergunta.texto}</p>`;

  pergunta.alternativas.forEach((alt, i) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="pergunta${index}" value="${i}"> ${alt}
      </label><br>
    `;
  });

  quizContainer.appendChild(div);
});


let tempo = 0;
const timerInterval = setInterval(() => {
  tempo++;
  document.getElementById('timer').textContent = `⏱ Tempo: ${tempo}s`;
}, 1000);

function verificarRespostas() {
  clearInterval(timerInterval);

  
  let acertos = 0;
  const audioAcerto = new Audio('acerto.mp3');
  const audioErro = new Audio('erro.mp3');

  const respostasCertas = [];

  perguntas.forEach((pergunta, index) => {
    const resposta = document.querySelector(`input[name="pergunta${index}"]:checked`);
    const correta = pergunta.correta;

    
    if (resposta && parseInt(resposta.value) === correta) {
      audioAcerto.play();

      acertos++;
      respostasCertas.push(`✅ ${pergunta.texto}`);
    
    } else {
      audioErro.play();

      const textoCorreto = pergunta.alternativas[correta];
      respostasCertas.push(`❌ ${pergunta.texto}<br><strong>Resposta certa:</strong> ${textoCorreto}`);
    }
  });

  document.getElementById('resultado').textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;

  const lista = respostasCertas.map(r => `<li>${r}</li>`).join("");
  const respostaDiv = document.getElementById('respostas-certas');
  respostaDiv.innerHTML = `<ul>${lista}</ul>`;
  respostaDiv.scrollIntoView({ behavior: 'smooth' });
}
