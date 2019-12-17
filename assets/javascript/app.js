//How do I form my data? Questions & Answers
//To store Questions, answers, and memes into array for storage
//Time needs to be set promptly ex: Have a on click function in order for the timer to start
//How do we set a timer to show and preview each question? By having a function in javascript (ex: 30seconds & timeUP)
//If they don't press any answer or let the timer run down to 0 then we increase "Unanswered Question by 1" - If they click the right answer the correct answer increases by 1
//Regardless, the solution meme will pop up (Each question has the same process of 30 seconds) Have the solution shown for atleast 5 seconds
//How do we show the solution if the user answers the question correctly or wrong? By hide & show using jquery
//How do I show the scoreboard once the user finishes all the questions promptly? Correct, Incorrect, and Unanswered
//-- How do I keep track of the answers above and have it apend?
//Once the scoreboard is shown; have a question if the user wants to restart

var data = [
    {
        questions: "What is the name of this car brand?",
        possibleAnswers: ["Toyota", "BMW", "Ferrari", "Mercedes"],
        correctAnswer: "BMW",
        memeAnswer: "https://media.giphy.com/media/124NH7ohOmpWak/giphy.gif"

    },
    {
        questions: "What kind of engine is in a F80 BMW M3?",
        possibleAnswers: ["V8", "V10", "Battery", "V6"],
        correctAnswer: "V6",
        memeAnswer: "https://media.giphy.com/media/eMmI0v5yLaiZMew0vY/giphy.gif"
    },
    {
        questions: "What is the model of this Tesla?",
        possibleAnswers: ["Model 3", "Model X", "Tesla Truck", "Model S"],
        correctAnswer: "Model 3",
        memeAnswer: "https://media.giphy.com/media/xT39DhBvK92OIeFsVG/giphy.gif"
    }
]

var index=0
var remainingTime= 30
var timerId;

$("#showTimer").hide()
$("#questions").hide()
$("#solutions").hide()
$("#results").hide()


$("#start").on("click", function () {
    startgame()
})
function startgame() {
    $("#showTimer").show()
    $("#buttons").hide()
    $("#questions").show()


    timerId=setInterval(countdown, 1000)
}

function countdown() {
    remainingTime = remainingTime - 1
    $("#timer").text(remainingTime)
    var questionText=""
    $("#questions").empty()
    if(remainingTime===0){
           index =index +1
           //reset remaining timer to 30
           //reset the setinterval
           remainingTime=30
      
           clearInterval(timerId)
           startgame()
    }
    questionText=data[index].questions
    $("#questions").append(questionText)

}


