$( document ).ready(function(){

    // Target number generated at start of game, ranges from 19-120
    var randomNumber = Math.floor(Math.random() * 101 + 19);

    // Places target number in corresponding div
    $('#randomNumber').text(randomNumber);

    // Random numbers for each crystal ranging from 1 to 12
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    // VARIABLES
    var currentTally = 0;
    var wins = 0;
    var losses = 0;

    // displays win/lose totals in corresponding divs
    $('#wins').text(wins);
    $('#losses').text(losses);

    // EVENTS

    // click event for jewel one
    $('#one').on('click', function(){
        // adds jewel value to current tally
        currentTally = currentTally + num1;
        // prints current score to corresponding div
        $('#score').text(currentTally); 
        checkForWin();
    })

    // click event for jewel two
    $('#two').on('click', function(){
        // adds jewel value to current tally
        currentTally = currentTally + num2;
        // prints current score to corresponding div
        $('#score').text(currentTally); 
        checkForWin();
    })

    // click event for jewel three
    $('#three').on('click', function(){
        // adds jewel value to current tally
        currentTally = currentTally + num3;
        // prints current score to corresponding div
        $('#score').text(currentTally);
        checkForWin();
    })  

    // click event for jewel four
    $('#four').on('click', function(){
        // adds jewel value to current tally
        currentTally = currentTally + num4;
        // prints current score to corresponding div
        $('#score').text(currentTally); 
        checkForWin();
    });

    // FUNCTIONS
    
    //resets game
    function reset() {
        // generates and prints new target number
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(randomNumber);

        // generates new jewel values
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);

        // resets and prints user tally
        currentTally = 0;
        $('#finalTotal').text(currentTally);
    }

    //player wins
    function winGame() {
        alert("You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    
    //player loses
    function loseGame(){
        alert("You lose!");
        losses++;
        $('#losses').text(losses);
        reset();
    }

    // evaluate win or lose
    function checkForWin() {
        if (currentTally == randomNumber) {
            winGame();
        } else if (currentTally > randomNumber) {
            loseGame();
        }
    }

  }); 