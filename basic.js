const quizData = [
    {
        question: ' When we went back to the bookstore, the bookseller _______ the book we wanted.',
        a: 'sold ',
        b:'had sold',
        c: 'sells',
        d: 'has sold',
        correct: 'b'
    },
    {
        question: 'By the end of last summer, the farmers _______ all the crop',
        a: 'harvested',
        b:'had harvested',
        c:'harvest',
        d:'are harvested',
        correct: 'b'
    },{
        question:'The director _______ for the meeting by the time I got to his office',
        a:'left',
        b:'had left',
        c:'leaves',
        d:'will leave',
        correct: 'b',
    },{
        question:'My mother told me she _______ very tired since she came back from a visit to our grandparents.',
        a:'was',
        b:'had been',
        c:'is',
        d:'has been',
        correct: 'b',
    },
    {
        question:'Susan _______ her family after she had taken the university entrance examination.',
        a:'phoned',
        b:'had phoned',
        c:'phones',
        d:'is phoning',
        correct:'a'
    }
]
const quizEL = document.getElementById('quiz');
const questionEL = document.getElementById('question');
const a_textEL = document.getElementById('a_text');
const b_textEL = document.getElementById('b_text');
const c_textEL = document.getElementById('c_text');
const d_textEL = document.getElementById('d_text');
const submitEL = document.getElementById('submit');
let currentQuestion = 0;
let score = 0;
const answerELs = document.querySelectorAll('.answer');
loadQuiz();
function loadQuiz(){
    deSelected();
    const currentQuiz = quizData[currentQuestion];
    questionEL.innerHTML = currentQuiz.question;
    a_textEL.innerHTML = currentQuiz.a;
    b_textEL.innerHTML = currentQuiz.b;
    c_textEL.innerHTML = currentQuiz.c;
    d_textEL.innerHTML = currentQuiz.d;
}
function getSelected() {
    let answer = undefined;
    answerELs.forEach((answerEL) => {
        if(answerEL.checked){
            answer = answerEL.id;
         }
    });return answer;
}
function deSelected(){
    answerELs.forEach((answerEL) => {
       answerEL.checked = false;
})}
submitEL.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer == quizData[currentQuestion].correct){
           score++;
        };
    currentQuestion++;
    
    if(currentQuestion<quizData.length){
        loadQuiz();
    }else{
        quizEL.innerHTML =`<h2>Your answer correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`
    }}
})
