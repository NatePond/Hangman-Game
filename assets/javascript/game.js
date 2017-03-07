window.onload = function() {
    var wins = 0;
    var limbs = 6;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"
    ];
    var monster = ["xenomorph", "cenobite", "predator", "pyramid-head", "terminator", "freddy", "jason", "babadook", "jaws", "brundlefly", "gremlin", "pennywise", "jigsaw", "samara", "hannibal", "michael-myers", "leatherface"];
    var word;
    word = monster[Math.floor(Math.random() * monster.length)]
    var guess;
    var guesses = [];
    var wrong = [];
    var right = 0;
    word = monster[Math.floor(Math.random() * monster.length)]
    document.getElementById("limbs").innerHTML = limbs;
    var wordBlank = document.getElementById("blanks");
    var correct = document.createElement("ul");

    game = function() {
      $(".blanks").empty();
      $(".guessed").empty();
      word = monster[Math.floor(Math.random() * monster.length)]
        for (var i = 0; i < word.length; i++) {
            correct.setAttribute("class", "blanks");
            guess = document.createElement("li");
            guess.setAttribute("class", "guess");
            if (word[i] === "-") {
                guess.innerHTML = "-";
                right++;
            } else {
                guess.innerHTML = "_";
            }
            guesses.push(guess);
            wordBlank.appendChild(correct);
            correct.appendChild(guess);
            document.getElementById("limbs").innerHTML = limbs;
        }
      check();
    }
    check = function() {
      document.onkeypress = function(event) {
          var guess = event.key;
          guess.onkeydown = null;
          for (var i = 0; i < word.length; i++) {
              if (word[i] === guess) {
                  guesses[i].innerHTML = guess;
                  right++;
              }
          }
          var i = (word.indexOf(guess))
          if (i === -1) {
              limbs--;
              wrong.push(guess);
              document.getElementById("guessed").innerHTML = wrong;
          }
          console.log(limbs);
          document.getElementById("limbs").innerHTML = limbs;

          if (limbs < 1) {
              $(".guess").empty();
              var audio = new Audio('assets/Disappointed.mp3');
              audio.play();
              document.getElementById("prize").src = "assets/images/fail.png";
              correct.parentNode.removeChild(correct);
              limbs = 6;
              right = 0;
              $(".blanks").empty();
              $(".guessed").empty();
              game();
              $(".blanks").empty();
              $(".guessed").empty();
              limbs = 6;
              right = 0;
              game();
              play();
          }
              $(".class").empty();
          if (right === word.length) {
              guess.onkeyup = null;
              var audio = new Audio('assets/yay.mp3');
              audio.play();
              wins++;
              document.getElementById("wins").innerHTML = wins;
              document.getElementById("prize").src = "assets/images/" + word + ".png";
              // correct.parentNode.removeChild(correct);
              // guessed.parentNode.removeChild(guessed);
              // guesses = [ ];
              // wrong = [ ]; 
              limbs = 6;
              right = 0;
              document.getElementById("blanks").html = ""
              document.getElementById("blanks").html = ""
              $(".blanks").empty();
              $(".guessed").empty();
              game();
              $(".blanks").empty();
              $(".guessed").empty();
              limbs = 6;
              right = 0;
              game();
              play();

          }
          
      }
    }

     play = function() {
              var monster = ["xenomorph", "cenobite", "predator", "pyramid-head", "terminator", "freddy", "jason", "babadook", "jaws", "brundlefly", "gremlin", "pennywise", "jigsaw", "samara", "hannibal", "michael myers", "leatherface"];
              word = monster[Math.floor(Math.random() * monster.length)]
              console.log(word);
              guesses = [];
              wrong = [];
              limbs = 6;
              right = 0;
              document.getElementById("blanks").html = ""
              $(".blanks").empty();
              $(".guessed").empty();
              game();
              check();
      }




   



console.log(word);

game();
  



document.getElementById("wins").innerHTML = wins;

}
