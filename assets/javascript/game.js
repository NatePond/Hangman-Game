window.onload = function () {
  var wins = 0;
  var limbs = 6;
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
  var monster = ["xenomorphe", "cenobite", "predator", "pyramid-head", "terminator", "freddy", "jason", "babadook", "jaws", "brundlefly", "gremlin", "pennywise", "jigsaw", "samara", "hannibal", "michael myers"];
  var word ;
  word = monster[Math.floor(Math.random() * monster.length)]
  var guess ; 
  var guesses = [ ];
  game = function () {  
    wordSpan = function () {
      var wordBlank = document.getElementById("blanks");
      var correct = document.createElement("ul");
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
    }
    wordSpan();
  }


  input = function() {
    alphabet.onkeypress = function(event) {
      guess = event.key;
      this.setAttribute("class", "active");
      this.onkeyup = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
        }
      }
      var i = (word.indexOf(guess));
      if (i === -1) {
        limbs -= 1;
        wordSpan();
      }
      else {
        wordSpan();
      }
    }
  }

  console.log(word);

  input();

  game();

  document.getElementById("limbs").innerHTML = limbs

  document.getElementById("wins").innerHTML = wins

}


  //   document.getElementById("limbs").innerHTML = limbs

  //   document.getElementById("wins").innerHTML = wins


  // wordSpan();
  // game(); 