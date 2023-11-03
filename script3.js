////List of question-answers of  Profit And Lose with option.
const ProfitAndLoss=[
    {

question: " A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?",
answers:[
{ text: "Rs. 525", correct: false },
{ text: "Rs. 500", correct: false },
{ text:"Rs. 490", correct: false },
{ text:"Rs. 486",correct:true},
],
},
{
question: "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is",                                 
answers:[
    { text:  "10%", correct: false },
    { text: "15%", correct: false },
    { text: "20%",correct:true},
    { text: "25%", correct: false },
],
},

{
question: "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",                                 
answers:[
    { text:  " Rs. 25000", correct: false },
    { text:  " Rs. 50000",correct:true},
    { text:  " Rs. 37500", correct: false },
    { text:  " Rs. 60000", correct: false },
    
],
},{
question: "  Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.",
answers: [
    { text:  " Rs. 6000", correct: false },
    { text: " Rs. 7500", correct: false },
    { text: "Rs. 3500", correct: false },
    { text: "Rs. 4500",correct:true},
   
],
},
{
question: "  If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is",                                 
answers:[
    { text:  "25% loss", correct: false },
    { text:  "20% loss", correct: false },
    { text:  "25% gain",correct:true},
    { text:"20% gain", correct: false },
   
],
},{
question: "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is",                                 
answers:[
    { text:"Neither gain nor loss", correct: false },
    { text:"2.5% gain", correct: false },
    { text:"2.5% loss", correct: false },
    { text: "0.25% loss1/2",correct:true},
   
],
},{
question: "The ratio of cost price and selling price is 4:5. The profit percent is",                                 
answers:[
    { text: "10%", correct: false },
    { text: "20%", correct: false },
    { text: "25%",correct:true},
    { text:  "30%", correct: false },
],
},{
question: "  If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",                                 
answers:[
    { text: " Rs. 4420", correct: false },
    { text:"Rs. 4000",correct:true},
    { text:  "Rs. 3900", correct: false },
    { text:"Rs. 3800", correct: false },
    
],
},
{
question: "  A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",                                 
answers: [
    { text:  " 20:23", correct: false },
    { text: " 23:20", correct: false },
    { text: " 16:23",correct:true},
    { text: "23:16", correct: false },
   
],
},
{
question: "Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?",                                 
answers:[
    { text:"25%", correct: false },
    { text:  "20%",correct:true},
    { text: "45%", correct: false },
    { text: "50%", correct: false },
    
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
    let currentQuestion = ProfitAndLoss[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); //create button for showing answers on it.
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
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        score1.innerHTML = ` ${score} / ${ ProfitAndLoss.length}`;
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
   
    answerButtons.innerHTML = ` score in Percentage ${score/ ProfitAndLoss.length *100}%<br> 
    Total Questions= ${ ProfitAndLoss.length} <br> No. Of Correct Questions= ${score} <br>
     No. Of Incorrect Questions=${ ProfitAndLoss.length - score} <br> No. Of Attempt= ${ProfitAndLoss.length}`;
    
    
    nextButton.innerHTML = "Start Again"; 
    nextButton.style.display = "block";
    home.style.display="block";
   
    }

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < ProfitAndLoss.length) {
        showQuestion();
    } else {
        showScore(),stop() ;
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
    if (currentQuestionIndex < ProfitAndLoss.length) {
        handleNextButton();
    } else {
        startQuiz();
        score1.innerHTML = ` 00/00`;
        timer.textContent=`00:00`;
        nextButton = start()
    }
});