var count = 0;
var timer = 10;
var allCircleElements = document.querySelectorAll(".circle");
var buttonElement = document.getElementById("start");
var inputBox = document.getElementById("inputBox");
var gamePlay = document.getElementById("gameplay");
var welcomeMessage = document.getElementById("inputBox2");
var timerInterval, randomInterval;

var playerName, userName;
var scores = [];

function updateScores(){
   
}

function showRandomCircle(){
  var rand = Math.round(Math.random() * 2);
  allCircleElements[rand].style.display = "block";
}

function hideAllCircles () {
  allCircleElements.forEach(function (circleElement, loopIndex) {
    circleElement.style.display = "none";
  });
}

function showBoxesAndText (){
  gamePlay.style.display = "block";
  welcomeMessage.style.display = "block";
}

function hideAllBoxesAndText () {
  gamePlay.style.display = "none";
  welcomeMessage.style.display = "none";
}

function showInputBox (){
  inputBox.style.display = "block";
}

function hideInputBox(){
    inputBox.style.display = "none";
 }

allCircleElements.forEach(function (circleElement, loopIndex) {
  circleElement.addEventListener("click", function (){
  	count++;
    document.getElementById("clickCount").innerHTML = count;
  });  
});

function startGame () {
  playerName = document.getElementById("userName").value;
	document.getElementById("inputBox2").innerHTML = "Welcome " +  playerName;
	showBoxesAndText();
  hideInputBox();
  randomInterval = setInterval(function () {
    hideAllCircles();
    showRandomCircle();
  }, 1000);
    
  timerInterval = setInterval(function () {
    timer--;
    if (timer <= 0) {
      stopGame();
    }
    document.getElementById("timer").innerHTML = timer;
  }, 1000);
  
}

function stopGame () {
  playerName = document.getElementById("userName").value;
	document.getElementById("myName").innerHTML = "Please enter your name: ";
	showInputBox();
  clearInterval(timerInterval);
  clearInterval(randomInterval);
  hideAllCircles();
  welcomeMessage.style.display = "none";

 scores.push({
  name: playerName,
  score: count
 });

  document.getElementById("gameresult2").innerHTML += playerName +"  " +count;

}

buttonElement.addEventListener("click",function(){
  userName = document.getElementById("userName").value;
	if(userName == "") {
		window.alert("Please provide a name");
  } 
  else {
		startGame();
  }
});

hideAllBoxesAndText();