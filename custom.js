const modalBtn3 = document.getElementById("p_modal_button3");

modalBtn3.addEventListener("click", (evt) => {
  evt.preventDefault(); 
  evt.stopPropagation();
  const answers = document.querySelectorAll("#p_modal3 .modal-body p");
  const userAnswers = [];
  answers.forEach(function (answer) {
    userAnswers.push(answer.textContent.trim());
  });
  console.log("Ответы пользователя:");
  console.log(userAnswers);
  
});