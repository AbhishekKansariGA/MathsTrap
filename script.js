const algebraSectionMain = document.querySelector(".algebraSectionMain");

const cardSection = document.querySelector(".cardSection");

const dropdownItem = document.querySelectorAll(".dropdown-item");

for (var i = 0; i < dropdownItem.length; i++) {
  dropdownItem[0].addEventListener("click", () => {
    algebraSectionMain.style.display = "block";
    cardSection.style.display = "none";
  })
}













//Bodmas

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
});






// Algebra Material 

const algebraImg = document.querySelectorAll(".algebraImg");

function generateEquation() {

  const algebraNum1 = Math.floor(Math.random() * 10) + 1;

  const algebraNum2 = Math.floor(Math.random() * 10) + 1;

  const algebraNum3 = Math.floor(Math.random() * 110) + 1;

  const equationText = `${algebraNum1}x + ${algebraNum2} = ${algebraNum3}`;

  document.getElementById('equation').innerHTML = equationText;

  document.getElementById('answer').value = '';

  document.getElementById('result').innerHTML = '';

  document.getElementById('answer').focus();
  algebraImg[0].style.display = "block";
  algebraImg[1].style.display = "none";
  algebraImg[2].style.display = "none";
}

function checkAnswer() {

  const answer = document.getElementById('answer').value;

  const equationText = document.getElementById('equation').textContent;

  const equationValues = getEquationValues(equationText);

  const solution = solveEquation(equationValues);

  if (answer == solution) {

    document.getElementById('result').innerHTML = `${answer} is Correct!`;
    for (var i = 0; i < algebraImg.length; i++) {
      algebraImg[0].style.display = "none";
      algebraImg[1].style.display = "none";
      algebraImg[2].style.display = "block";
    }

  } else {

    document.getElementById('result').innerHTML = `${answer} is Incorrect. The correct answer is ${solution}`;

    algebraImg[0].style.display = "none";
    algebraImg[1].style.display = "block";
    algebraImg[2].style.display = "none";
  }
}

function getEquationValues(equationText) {

  const values = equationText.match(/(\d+)/g);

  return { a: parseInt(values[0]), b: parseInt(values[1]), c: parseInt(values[2]) };
}

function solveEquation(values) {

  const x = (values.c - values.b) / values.a;

  return x.toFixed(2);
}

// Generate the first equation when the page loads
window.onload = generateEquation;