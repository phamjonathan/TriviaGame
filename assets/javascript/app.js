
var card = $("#quiz-area");
var countStartNumber = 30;


var questions = [{
  question: "When was BMW founded?",
  answers: ["March 7, 1916", "April 25, 1500", "May 5, 1985", "February 17, 1925"],
  correctAnswer: "March 7, 1916",
  image: "assets/images/bmwm6.gif"
}, {
  question: "What is the best selling electric car?",
  answers: ["Maserati", "BMW", "Mercedes", "Tesla"],
  correctAnswer: "Tesla",
  image: "assets/images/tesla.gif"
}, {
  question: "Which of the following is a Ferrari hypercar?",
  answers: ["458 Italia", "F12 Berlinetta", "California", "La Ferrari"],
  correctAnswer: "La Ferrari",
  image: "assets/images/laferrari.gif"
}, {
  question: "Which car brand is known to be in James Bond movies?",
  answers: ["Mercedes", "Aston Martin", "BMW", "Porsche"],
  correctAnswer: "Aston Martin",
  image: "assets/images/aston.gif"
}, {
  question: "Which car brand is owned under the BMW Group?",
  answers: ["Mercedes", "Ferrari", "Rolls Royce", "Porsche"],
  correctAnswer: "Rolls Royce",
  image: "assets/images/rollsroyce.gif"
}, {
  question: "Which of the following is the oldest car brand?",
  answers: ["Lamborghini", "Tesla", "BMW", "Mercedes"],
  correctAnswer: "Mercedes",
  image: "assets/images/blackseries.gif"
}, {
  question: "Which lamborghini model was shown in Transformers Age of Extinction?",
  answers: ["Centenario", "Aventador", "Murcielago", "Huracan"],
  correctAnswer: "Aventador",
  image: "assets/images/lamborghini.gif"
}, {
  question: "Which car brand is known for it's model `911 turbo` ",
  answers: ["Porsche", "Toyota", "Maserati", "BMW"],
  correctAnswer: "Porsche",
  image: "assets/images/classicporsche.gif"
}];


var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    card.html("<h2> Congratulations! Here's your Score! </h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};


$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});


// Old Foundation & Psuedo Code
// //How do I form my data? Questions & Answers
// //To store Questions, answers, and memes into array for storage
// //Time needs to be set promptly ex: Have a on click function in order for the timer to start
// //How do we set a timer to show and preview each question? By having a function in javascript (ex: 30seconds & timeUP)

// //If they don't press any answer or let the timer run down to 0 then we increase "Unanswered Question by 1" - If they click the right answer the correct answer increases by 1
// //Regardless, the solution meme will pop up (Each question has the same process of 30 seconds) Have the solution shown for atleast 5 seconds
// //How do we show the solution if the user answers the question correctly or wrong? By hide & show using jquery
// //How do I show the scoreboard once the user finishes all the questions promptly? Correct, Incorrect, and Unanswered

// //-- How do I keep track of the answers above and have it apend?
// // //Once the scoreboard is shown; have a question if the user wants to restart

// // var data = [
//     {
//         questions: "What is the name of this car brand?",
//         possibleAnswers: ["Toyota", "BMW", "Ferrari", "Mercedes"],
//         correctAnswer: "BMW",
//         memeAnswer: "https://media.giphy.com/media/124NH7ohOmpWak/giphy.gif"

//     },
//     {
//         questions: "What kind of engine is in a F80 BMW M3?",
//         possibleAnswers: ["V8", "V10", "Battery", "V6"],
//         correctAnswer: "V6",
//         memeAnswer: "https://media.giphy.com/media/eMmI0v5yLaiZMew0vY/giphy.gif"
//     },
//     {
//         questions: "What is the model of this Tesla?",
//         possibleAnswers: ["Model 3", "Model X", "Tesla Truck", "Model S"],
//         correctAnswer: "Model 3",
//         memeAnswer: "https://media.giphy.com/media/xT39DhBvK92OIeFsVG/giphy.gif"
//     }
// ]

// var index=0
// var remainingTime= 30
// var timerId;

// $("#showTimer").hide()
// $("#questions").hide()
// $("#solutions").hide()
// $("#results").hide()


// $("#start").on("click", function () {
//     startgame()
// })
// function startgame() {
//     $("#showTimer").show()
//     $("#buttons").hide()
//     $("#questions").show()


//     timerId=setInterval(countdown, 1000)
// }

// function countdown() {
//     remainingTime = remainingTime - 1
//     $("#timer").text(remainingTime)
//     var questionText=""
//     $("#questions").empty()
//     if(remainingTime===0){
//            index =index +1
//            //reset remaining timer to 30
//            //reset the setinterval
//            remainingTime=30
      
//            clearInterval(timerId)
//            startgame()
//     }
//     questionText=data[index].questions
//     $("#questions").append(questionText)

// }


