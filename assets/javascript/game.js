window.onload = function () {
  var wins = 0;
  var limbs = 6;
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
  var monster = ["xenomorph", "cenobite", "predator", "pyramid-head", "terminator", "freddy", "jason", "babadook", "jaws", "brundlefly", "gremlin", "pennywise", "jigsaw", "samara", "hannibal", "michael myers"];
  var word ;
  word = monster[Math.floor(Math.random() * monster.length)]
  var guess ; 
  var guesses = [ ];
  var wrong = [ ];
  var right = 0;
  word = monster[Math.floor(Math.random() * monster.length)]
    document.getElementById("limbs").innerHTML = limbs; 
    var wordBlank = document.getElementById("blanks");
    var correct = document.createElement("ul");
  game = function () { 
    
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "blanks");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === " ") {
        guess.innerHTML = " ";
      } 
      else {
        guess.innerHTML = "_";
      }
      guesses.push(guess);
      wordBlank.appendChild(correct);
      correct.appendChild(guess);
    }
  


    document.onkeypress = function(event) {
     var guess = event.key;
     guess.onkeypress = null;
      for (var i = 0; i < word.length; i++) {
         guess.up = null;
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          right++
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
        var audio = new Audio('assets/Disappointed.mp3');
        audio.play();
        document.getElementById("prize").src = "assets/images/fail.png";
        correct.parentNode.removeChild(correct);
        limbs = 6;
        right = 0;
        game();
      }

      if(right === word.length) {
        guess.onkeyup= null;
        var audio = new Audio('assets/yay.mp3');
        audio.play();
        document.getElementById("prize").src = "assets/images/" + word + ".png";
        correct.parentNode.removeChild(correct);
        correct.parentNode.removeChild()
        limbs = 6;
        right = 0;
        game();
      }

    }


  }


  
  console.log(word);

  game();



  document.getElementById("wins").innerHTML = wins;

}
