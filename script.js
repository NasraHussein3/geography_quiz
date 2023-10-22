/*This first section is the object/array of questions and their options.This involves 10 questions with 3 options each.*/
const questions = [
    {
      question: "Which country is the largest by land area?",
      options: ["China", "USA", "Russia"],
      correctAnswer: "Russia",
    },
    {
      question: "Which river flows through the Grand Canyon in the United States?",
      options: ["Mississippi River", "Colorado River", " Missouri River"],
      correctAnswer: "Colorado River",
    },
    {
      question: "What is the tallest mountain in North America?",
      options: [" Mount Kilimanjaro", "Mount St. Helens", " Denali (formerly Mount McKinley)"],
      correctAnswer: " Denali (formerly Mount McKinley)",
    },
    {
      question: "In which continent can you find the Amazon Rainforest?",
      options: ["South America", "Africa", "Asia"],
      correctAnswer: "South America",
    },
    {
      question: "What is the largest island in the Mediterranean Sea?",
      options: [" Sicily", "Crete", "Cyprus"],
      correctAnswer: "Sicily",
    },
    {
      question: "Which canal connects the Mediterranean Sea to the Red Sea?",
      options: ["Panama Canal", "Suez Canal", "Corinth Canal"],
      correctAnswer: "Suez Canal",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver"],
      correctAnswer: "Ottawa",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea"],
      correctAnswer: "Japan",
    },
    {
      question: "Which U.S. state is known as the Sunshine State?",
      options: ["California", "Florida", "Texas"],
      correctAnswer: "Florida",
    },
    {
      question: "Which African country is known as the Rainbow Nation?",
      options: ["Nigeria", "Kenya", "South Africa"],
      correctAnswer: "South Africa",
    },
  ];
  
  /*This section is the function to display the question */
  let currentQuestionIndex = 0;
  let userScore = 0; 
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
  
    questions[currentQuestionIndex].options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionButton);
    });
  }
  
  /*This section is the function that displays the answer. The function checks the your answers when you click an option, gets the text of the option selected, finds the correct answer,
  and displays the result.*/
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const resultElement = document.getElementById("result");
  
    if (selectedOption === correctAnswer) {
      resultElement.textContent = "Correct!";
      userScore++;
    } else {
      resultElement.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }
  
    /*This section below disables all the option buttons so you cant change their choice once already selected. Then we have the next button */
    
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach((button) => {
      button.disabled = true;
    });
  
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
  
    if (currentQuestionIndex === questions.length - 1) {
      nextButton.textContent = "Finish";
      nextButton.removeEventListener("click", nextQuestion);
      nextButton.addEventListener("click", displayQuizResults);
    }
  }
  
  /*This section moves on to the next question*/
  function nextQuestion() {
    const resultElement = document.getElementById("result");
  
    resultElement.textContent = "";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
  }
  
  /*This display the quiz results after completing the quiz*/
  function displayQuizResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
  
    const resultsElement = document.createElement("div");
    resultsElement.innerHTML = `
      <h2>Quiz Results</h2>
      <p>You answered ${userScore} out of ${questions.length} questions correctly!</p>
    `;
  
    // Restart the quiz
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
  
    resultsElement.appendChild(restartButton);
  
    // Append the resultsElement to the quizContainer
    quizContainer.appendChild(resultsElement);
  }
  
  
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    const nextButton = document.getElementById("next-button");
    nextButton.textContent = "Next Question";
    nextButton.removeEventListener("click", displayQuizResults);
    nextButton.addEventListener("click", nextQuestion);
    displayQuestion();
  }
  
  /*This makes sure that the first question is displayed when the page loads and makes sure the next button is displayed*/
  displayQuestion();
  
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", nextQuestion);
  
  