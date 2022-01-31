

function roll(){
  randomNumber1 = Math.floor(Math.random() * 6 + 1);

  randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById("img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document.getElementById("img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  const element = document.getElementById("result-text");

  if (randomNumber1 > randomNumber2){
    element.innerHTML = "🚩 Player 1 Win";
  } else if (randomNumber1 < randomNumber2){
    element.innerHTML = "Player 2 Win 🚩";
  }else {
    element.innerHTML = "✌️ Draw! ✌️";
  }

}
