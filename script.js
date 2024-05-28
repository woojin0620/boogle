const btn = document.getElementById("btn");
const w = window.innerWidth;
const h = window.innerHeight;
const input = document.querySelector("#input");
const fake = document.querySelector(".fake");
const real = document.querySelector(".real");

input.addEventListener('mouseenter', moveButton);
input.addEventListener('mousedown', moveStop);

function moveButton(){ 
  const btnRect = btn.getBoundingClientRect();
  var newTop = getRandomInt(0, h - 60);
  var newLeft = getRandomInt(0, w - 120);
  
  fake.style.color = 'transparent';
  fake.style.transition = '3s';
  real.style.display = '';
  real.style.color = '#4285f4';
  real.style.transition = '5s';

  document.getElementsByTagName('input')[0].placeholder = 'Catch me if you can ^^';
  while(btnRect.y - 60 > 0 && newTop >= btnRect.y - 60 && btnRect.y + 120 < h && newTop <= btnRect.y + 120){
    newTop = getRandomInt(0, h - 60);
  }
  while(btnRect.x - 120 > 0 && newLeft >= btnRect.x - 120 && btnRect.x + 240 < w && newLeft <= btnRect.x + 240){
    newLeft = getRandomInt(0, w - 120);
  }
  btn.style.position = 'absolute';
  btn.style.top = newTop + 'px';
  btn.style.left = newLeft + 'px';
  btn.style.animation = 'mymove 1s infinite';
  
  setTimeout(() => {
  }, 1000);

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveStop(){
  document.getElementsByTagName('input')[0].placeholder = '훌륭하시군요. 검색을 허락합니다.'
  input.removeEventListener('mouseenter', moveButton);
  btn.style.animation = 'none';
}


