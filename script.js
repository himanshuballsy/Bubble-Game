var timer = 3;
var score = 0;
var rn = 0;

// Increase score function
function SCORE() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Generate new target number
function HITNEW() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitBubble").textContent = rn;
}

// Generate bubbles
function bubble() {
    var bingo = "";
    for (var i = 1; i <= 198; i++) {
        var rn = Math.floor(Math.random() * 10);
        bingo += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bingo;
}

// Timer function
function runTimer() {
    if(timer > 0){
         var time = setInterval(() => { 
            timer--; 
            if(timer <= 0){ 
                clearInterval(time); 
                alert("Game Over! Your score is: " + score);
                document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
            } 
            document.querySelector("#time").innerText = timer;
         }, 1000); }
}

// Bubble click event
document.querySelector("#pbtm").addEventListener("click", function(e) {


    var clickedNum = Number(e.target.textContent);

    if (clickedNum === rn) {
        SCORE();     // score badhao
        HITNEW();    // new number show karo
        bubble();    // naye bubbles banao
    }
});

// Start the game
runTimer();
bubble();
HITNEW();