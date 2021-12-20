var scores = [];

var buttonStart =   document.querySelector("#start-btn");
var buttonAgain =   document.querySelector("#again-btn");
var buttonAnswer = document.querySelector("#answer-btn");
var time =              document.querySelector("#clock");

var startGame = function(event) {
    event.preventDefault();
    //The intention was to create interval that counts down after gameStart()
    //var counter = 60
    var targetEl = event.target;
    if (targetEl.matches("#start-btn")){
        var removeMainPage = document.querySelector("#main-page");

        var createMainDiv = document.createElement("main");
        createMainDiv.innerHTML = 
             "<main class='container' id='page-content'></main>";

        var createSection = document.createElement("section");
           createSection.innerHTML =
             "<section class='hero'></section>";
        createMainDiv.appendChild(createSection);
        var createQuestion = document.createElement("h2");
            createQuestion.innerHTML =
             "<h2>test</h2>";
        createSection.appendChild(createQuestion);
        var createFormDiv = document.createElement("form");
            createFormDiv.innerHTML =
            "<form></form>";
        createSection.appendChild(createFormDiv);
        var createListOl = document.createElement("ol");
            createListOl.innerHTML =
            "<ol></ol>";
        createFormDiv.appendChild(createListOl);
        var createListLi = document.createElement("li");
            createListLi.innerHTML = 
            "<li>placeholder</li><li>placeholder</li><li>placeholder</li><li>placeholder</li>";
        createListOl.appendChild(createListLi);
        //The intention was when count reaches zero would start endGame()

        // var countdown = function(){
        //     counter--;
        //     if (counter <= 0) {
        //         endGame();
        //     };
        // };
        
    }
    removeMainPage.remove();
    //The intention was for interval to decrease by 1 every 1000ms
    
    // var startCountdown = setInterval(countdown, 1000);
    // startCountdown = document.querySelector("#clock");
    // startCountdown(time){
    //     document.createElement
    // }



};

buttonStart.addEventListener("click", startGame);


var loadScores = function() {
    var savedScores = localStorage.getItem("scores");
    
    if (!savedScores) {
        return false;
    }
    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        createScoreEl(savedScores[i]);
    }
};

loadScores();