window.onload = function() {
    var wins = 0;
    var limbs = 7;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
      "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
      "t", "u", "v", "w", "x", "y", "z"];
    var monster = ["pyramid-head", "leatherface", "xenomorph", "cenobite", "predator", "terminator", "freddy", "jason", "babadook", "jaws", "brundlefly", "gremlin", "pennywise", "jigsaw", "samara", "hannibal", "michael-myers"];
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
      confirm();
    }

    confirm = function() {
      document.onkeypress = function(event) {
        var guess = event.key;
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
          play();
          $("#prizename").empty();
        }

        $(".class").empty();
        if (right === word.length || right > word.length) {
          guess.onkeyup = null;
          var audio = new Audio('assets/yay.mp3');
          audio.play();
          wins++;
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("prize").src = "assets/images/" + word + ".png";
          document.getElementById("prizename").innerHTML = word;
          play();
        }
      }
    }

    play = function() {
      console.log(word);
      guesses = [];
      wrong = [];
      limbs = 7;
      right = 0;
      game();
    }

    play();
    confirm();
    game();

    document.getElementById("wins").innerHTML = wins;
}
