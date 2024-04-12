let menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  li = document.querySelectorAll('.header-nav-item');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

li.forEach(function (button) {
  button.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  });
});
