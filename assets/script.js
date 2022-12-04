var pageOne = document.getElementById("pageOne");
var pageTwo = document.getElementById("pageTwo");
var pageThree = document.getElementById("pageThree");
var finalScorePage = document.getElementById("finalScorePage");
var highScorePage = document.getElementById("highScorePage");
var startQuizButton = document.getElementById("startQuizButton");
var wrongAnswerButtons = document.querySelectorAll(".wrongAnswer")
var pageTwoAnswer = document.getElementById("pageTwoAnswer")
var pageThreeAnswer = document.getElementById("pageThreeAnswer")
var submitButton = document.getElementById("submitButton")
var goBack = document.getElementById("goBack")
var highScoreLink = document.getElementById("highScoreLink")
var correctAnswerAlertOne = document.getElementById("correctAnswerAlertOne")
var wrongAnswerAlertOne = document.getElementById("wrongAnswerAlertOne")
var correctAnswerAlertTwo = document.getElementById("correctAnswerAlertTwo")
var wrongAnswerAlertTwo = document.getElementById("wrongAnswerAlertTwo")


startQuizButton.addEventListener("click", function(){
    pageOne.classList.add('hide');
    pageTwo.classList.remove('hide');
});

pageTwoAnswer.addEventListener("click", function(){
    correctAnswerAlertOne.classList.remove("hide");
    setTimeout(function(){
        pageTwo.classList.add('hide');
        pageThree.classList.remove('hide');
        correctAnswerAlertOne.classList.add("hide")
    }, 1500)
});

pageThreeAnswer.addEventListener("click", function(){
    correctAnswerAlertTwo.classList.remove("hide");
    setTimeout(function(){
        pageThree.classList.add('hide');
        finalScorePage.classList.remove('hide');
        correctAnswerAlertTwo.classList.add("hide")
    }, 1500)
});

submitButton.addEventListener("click", function(){
    finalScorePage.classList.add('hide');
    highScorePage.classList.remove('hide');
});

goBack.addEventListener("click", function(){
    highScorePage.classList.add('hide');
    pageOne.classList.remove('hide');
});

highScoreLink.addEventListener("click", function(){
    pageOne.classList.add('hide');
    pageTwo.classList.add('hide');
    pageThree.classList.add('hide');
    finalScorePage.classList.add('hide');
    highScorePage.classList.remove('hide');
});

wrongAnswerButtons.forEach(wrongAnswerButton => {
    wrongAnswerButton.addEventListener('click', () => {
    wrongAnswerAlertOne.classList.remove("hide")
    wrongAnswerAlertTwo.classList.remove("hide")
    setTimeout(function(){
        wrongAnswerAlertOne.classList.add("hide")
        wrongAnswerAlertTwo.classList.add("hide")
    }, 1500)
    })
});


