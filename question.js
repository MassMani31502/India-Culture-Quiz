function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<button onclick=reload();>Reset</button>";
        var element = document.getElementById("quiz");
   
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("The Flamingo Festival is celebrated in__?", ["Andra Pradesh", "Kerala","Karnataka", "Bihar"], "Andra Pradesh"),
    new Question("How many colors are present in national flag of India?", ["1", "3", "2", "4"], "3"),
    new Question("Which of the following is the national bird of India?", ["Peacock", "Sparrow","Crow", "Eagle"], "Peacock"),
    new Question("When do we celebrate our Republic Day?", ["26 May", "15 August", "5 September", "26 January"], "26 January"),
    new Question("When do we celebrate our Independence Day?", ["15 June", "15 August", "6 February", "09 July"], "15 August"),
     new Question("How was Tamil Nadu known?", ["Mysore", "Madras", "Hyderabad", "Bombay"], "Madras"),
    new Question("Which is the first state to be formed on the basis of language?", ["Andhra Pradesh", "Assam", "Tamil Nadu", "Haryana"], "Andhra Pradesh"),
    new Question("Kathakali is a folk dance prevalent in which state?", ["TamilNadu", "Kerala", "Karnataka", "Punjab"], "Kerala"),
   new Question("Natya - Shastra' the main source of India's classical dances was written by _____", ["Bharat Muni", "Nara Muni", "Tandu Muni", "Abhinav Gupt"], "Bharat Muni"),
    new Question("The ratio of width of our National flag to its length is _____", ["1:4", "2:5", "2:3", "4:3"], "2:3")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();