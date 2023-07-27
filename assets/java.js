/*
    The following code is based on assistance provided by OpenAI and my buddy Mike, thanks Mike!
*/

// Different functions required for the quiz.
function quiz(questions, quizContainer, resultsContainer, checkAnswerButton, endScreen) {
    function showQuestions(question, quizContainer) {
        var output = [];
        for (var i = 0; i < question.length; i++) {
        answers = [];
        for (letter in question[i].answers) {
          answers.push(
            '<label>' +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ': ' +
            question[i].answers[letter] +
            '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + question[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, quizContainer, resultsContainer) {
      var answerContainers = quizContainer.querySelectorAll('.answers');
      var userAnswer = '';
      var numCorrect = 0;
  
      for (var i = 0; i < questions.length; i++) {
        userAnswer = (
          quizContainer.querySelector('input[name=question' + i + ']:checked') || {}
        ).value;
  
        if (userAnswer === questions[i].correctAnswer) {
          numCorrect++;
          answerContainers[i].style.color = 'green';
        } else {
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
  
    checkAnswerButton.onclick = function () {
      showResults(questions, quizContainer, resultsContainer);
    };
  }

        
            answers: {
                a: 'Battle of Verdun',
                b: 'Battle of Stalingrad',
                c: 'Normandy Landings'
            },
        
            correctAnswer: 'b'
        },
        
        {
            question: 'What was the event that started the war in 1939?',
        
            answers: {
                a: 'Britain declares war on Germany',
                b: 'Germany invades Poland',
                c: 'France refuses to comply with the Nazi regime, causing a chain reaction'
            },
        
            correctAnswer: 'b'
        },
        
        {
            question: 'Which country was invaded and occupied by Germany during the war, leading to the establishment of the Vichy government?',
        
            answers: {
                a: 'France',
                b: 'Norway',
                c: 'Denmark'
            },
        
            correctAnswer: 'a'
        },
        
        ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('score');
  var checkAnswerButton = document.getElementById('check-Answer');
  quiz(myQuestions, quizContainer, resultsContainer, checkAnswerButton);

  var currentQuestionIndex = 0;
  
  
  var prevButton = document.getElementById('previous');
  var nextButton = document.getElementById('next')
  var checkAnswerButton = document.getElementById('check-Answer');

  function showQuestion() {
    if (currentQuestionIndex === myQuestions.length - 1) {
        toggleCheckAnswerButton(true);
    } else {
        toggleCheckAnswerButton(false);
    }
  }

  function toggleCheckAnswerButton(show) {
    if (show) {
        checkAnswerButton.style.display = 'block';
    } else {
        checkAnswerButton.style.display = 'none';
    }
  }


  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        showQuestion(currentQuestionIndex);
    }   
    
    prevButton.removeAttribute('disabled');
  }

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
    if (currentQuestionIndex === 0) {
        prevButton.setAttribute('disabled', 'true');
    }
  }

  