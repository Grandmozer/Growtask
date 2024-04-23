let sw = document.getElementById('sliderWindow'),
  mi = document.getElementsByClassName('miniImg'),
  btns = document.querySelector('.galary-btns'),
  btn = btns.querySelectorAll('.galary-btn'),
  arrOfImg = [
    'src/img/galary/image1.jpg',
    'src/img/galary/image2.jpg',
    'src/img/galary/image3.jpg',
  ];

sw.style.backgroundImage = 'url(' + arrOfImg[0] + ')';
btns.children[0].classList.add('galary-btn-active');

function startImg() {
  for (let i = 0; i < mi.length; i++) {
    mi[i].style.backgroundImage = 'url(' + arrOfImg[i] + ')';
  }
}

startImg();

for (let k = 0; k < mi.length; k++) {
  btns.children[k].onclick = function (e) {
    for (let i = 0; i < btn.length; i++) {
      btns.children[i].classList.remove('galary-btn-active');
    }
    sw.style.backgroundImage = 'url(' + arrOfImg[k] + ')';
    btns.children[k].classList.add('galary-btn-active');
  };
}
