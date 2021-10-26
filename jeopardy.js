location.hash = "2-players";







//let questionTime = document.getElementsById("guesstimer")
let timeSecond = 5;

// questionTime.innerHTMl = `00:${timeSecond}`

// let questionCountdown = setInterval (()=>{
//     timeSeconds--
//     displayTime(timeSecond)
//     questionTime.innerHTML = `00:${timeSecond}`
//     if(timeSecond <= 0){
//         clearInterval(questionCountdown)
//     }
// },1000)

// function displayTime(second){
//     let min = Math.floor(second  / 60);
//     let sec = Math.floor(second % 60)
//     questionCountdown.innerHTML = `{min}:{sec}`}

//notify player one its their turn and disable buttons

//array containing all the questions and answers to be drawn from later
questionList = [
  { question: "example question 1", answer: "example answer 1" },
  { question: "example question 2", answer: "example answer 2" },
  { question: "example question 3", answer: "example answer 3" },
  { question: "example question 4", answer: " example answer 4" },
  { question: "example question 5", answer: "example answer 5" },
  { question: "example question 6", answer: "example answer6" },
  { question: "example question 7", answer: "example answer7" },
  { question: "example question 8", answer: "example answer 8" },
  { question: "example question 9", answer: "example answer 9" },
  { question: "example question 10", answer: "example answer 10" },
  { question: "example question 11", answer: "example answer 11" },
  { question: "example question 12", answer: "example answer 12" },
  { question: "example question 13", answer: "example answer 13" },
  { question: "example question 14", answer: "example answer 14" },
  { question: "example question 15", answer: "example answer 15" },
  { question: "example question 16", answer: "example answer 16" },
  { question: "example question 17", answer: "example answer 17" },
  { question: "example question 18", answer: "example answer 18" },
  { question: "example question 19", answer: "example answer 19" },
  { question: "example question 20", answer: "example answer 20" },
  { question: "example question 21", answer: "example answer 21" },
  { question: "example question 22", answer: "example answer 22" },
  { question: "example question 23", answer: "example answer 23" },
  { question: "example question 24", answer: "example answer 24" },
  { question: "example question 25", answer: "example answer 25" },
  { question: "example question 26", answer: "example answer 26" },
  { question: "example question 27", answer: "example answer 27" },
  { question: "example question 28", answer: "example answer 28" },
  { question: "example question 29", answer: "example answer 29" },
  { question: "example question 30", answer: "example answer 30" },
  { question: "example question 31", answer: "example answer 31" },
  { question: "example question 32", answer: "example answer 32" },
  { question: "example question 33", answer: "example answer 33" },
  { question: "example question 34", answer: "example answer 34" },
  { question: "example question 35", answer: "example answer 35" },
];

document.getElementById("guess").disabled = true;
document.getElementById("pass").disabled = true;
let currentPlayer = "player 1";

//assignin a variable to the question class
let questionBlock = document.getElementsByClassName("question");
//turning the html question class which is now question block into a array by looping over each element
Array.from(questionBlock).forEach((element) => {
  element.addEventListener("click", (evt) => {
    //looking for a click event 
    evt.target.textContent = questionList[0].question;
    // the click event is being targeted at the key question in the question list
    document.getElementById("guess").disabled = false;
    //disabling the guess and pass buttons
    document.getElementById("pass").disabled = false;
    //else if statement that gets the id from the html to call on the pass button to change the player display when it is clicked
    document.getElementById("pass").addEventListener("click", (evt) => {
      if (currentPlayer === "player 1"){
        currentPlayer = "player 2";
        document.getElementById("playerTurn").textContent =
          "Player 2 its your turn!";
      } else {
          currentPlayer = "player 1"
          document.getElementById("playerTurn").textContent =
          "Player 1 its your turn!"
          
      }
    });
  });
});
//function to see if answer is correct
let guess = document.getElementById("player guess");
//when answer is typed in text field will check the array to see if the value matches the key
Array.from(questionBlock)








