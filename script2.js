
//List of question-answers of  probability with options.
const probability=[
    {
    
    question: "An event in the probability that will never be happened is called as",
   answers: [
    { text:"Unsure event",correct: false },
    { text:"Sure event",correct: false },
    { text:"Possible event",correct: false },
    { text: "Impossible event",correct:true},
   ],

   },
{
   question: "What will be the value of P(not E) if P(E) = 0.07?",                                 
    answers: [
        { text:  "0.93",correct:true},
        { text: "0.95",correct: false },
        { text:  "0.89",correct: false },
        { text: "0.90",correct: false },
    ],
},

{
    question: "A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?",                                 
    answers: [
        { text:  "3",correct: false },
        { text:  "8",correct: false },
        { text: "3/8",correct: false },
        { text:  "8/3",correct: true },
    ],
},{
    question: " A bag has 5 white marbles, 8 red marbles and 4 purple marbles. If we take a marble randomly, then what is the probability of not getting purple marble?",
    answers: [
        { text:   "0.5",correct: false },
        { text: "0.66",correct: false },
        { text: "0.08",correct: false },
        { text:"0.77",correct: true },
    ],
},
{
    question: " The probability that cannot exist among the following:",                                 
    answers: [
        { text:  "2/3", correct: false },
        { text:"-1.5",correct:true},
        { text: "15%", correct: false },
        { text:"0.7", correct: false },
    ],
},{
    question: ". A dice is thrown in the air. The probability of getting odd numbers is",                                 
    answers: [
        { text:"1/2",correct:true},
        { text:"3/2", correct: false },
        { text: "3", correct: false },
        { text:"4", correct: false },
    ],
},{
    question: "If we throw two coins in the air, then the probability of getting both tails will be:",                                 
    answers: [
        { text: "1/2", correct: false },
        { text:"1/4",correct:true},
        { text: "2", correct: false },
        { text: "4", correct: false },
    ],
},{
    question: " If two dice are thrown in the air, the probability of getting sum as 3 will be",                                 
    answers: [
        { text:"2/18", correct: false },
        { text: "3/18", correct: false },
        { text: "1/18",correct:true},
        { text:"1/36", correct: false },
    ],
},
{
    question: " A card is drawn from the set of 52 cards. Find the probability of getting a queen card.",                                 
    answers:[
        { text: "1/26", correct: false },
        { text: "1/13",correct:true},
        { text: "4/53", correct: false },
        { text: "4/13", correct: false },
    ],
},
{
    question: "A fish tank has 5 male fish and 8 female fish. The probability of fish taken out is a male fish:",                                 
    answers:[
        { text: "5/8", correct: false },
        { text: "5/13",correct:true},
        { text: "13/5", correct: false },
        { text: "5", correct: false },
    ],
},
];


//declaration of variables using const
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const score1=document.getElementById("score");
const home=document.getElementById("next-btn2");

let currentQuestionIndex = 0;
let score = 0;

//startQuiz() function to start the Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//showQuestion() function to show the Questions
function showQuestion() {
    resetState();
    let currentQuestion = probability[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");  //create button for showing answers on it.
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
// i create resetState() function which is used for coming back in the initial state by reseting the current state
function resetState() {
    nextButton.style.display = "none";
    home.style.display="none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//selectAnswer help you to select correct and incorrect answers
function selectAnswer(e) {
    const selectedBtn = e.target; // Changed 'selectBtn' to 'selectedBtn'
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        score1.innerHTML = ` ${score} / ${probability.length}`;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// showScore function will show the score of your quiz as per your performancce
function showScore() {
    resetState();
   
    answerButtons.innerHTML = ` score in Percentage ${score/probability.length *100}%<br> 
    Total Questions= ${probability.length} <br> No. Of Correct Questions= ${score} <br>
     No. Of Incorrect Questions=${probability.length - score} <br> No. Of Attempt= ${probability.length}`;
    
   
    nextButton.innerHTML = "Start Again"; 
    nextButton.style.display = "block";
    home.style.display="block";
    }

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < probability.length) {
        showQuestion();
    } else {
        showScore(), stop();
    }
}



//time starts and Time Stop Code
let interval = null;
        function start() {
            count = 0;
            const timer = document.getElementById("timer");
            interval = setInterval(() => {
                if (count < 60) {
                    timer.textContent = "00:" + (count > 9 ? count : '0' + count);
                    count++;
                } else {
                    let min = Math.floor(count / 60);
                    let sec = count - (60 * min);
                    timer.textContent = (min > 9 ? min : '0' + min) + ":" + (sec > 9 ? sec : '0' + sec);
                    count++;
                }

            }, 1000)
        }
        function stop() {
            if (interval != null) {
                clearInterval(interval);
                const timer = document.getElementById("timer");
                alert(timer.textContent+" Time Taken")
                timer.textContent
                questionElement.innerHTML="Total Time Taken =" + timer.textContent
            }else{
                alert("First Start your timer....!!!")
            }
        }
        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < probability.length) {
                handleNextButton();
            } else {
                startQuiz();
                score1.innerHTML = ` 00/00`;
                timer.textContent=`00:00`;
                nextButton = start()
            }
        });