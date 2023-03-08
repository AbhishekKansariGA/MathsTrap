const additionNum = Math.floor(Math.random() * 100) * 6;

const substractNum = Math.floor(Math.random() * 10) * 2;

const multiplicationNum = Math.floor(Math.random() * 10) * 2;

const divisionNum = Math.floor(Math.random() * 10) * 2;

const threeRight = Math.floor(substractNum * multiplicationNum / divisionNum);

const questionText = `${additionNum}-${substractNum}*${multiplicationNum}/${divisionNum}`;

const mainAnswer = Math.floor(additionNum - threeRight);

const questionDisplay = document.querySelector(".card-title");
questionDisplay.innerHTML = questionText;

const btn = document.querySelector(".btn");

const newGame = document.querySelector(".newGame");

const textWrong = document.querySelector(".textWrong");

const textRight = document.querySelector(".textRight");

const mathsImg = document.querySelector(".imgMain");

const successImg = document.querySelector(".imgSuccess");

const errorImg = document.querySelector(".imgError");



btn.addEventListener("click", () => {
  let inputAnswer = document.getElementById("text").value.toUpperCase();

  if (inputAnswer == mainAnswer) {
    console.log("Right");
    textRight.innerHTML = `Good ${inputAnswer} is Right Answer`;
    textWrong.innerHTML = "";
    newGame.style.display = "block";
    mathsImg.style.display = "none";
    successImg.style.display = "block";
    errorImg.style.display = "none";
  }
  else {
    console.log("wrong");
    textWrong.innerHTML = `${inputAnswer} is Wrong Answer`;
    textRight.innerHTML = "";
    newGame.style.display = "block";
    errorImg.style.display = "block"
    successImg.style.display = "none";
    mathsImg.style.display = "none";
  }
});

let game = newGame.addEventListener("click", () => {
  window.location.reload();
})