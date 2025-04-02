// Quiz Questions
const questions = [
    {
      question: 'What is your greatest strength?',
      answers: ['Courage', 'Wisdom', 'Beauty', 'Power'],
      god: ['Ares', 'Athena', 'Aphrodite', 'Zeus']
    },
    {
      question: 'How would you spend your time?',
      answers: ['Strategizing', 'Learning', 'Creating Art', 'Fighting'],
      god: ['Athena', 'Apollo', 'Hercules', 'Ares']
    },
    {
      question: 'What element calls to you?',
      answers: ['Fire', 'Water', 'Earth', 'Air'],
      god: ['Hercules', 'Poseidon', 'Hades', 'Zeus']
    }
  ];
  
  // Setup quiz container
  const quizContainer = document.getElementById('quiz-container');
  let currentQuestion = 0;
  let score = {
    'Ares': 0,
    'Athena': 0,
    'Aphrodite': 0,
    'Zeus': 0,
    'Apollo': 0,
    'Hercules': 0,
    'Poseidon': 0,
    'Hades': 0
  };
  
  // Display the first question
  function displayQuestion() {
    const question = questions[currentQuestion];
    quizContainer.innerHTML = `<h3>${question.question}</h3>`;
    question.answers.forEach((answer, index) => {
      quizContainer.innerHTML += `<button class='answer-btn' onclick='checkAnswer("${answer}", "${question.god[index]}")'>${answer}</button>`;
    });
  }
  
  // Check answer and move to the next question
  function checkAnswer(answer, god) {
    score[god] = (score[god] || 0) + 1;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Show the result
  function showResult() {
    const highestScore = Object.entries(score).reduce((a, b) => a[1] > b[1] ? a : b);
    quizContainer.innerHTML = `<h3>You are most like ${highestScore[0]}!</h3>`;
    quizContainer.innerHTML += `<p>You've matched with the god ${highestScore[0]} based on your answers.</p>`;
  }
  
  // Initialize the quiz
  displayQuestion();
