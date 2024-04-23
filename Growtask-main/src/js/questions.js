function hiden() {
  let text = document.querySelectorAll('.question-text'),
    btn = document.querySelectorAll('.question-plus'),
    question = document.querySelectorAll('.question');

  text.forEach((element) => element.classList.add('do-not-display'));

  question.forEach(function (button, index) {
    button.addEventListener('click', function () {
      question.forEach(function (answer, i) {
        if (i !== index) {
          answer.classList.remove('active');
        }
      });
      const currentAnswer = question[index];
      currentAnswer.classList.toggle('active');
    });
  });
}

hiden();
