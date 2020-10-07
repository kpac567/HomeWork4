var startButton = document.getElementById("beginBtn");
var submitButton =  document.querySelector("button.endBtn");
var secondsTimeLeft = (questions.length * 20 + 1);
var timeDisplay = document.getElementById("timeCount");
var userScoreDisplay = document.getElementById("userScore");
var userInfoInput;
var questionTitle = document.getElementById("questions");
var answersOptions = document.getElementById("answers");

var questionData = -1;
var answers;


function startTime() {
    document.getElementById("container").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");

    setTime();

    generateQuestions();
}


function setTime() {
    var countdata = setInterval(function () {
        secondsTimeLeft--;
        timeDisplay.textContent = "Time Remaining: " + secondsTimeLeft;

        if(secondsTimeLeft === 0 || questionData === questions.length) {
            clearInterval(countdata);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function generateQuestions() {
    questionData++;
    answer = questions[questionData].answer

    questionTitle.textContent = questions[questionData].title;
    answersOptions.innerHTML = "";

    var choices = questions[questionData].choices;

    for(var k = 0; k < choices.length; k++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[k]
       answerBtn = answersOptions.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

function displayScore() {
    document.getElementById("game").classList.add("d-none");
    document.getElementById("scoreData").classList.remove("d-none");
    userScoreDisplay.textContent = "Result: " + secondsTimeLeft + ".";
}

startButton.addEventListener("click", startTime);
submitButton.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();

     window.location.href = "./finalpoint.html"
});

function addScore() {
    userInfoInput = document.getElementById("playerID").value


    var newScore = {
        name: userInfoInput,
        score: secondsTimeLeft
    };

    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(newScore)

    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideResult() {
    var pElement = document.getElementsByClassName("result") [0]
    pElement.style.display= "none"
}

function showResult() {
    var pElement = document.getElementsByClassName("result") [0]
    pElement.removeAttribute('style');
}

answersOptions.addEventListener("click", function(event) {
    var pElement = document.getElementsByClassName("result") [0]

    if (answer === event.target.textContent) {
        pElement.innerHTML ="Correct!";
        setTimeout(hideResult,1255);
        showResult();
    } else {
        pElement.innerHTML = "Opps Wrong!";
        setTimeout(hideResult,1225);
        secondsTimeLeft = secondsTimeLeft - 20;
        showResult();
    }
    generateQuestions();
});
