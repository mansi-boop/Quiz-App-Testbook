//List of question-answers of problem On Ages with option.

const problemOnAges=[
    {
    
    question: " Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?",
   answers: [
    { text: "64 years", correct: false },
    { text:"30 years", correct: false },
    { text: "48 years", correct: false },
    { text: " 42 years",correct:true},
   ],
},
{
   questions: "Rohan's age is five times Ajay’s and seven-eighteenth of Meena’s age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?",                                 
    answers: [
        { text: "56 years", correct: false },
        { text: "83 years",correct:true},
        { text: "27 years", correct: false },
        { text: "Cannot be determined", correct: false },
    ],
},


{
question: "The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",                                 
answers:[
    { text: "33 years", correct: false },
    { text:" 30 years", correct: false },
    { text: "27 years",correct:true},
    { text:"24 years", correct: false },
],
},{
question: "Ram and Shyam’s average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
answers: [
    { text: "29 years",correct:true},
    { text: "31 years", correct: false },
    { text:" 59 years", correct: false },
    { text: " 45 years", correct: false },
],
},
{
question: " The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",                                 
answers: [
    { text:" 3:2", correct: false },
    { text:" 46:25", correct: false },
    { text:" 12:23",correct:true},
    { text:"8:3", correct: false },
],
},{
question: "Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",                                 
answers: [
    { text: " 32 years", correct: false },
    { text:" 64 years", correct: false },
    { text: "52 years",correct:true},
    { text:  "36 years", correct: false },
],
},{
question: "Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",                                 
answers:[
    { text: " 4 years", correct: false },
    { text: " 1 year", correct: false },
    { text: "2 years", correct: false },
    { text: " 3 years",correct:true},
],
},{
question: " 12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",                                 
answers:[
    { text:" 54 years", correct: false },
    { text:  "36 years",correct:true},
    { text: "24 years", correct: false },
    { text:  "144 years", correct: false },
],
},
{
question: "  The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",                                 
answers:[
    { text:"9 years",correct:true},
    { text:  "12 years", correct: false },
    { text:  "5 years", correct: false },
    { text: "3 years", correct: false },
],
},
{
question: " A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?",                                 
answers:[
    { text: "50", correct: false },
    { text:"72", correct: false },
    { text:"68", correct: false },
    { text: "65",correct:true},
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
    let currentQuestion =  problemOnAges[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");//create button for showing answers on it.
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
        score1.innerHTML = ` ${score} / ${ problemOnAges.length}`;
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
   
    answerButtons.innerHTML = ` score in Percentage ${score/ problemOnAges.length *100}%<br> 
    Total Questions= ${ problemOnAges.length} <br> No. Of Correct Questions= ${score} <br>
     No. Of Incorrect Questions=${ problemOnAges.length - score}<br> No. Of Attempt= ${problemOnAges.length}`;
    
   
    nextButton.innerHTML = "Start Again"; 
    nextButton.style.display = "block";
    home.style.display="block";
    }

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex <  problemOnAges.length) {
        showQuestion();
    } else {
        showScore(),stop();
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
            if (currentQuestionIndex <  problemOnAges.length) {
                handleNextButton();
            } else {
                startQuiz();
                score1.innerHTML = ` 00/00`;
                timer.textContent=`00:00`;
                nextButton = start()
            }
        });