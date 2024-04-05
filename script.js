/* 
1- I need a timer, it needs to start when you hit the button.
1a- The timer needs to start at 60s and end at 0s.
1b- The timer should go down by one second every second.
    maybe there will be a penalty.
2 create multiple choice questions
2a show results 
2b have correct or incorrect sound effects play

highscore screen 
enter your initials screen with highschool

*/
let time = 60;
var timerStart = document.querySelector("#button-start");
//maybe have a tracker for what question we are on

window.onload = () => {
    document.getElementById("quiz-end").style.display = "none";
     document.getElementById("quesiton-screen").style.display = "none";
}

function timer() {
    
    const interval = setInterval(function(){
        document.getElementById("timer").innerHTML = time;
    time  = time -1
    if (time < 0 ) {
        clearInterval(interval);
    }
    }, 1000)
}

const questions = [
    {
        question1: "What is a unique feature of a Lion?",
        answers: [
            {text: 'its tongue', correct: false },
            {text: 'its trunk', correct: false },
            {text: 'its hind legs', correct: false },
            {text: 'its mane', correct: true },
        ]
    },
    {
        question2: "What is the Lion's native continent?",
        answers: [
            {text: 'North America', correct: false },
            {text: 'South America', correct: false },
            {text: 'Africa', correct: true },
            {text: 'Europe', correct: false },
        ]
    },
    {
        question3: "What is a Lion's top speed?",
        answers: [
            {text: '50mph', correct: true },
            {text: '25mph', correct: false },
            {text: '30mph', correct: false },
            {text: '35mph', correct: false },
        ]
    },
    {
        question4: "What is a Lion's favorite pastime?",
        answers: [
            {text: 'trash talking zebras', correct: false },
            {text: 'racing with other Lions', correct: false },
            {text: 'flirting with a lioness', correct: false },
            {text: 'relaxing and lazing around', correct: true },
        ]
    }
];

const questionElement = document.querySelector('#questionScreen .question-container h2#question');

const firstQuestion=()=>{

    document.getElementById("quesiton-screen").style.display = "block";
    
    const questionElement = document.querySelector('#quesiton-screen .question-container h2#question');
    const a1Element = document.querySelector('#a1');
    const a2Element = document.querySelector('#a2');
    const a3Element = document.querySelector('#a3');
    const a4Element = document.querySelector('#a4');

    questionElement.textContent = questions[0].question1;
    a1Element.textContent = questions[0].a;
    a2Element.textContent = questions[0].b;
    a3Element.textContent = questions[0].c;
    a4Element.textContent = questions[0].d;

    
    
    
    ///set the text on some part of the page...maybve makes an ul or questions and options that are buttons
    //maybe have a next question button
}



function startQuiz() {
     document.getElementById("quiz-start").style.display = "none";
     document.getElementById("quiz-end").style.display = "none";
     document.getElementById("button-start").style.display = "none";
     firstQuestion()    
}


const nextQuestion=()=>{

    writeQuestion(somevar)//where can we pass some var here that knows what question we are on
    //maybe qrite question needs to have a condition for if we passed nothing to it??
}
timerStart.addEventListener("click", timer); 
timerStart.addEventListener("click", startQuiz);


//maybe listen on the page for someone clicking next quetsion
