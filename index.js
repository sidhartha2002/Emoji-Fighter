let emojis = [
  "🪳",
  "🐁",
  "🐿️",
  "🐈",
  "🐕",
  "👨",
  "🐂",
  "🐯",
  "🦍",
  "🦣",
  "🐉",
  "🦈",
  "🐋",
];

let stageEl = document.getElementById("stage");
let resultEl = document.getElementById("result");

function fight() {
  let choice_1 = Math.floor(Math.random() * emojis.length); // val 1
  let choice_2 = Math.floor(Math.random() * emojis.length); // val 2

  stageEl.textContent = emojis[choice_1] + " vs " + emojis[choice_2]; // adding the pics

  if (choice_1 > choice_2) {
    // val1 > val2
    resultEl.textContent = "Result : " + emojis[choice_1] + " Wins !";
  } else if (choice_1 === choice_2) {
    //val1 == val2
    resultEl.textContent = "Result :  TIE !";
  } else {
    // val2 > val1
    resultEl.textContent = "Result : " + emojis[choice_2] + " Wins !";
  }
}
