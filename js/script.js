var currentQuestionNumber = 0;
var counter;

startCounter();

function startCounter() {
    var seconds = 5;
    timer = setInterval(function () {
        document.getElementById('counter').innerText = seconds + 's';
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('counter').innerText = '';
}

function nextQuestion() {
    stopTimer();
    var nextQuestionNumber = currentQuestionNumber + 1;
    var nextQuestionId = 'question' + nextQuestionNumber;

    if (nextQuestionNumber < 4) {
        document.getElementById('counter').innerText = '';
        document.getElementById('question' + currentQuestionNumber).style.display = 'none';
        document.getElementById(nextQuestionId).style.display = 'block';
        startCounter();
        currentQuestionNumber = nextQuestionNumber;
    } else {
        result('question3');
    }
}

function next(questionNumber, questionId) {
    stopTimer();
    var questions = document.getElementsByClassName('question');

    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }

    document.getElementById("question" + questionNumber).style.display = "block";
    currentQuestionNumber = questionNumber;
    calcul(questionId)
    startCounter();
}

function calcul(questionId) {
    stopTimer();
    var score =  document.getElementById('score').value;
    var choices = document.querySelectorAll('#' + questionId + ' .choices');

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        if (choice.checked && choice.value === 'correct') { 
          score = parseInt(score) + 1;
          document.getElementById('score').value = score;
        }
    }
}

function result(questionId) {
    stopTimer();
    calcul(questionId);
    var score = document.getElementById('score').value;
   
    document.getElementById('bloc-question').style.display = "none";
    document.getElementById('bloc-score').style.display = "block";

    $('#result-text').text(score + '/5');
}


/*
function next(questionNumber, questionId) {
    var questions = document.getElementsByClassName('question');

    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }

    document.getElementById("question"+questionNumber).style.display = "block";
    calcul(questionId);
}

function calcul(questionId) {
    var score =  document.getElementById('score').value;
    var choices = document.querySelectorAll('#' + questionId + ' .choices');

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        if (choice.checked && choice.value === 'correct') { 
          score = parseInt(score) + 1;
          document.getElementById('score').value = score;
        }
    }
}

function result(questionId) {
    calcul(questionId);
    var score = document.getElementById('score').value;
    console.log(score);
   
    document.getElementById('bloc-question').style.display = "none";
    document.getElementById('bloc-score').style.display = "block";

    $('#result-text').text(score + '/5');
}
*/