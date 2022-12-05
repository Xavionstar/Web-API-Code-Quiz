var pageOne = document.getElementById("pageOne");
var pageTwo = document.getElementById("pageTwo");
var pageThree = document.getElementById("pageThree");
var finalScorePage = document.getElementById("finalScorePage");
var highScorePage = document.getElementById("highScorePage");
var startQuizButton = document.getElementById("startQuizButton");
var wrongAnswerButtons = document.querySelectorAll(".wrongAnswer");
var clearHighScores = document.getElementById("clearHighScores")
var pageTwoAnswer = document.getElementById("pageTwoAnswer");
var pageThreeAnswer = document.getElementById("pageThreeAnswer");
var submitButton = document.getElementById("submitButton");
var goBack = document.getElementById("goBack");
var highScoreLink = document.getElementById("highScoreLink");
var correctAnswerAlertOne = document.getElementById("correctAnswerAlertOne");
var wrongAnswerAlertOne = document.getElementById("wrongAnswerAlertOne");
var correctAnswerAlertTwo = document.getElementById("correctAnswerAlertTwo");
var wrongAnswerAlertTwo = document.getElementById("wrongAnswerAlertTwo");
var timer = document.getElementById("timer")
var startTimeInSeconds = 30;
var countdown;
var interval = 1000;
var finalScore = document.getElementById("finalScore")
var initials = document.getElementById("initials")
var highScoreDisplay = document.getElementById("highScoreDisplay")

//This method and object initialize the game settings
updateHighScoreList()
timer.innerHTML = startTimeInSeconds;

//this button begins the quiz, starts the timer, amd behind the scenes shows only the relevant page
startQuizButton.addEventListener("click", function(){
    countdown  = setInterval(() => {
        timer.innerHTML = timer.innerHTML - 1;
        if (timer.innerHTML <= 0) {
        clearInterval(countdown);
        finalScore.innerHTML = timer.innerHTML
        timer.innerHTML = "TIME'S UP";
        pageOne.classList.add("hide");
        pageTwo.classList.add('hide');
        pageThree.classList.add('hide');
        highScorePage.classList.add("hide");
        finalScorePage.classList.remove("hide");
      }
    }, interval);
    

    pageOne.classList.add('hide');
    pageTwo.classList.remove('hide');
});

//this button moves the user to the next page
pageTwoAnswer.addEventListener("click", function(){
    correctAnswerAlertOne.classList.remove("hide");
    setTimeout(function(){
        pageTwo.classList.add('hide');
        pageThree.classList.remove('hide');
        correctAnswerAlertOne.classList.add("hide");
    }, 1000)
});

//this button moves the user to the next page
pageThreeAnswer.addEventListener("click", function(){
    correctAnswerAlertTwo.classList.remove("hide");
    setTimeout(function(){
        clearInterval(countdown);
        pageThree.classList.add('hide');
        finalScorePage.classList.remove('hide');
        finalScore.innerHTML = timer.innerHTML
        correctAnswerAlertTwo.classList.add("hide");
    }, 1000)
});

//this button clears the local storage and thru calling the function resets the high score list
clearHighScores.addEventListener("click", function(){
    localStorage.clear()
    updateHighScoreList()
})

//this button saves the initials and remaining time/score to the local storage
submitButton.addEventListener("click", function(){
    var newHighScore = initials.value + " " + finalScore.innerHTML
    var highscoresList = getHighScoresList();
    highscoresList.push(newHighScore)
    localStorage.setItem("Highscores", JSON.stringify(highscoresList));
    updateHighScoreList();
    finalScorePage.classList.add('hide');
    highScorePage.classList.remove('hide');
});

//this button  sends the user back to the beginning
goBack.addEventListener("click", function(){
    timer.innerHTML = startTimeInSeconds
    highScorePage.classList.add('hide');
    pageOne.classList.remove('hide');
});

//this link in the nav takes the user directly to the saved high scores
highScoreLink.addEventListener("click", function(){
    clearInterval(countdown);
    pageOne.classList.add('hide');
    pageTwo.classList.add('hide');
    pageThree.classList.add('hide');
    finalScorePage.classList.add('hide');
    highScorePage.classList.remove('hide');
});

//this is the behind the scenes workings for the wrong answers, they declare wrong answer and then fade off
wrongAnswerButtons.forEach(wrongAnswerButton => {
    wrongAnswerButton.addEventListener('click', () => {
        timer.innerHTML = timer.innerHTML - 5
    wrongAnswerAlertOne.classList.remove("hide");
    wrongAnswerAlertTwo.classList.remove("hide");
    setTimeout(function(){
        wrongAnswerAlertOne.classList.add("hide");
        wrongAnswerAlertTwo.classList.add("hide");
    }, 1000)
    })
});

//this creates the scorelist, prints them as a line item, and allows me to plug it in to do that anywhere in the code
function updateHighScoreList(){
    var highScoresList = getHighScoresList()
    var highScoreHTML = ""
    for (let i = 0; i < highScoresList.length; i++) {
        var highscore = "<li>" + highScoresList[i] + "</li>";
        highScoreHTML = highScoreHTML + highscore;    
    }
    highScoreDisplay.innerHTML = highScoreHTML
   }
//this is what gathers the high scores from the local storage
function getHighScoresList(){
    var highscoresList = JSON.parse(localStorage.getItem("Highscores") || '[]');
    return highscoresList;
}


