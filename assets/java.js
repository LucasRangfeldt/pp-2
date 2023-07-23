function quiz(question, quizContainer, resultsContainer, checkAnswerButton){
    
    function showQuestions(question, quizContainer) {

    }

    function showResults(question, quizContainer, resultsContainer){

    }

    showQuestions(question, quizContainer);

    checkAnswerButton.onclick = function() {
        
        showResults(questions, quizContainer, resultsContainer);

    }
}

var myQuestions = [

{
    question: 'In what year did Hitler become chancellor for Germany?',

    answers: {
        a: '1930',
        b: '1928',
        c: '1933'
    },

    correctAnswer: 'c'
},

{
    question: 'Who Was A Part Of The Allies During WW2?',

    answers: {
        a: 'Italy, France, United States and Korea',
        b: 'France, United States, Great Britain, China and the Soviet Union',
        c: 'Finland, France, United States and Great Britain'
    },

    correctAnswer: 'b'

},

{
    question: 'What Was The Codename For The Allied Invasion Of Normandy June 6th 1944?',

    answers: {
        a: 'Operation D-Day',
        b: 'Operation Barbarossa',
        c: 'Operation Overlord'
    },

    correctAnswer: 'c'

},

{
    question: 'Who was A Part Of The Axis During WW2?',

    answers: {
        a: 'Vietnam, Japan And Germany',
        b: 'Japan, Italy and Germany',
        c: 'China, Japan and Germany'

    },
    
    correctAnswer: 'b'
},

{
    question: 'Who Was The Prime Minister Of Great Britain Most Of The Time During WW2?',

    answers: {
        a: 'Winston Churchill',
        b: 'Clement Attlee',
        c: 'Neville Chamberlain'
    },

    correctAnswer: 'a'
},

{
    question: 'What was it that made the US enter the war and what year?',

    answers: {
        a: 'Imminent threat of nuclear bombs from the Axis, 1940.',
        b: 'Attack on Pearl Harbor, 1941.',
        c: 'They had lent so much money to the allies that if they did not win, they would likely not get their money back, 1942.'
    },

    correctAnswer: 'b'

},

{
    question: 'How many people lost their lives during WW2?',

    answers: {
        a: '100 million',
        b: '70 million',
        c: '50 million'
    },

    correctAnswer: 'c'
},

{
    question: 'What was the turning point for the Eastern front in WW2, marking a major defeat for the german army?',

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
