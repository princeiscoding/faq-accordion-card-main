"use strict";
const questionAndArrow = document.querySelectorAll(".flex");

questionAndArrow.forEach((quest) => {
  quest.addEventListener("click", (e) => {
    const triviaQuestion = e.target.closest(".trivia");
    const answer = triviaQuestion.querySelector(".answer");
    const arrow = triviaQuestion.querySelector(".arrow");
    const question = triviaQuestion.querySelector(".question");

    function openAndClose(fontWeight, angle) {
      question.style.fontWeight = `${fontWeight}`;
      answer.classList.toggle("hidden");
      arrow.style.transform = `rotate(${angle}deg)`;
    }
    if (answer.classList.contains("hidden")) {
      openAndClose(700, 180);
    } else {
      openAndClose(400, 0);
    }

    // without using a function

    // if (answer.classList.contains("hidden")) {
    //   question.style.fontWeight = "700";
    //   answer.classList.remove("hidden");
    //   arrow.style.transform = "rotate(180deg)";
    // } else {
    //   question.style.fontWeight = "400";
    //   answer.classList.add("hidden");
    //   arrow.style.transform = "rotate(0deg)";
    // }
  });
});
