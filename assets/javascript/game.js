

var winCount = 0;
    var lossCount = 0;
    var guessLeft = 9;
    var guessesEntered = []; 
    var computerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

    document.onkeyup = function(event) {
        var userChoice = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computerChoice = computerLetter[Math.floor(Math.random()*computerLetter.length)]; 
        guessesEntered.push(userChoice); 
        if (userChoice == computerChoice) {
            winCount++;
            alert('You have guessed corrrectly. You Win!');
            guessLeft = 9; 
            guessesEntered.length = 0; 
        }
        else if (guessLeft == 0){
            lossCount++;
            alert('You have guessed incorrrectly. You Lose! Try again.');
            guessLeft = 9;
            guessesEntered.length = 0;
        }
        else if (userChoice !== computerChoice){
            guessLeft--; 
        }  
            
        var display = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
            winCount + 
        "</p>" +
        "<p>Total Losses: " + 
            lossCount + 
        "</p>" +
        "<p>Guesses Left: " + 
            guessLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
            guessesEntered +
        "</p>"
        ;
        
        document.querySelector('#game').innerHTML = display;
    }