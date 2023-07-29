/*
    The following code is based on assistance provided by OpenAI and my buddy Mike, thanks Mike!
*/
document.addEventListener('DOMContentLoaded', () => {

         //Quiz questions
         const myQuestions = [
            {
            question: "Question 1: In what year did Adolf Hitler become Chancellor for Germany?",
            answers: {
                a: "1928",
                b: "1931",
                c: "1933"
            },
            correctAnswer: "c"
        },
         {
            question: "Question 2: Who was a part of the allies during World War 2?",
            answers: {
                a: 'Italy, China, United States and Great Britain',
                b: 'France, United States, Great Britain, China and the Soviet Union',
                c: 'Finland, France, United States and Great Britain'
                
            },
            correctAnswer: 'b'
         },
         {
            question: "Question 3: What Was The Codename For The Allied Invasion Of Normandy June 6th 1944?",
            answers: {
                a: 'Operation D-day',
                b: 'Operation Barbarossa',
                c: 'Operation Overlord'
            },
            correctAnswer: 'c'
         },
         {
            question: "Question 4: Who was a part of the Axis?",
            answers: {
                a: 'Italy, Japan and Germany',
                b: 'China, Japan and Germany',
                c: 'Germany, Soviet Union and Japan'
            },
            correctAnswer: 'a'
         },
         {
            question: "Question 5: Who was the prime minister of Great Britain most of the time during the war?",
            answers: {
                a: 'Winston Churchill' ,
                b: 'Clemont Attlee' ,
                c: 'Neville Chamberlain'
            },
            correctAnswer: 'a'
         },
         {
            question: "Question 6: What was it that made the US enter the war and what year?",
            answers: {
                a: 'Imminent threat of nuclear bombs from the Axis, 1940',
                b: 'They had lent so much money to the allies that if they did not win, they would likely not get their money back, 1942',
                c: 'Attack on Pearl Harbor, 1941'
            },
            correctAnswer: 'c'
         },
         {
            question: "Question 7: How many people lost their lives during the war?",
            answers: {
                a: '100 million',
                b: '30 million',
                c: '70 million'
            },
            correctAnswer: 'c'
         },
         {
            question: "Question 8: What was the turning point for the Eastern front, marking a major defeat for the german army?",
            answers: {
                a: 'Battle of Verdun',
                b: 'Battle of Stalingrad',
                c: 'Normandy Landings'
            },
            correctAnswer: 'b'
         },
         {
            question: "Question 9: What was the event that started the war in 1939?",
            answers: {
                a: 'Germany invades Poland',
                b: 'France refuses to comply with the Nazi regime, causing Germany to declare war on France',
                c: 'Great Britain declares war on Germany'
            },
            correctAnswer: 'a'
         },
         {
            question: "Question 10: Which country was invaded and occupied by Germany during the war, leading to the establishment of the Vichy government?",
            answers: {
                a: 'Italy',
                b: 'France',
                c: 'Finland'
            },
            correctAnswer: 'b'
         },
        ];

        const userAnswer = [];
    
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const prevButton = document.getElementById('previous');
        const nextButton = document.getElementById('next');
        const showResultButton = document.getElementById('showResult');
        const scoreElement = document.getElementById('score');
        const resultElement = document.getElementById('result');
        scoreElement.textContent = '';
        resultElement.style.display = 'none';
        
        let currentQuestionIndex = 0;
    
        // function for showing questions 
    
        function showQuestion(index) {
            const question = myQuestions[index];
            questionElement.textContent = question.question;
    
            answersElement.innerHTML = '';
            for (const option in myQuestions[index].answers) {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'answer';
                input.value = option;
                if (userAnswer[index] === option) {
                    input.checked = true;
                } 
                label.appendChild(input);
                label.appendChild(document.createTextNode(`${option.toUpperCase()}: ${question.answers[option]}`));
                answersElement.appendChild(label);
            }
    
            prevButton.disabled = index === 0;
            nextButton.disabled = index === myQuestions.length +1;
        }
    
        //function for checking and saving selected answers
    
    
            function checkAnswer() {
                const selectedAnswer = document.querySelector('input[name="answer"]:checked');
                if (!selectedAnswer) {
                    alert('Select an answer before clicking Next.');
                    return;
                }
    
                const answerValue = selectedAnswer.value;
                userAnswer[currentQuestionIndex] = answerValue;
                selectedAnswer[currentQuestionIndex] = answerValue;
            }
    
            // function for counting correct answers
            function countCorrectAnswers() {
                let correctCount = 0;
                for (let i = 0; i < myQuestions.length; i++) {
                    if (userAnswer[i] === myQuestions[i].correctAnswer) {
                        correctCount++;
                    }
                }
                return correctCount;
            }
    
     
    
        
        // Eventlistener for click on previous and next buttons
            prevButton.addEventListener('click', () => {
               if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                    showQuestion(currentQuestionIndex);
    
               }
            });
       
            nextButton.addEventListener('click', () => {
                checkAnswer();
               if (currentQuestionIndex < myQuestions.length - 1) {
                   currentQuestionIndex++;
                   showQuestion(currentQuestionIndex);
               }
            });
    
        // Eventlistener for results button
            showResultButton.addEventListener('click', () => {
                const totalQuestions = myQuestions.length;
                const correctAnswers = countCorrectAnswers();
                scoreElement.textContent = `You scored ${correctAnswers} out of ${totalQuestions} questions correctly!`;
                resultElement.style.display = 'block';
            });

            // show first question upon page load
            showQuestion(currentQuestionIndex);
});         