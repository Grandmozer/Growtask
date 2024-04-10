let sw = document.getElementById('sliderWindow'),
  mi = document.getElementsByClassName('miniImg'),
  btn = document.querySelector('.galary-btns'),
  arrOfImg = [
    'src/img/galary/image1.jpg',
    'src/img/galary/image2.jpg',
    'src/img/galary/image3.jpg',
  ];

sw.style.backgroundImage = 'url(' + arrOfImg[0] + ')';

function startImg() {
  for (var i = 0; i < mi.length; i++) {
    mi[i].style.backgroundImage = 'url(' + arrOfImg[i] + ')';
  }
}

startImg();

for (let k = 0; k < mi.length; k++) {
  btn.children[k].onclick = function (e) {
    sw.style.backgroundImage = 'url(' + arrOfImg[k] + ')';
  };
}
