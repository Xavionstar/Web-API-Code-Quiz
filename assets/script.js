var pageOne = document.getElementById("pageOne");
var pageTwo = document.getElementById("pageTwo");
var pageThree = document.getElementById("pageThree");
var finalScorePage = document.getElementById("finalScorePage");
var highScorePage = document.getElementById("highScorePage");
var startQuizButton = document.getElementById("startQuizButton");
var wrongAnswer = document.querySelectorAll(".wrongAnswer")
var pageTwoAnswer = document.getElementById("pageTwoAnswer")
var pageThreeAnswer = document.getElementById("pageThreeAnswer")
var submitButton = document.getElementById("submitButton")
var goBack = document.getElementById("goBack")
var highScoreLink = document.getElementById("highScoreLink")

startQuizButton.addEventListener("click", function(){
    pageOne.classList.add('hide');
    pageTwo.classList.remove('hide');
});

pageTwoAnswer.addEventListener("click", function(){
    pageTwo.classList.add('hide');
    pageThree.classList.remove('hide');
});

pageThreeAnswer.addEventListener("click", function(){
    pageThree.classList.add('hide');
    finalScorePage.classList.remove('hide');
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