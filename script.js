
const perguntas = [
  {
    texto: "1. Qual o nome do movimento em que a bailarina gira sobre uma perna?",
    alternativas: ["Plié", "Pirouette", "Arabesque", "Jeté"],
    correta: 1
  },
  {
    texto: "2. Como se chama a roupa tradicional das bailarinas?",
    alternativas: ["Collant", "Tutu", "Saia godê", "Macacão"],
    correta: 1
  },
  {
    texto: "3. O que significa a palavra 'ballet'?",
    alternativas: ["Poesia", "Teatro", "Dança", "Música"],
    correta: 2
  },
  {
    texto: "4. Como se chama o salto em que a bailarina pula com uma perna e aterrissa com a outra?",
    alternativas: ["Jeté", "Passé", "Relevé", "Chassé"],
    correta: 0
  },
  {
    texto: "5. Qual desses é um estilo clássico de ballet?",
    alternativas: ["Ballet Russo", "Ballet Funk", "Ballet Contemporâneo", "Ballet Jazz"],
    correta: 0
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
