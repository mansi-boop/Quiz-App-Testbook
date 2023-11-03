
//List of question-answers of pipe and cistern with options.
const PipeAndCistern=[
    {
    
    question: "A cistern has two taps attached to it. Tap B can empty the cistern in 45 minutes. But Tap A can fill the cistern in just 30 minutes. Rohit started both taps unknowingly but realized his mistake after 30 minutes. He immediately closed Tap B. Now after this, in how much time will the cistern be filled?",
   answers:[
    { text: "30 minutes", correct: false },
    { text:"45 minutes", correct: false },
    { text: "15 minutes", correct: false },
    { text: "20 minutes",correct:true},
   ],
},
{
    question: " Pipe R can empty a full tank in 30 hours. But two pipes P and Q can fill a tank in 15 hours and 10 hours respectively. Ram unknowingly opened all three taps. After 2 hours Shyam realized it and closed Pipe R. Due to this mistake how much time more would it take to fill the tank?",                                 
answers:[
    { text:"18 minutes", correct: false },
    { text:"24 minutes",correct:true},
    { text: "1 hour 20 minutes", correct: false },
    { text:"2 hours 15 minutes", correct: false },
],
},

{
    question: " A cistern is filled by Pipe A and Pipe B together in 2.4 hours. Pipe A alone can fill the cistern at the rate of 100 litres per hour. Pipe B alone can fill the cistern in 4 hours. What is the capacity of the cistern?",                                 
answers:[
    { text: "1200 litres", correct: false },
    { text:  "600 litres",correct:true},
    { text:"1000 litres", correct: false },
    { text:"500 litres", correct: false },
],
},{
    question: "  There is a leak at the bottom of a cistern. Due to this it takes 8 hours to fill the cistern. Had there not been a leak, it would take one hour less to fill the cistern. How much time does it take for the leak to completely empty the cistern?",
answers:[
    { text: "48 hours", correct: false },
    { text: "55(1/3) hours", correct: false },
    { text:"56 hours",correct:true},
    { text:"15 hours", correct: false },
],
},
{
    question: " Tap P alone fills a cistern in 2 hours; while tap Q alone fills the same cistern in 3 hours. A new tap R is attached to the bottom of the cistern which can empty the completely filled cistern in 6 hours. Sunny started all three taps together at 9am. When will the tank be full?",                                 
answers:[
    { text: "10.30 am",correct:true},
    { text: "11.15 am", correct: false },
    { text:"12 pm", correct: false },
    { text: "9.45 am", correct: false },
],
},{
    question: " A cistern can be filled in 6 hours by taps P and Q. If tap R also joins them, then cistern is filled in 5 hours. Tap P can fill the cistern at twice the rate of tap Q. In what time tap Q and R fill the cistern?",                                 
answers:[
    { text: "9.75 hours", correct: false },
    { text:"10. 90 hours", correct: false },
    { text:"11.25 hours",correct:true},
    { text:  "12.90 hours", correct: false },
],
},{
    question: "A cistern is normally filled with water in 10 hours but takes 5 hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty the cistern in",                                 
answers:[
    { text: "20 hours", correct: false },
    { text: "40 hours", correct: false },
    { text:"50 hours", correct: false },
    { text: "30 hours",correct:true},
],
},{
    question: " A tank has three taps P, Q and R. Taps P and Q can fill the tank in 1.5 and 2 hours, respectively. Tap R can empty the completely filled tank in just half hour. Tap P is opened at 8 am, tap Q is opened at 9am and tap R is opened at 10 am. At what exact time will the tank be empty?",                                 
answers:[
    { text:  "12 pm", correct: false },
    { text:  "1.25 pm", correct: false },
    { text:   "12.12 pm",correct:true},
     { text:"12.28 pm", correct: false },
],
},
{
    question: " A pipe can fill a tank in 6 hours. Another pipe can empty the tank in 12 hours. If both pipes are opened simultaneously, the part of tank filled by both pipes in 1 hour is?",                                 
answers:[
    { text: " 1/9 th part", correct: false },
    { text: "1/6 th part", correct: false },
   { text:  "1/12 th part",correct:true},
   { text: "1/3 rd part", correct: false },
],
},
{
    question: " A tap having diameter 'd' can empty a tank in 84 min. How long another tap having diameter '2d' take to empty the same tank?",                                 
answers:[
    { text: " 21 minutes",correct:true},
    { text:  " 42 minutes",correct: false },
    { text: "168 minutes",correct: false },
   { text: "28 minutes", correct: false },
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
    let currentQuestion = PipeAndCistern[currentQuestionIndex];
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
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        score1.innerHTML = ` ${score} / ${PipeAndCistern.length}`;

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
    answerButtons.innerHTML = ` score in Percentage ${score/PipeAndCistern.length *100}%<br> 
    Total Questions= ${PipeAndCistern.length} <br> No. Of Correct Questions= ${score} <br>
     No. Of Incorrect Questions=${PipeAndCistern.length - score} <br> No. Of Attempt= ${PipeAndCistern.length}`;
    nextButton.innerHTML = "Start Again"; 
    nextButton.style.display = "block";
    home.style.display="block";
    }
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < PipeAndCistern.length) {
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
            if (currentQuestionIndex < PipeAndCistern.length) {
                handleNextButton();
            } else {
                startQuiz();
             
        score1.innerHTML = ` 00/00`;
        timer.textContent=`00:00`;
        nextButton = start()
            }
        });