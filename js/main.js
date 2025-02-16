const btn = document.querySelector('#btn');
const textForColor = document.querySelector('.color');

const arrayForColor = [
"rgb(255, 223, 186)",
"rgb(255, 218, 185)",
"rgb(255, 200, 221)",
"rgb(255, 223, 211)",
"rgb(255, 239, 213)",
"rgb(255, 245, 225)",
"rgb(255, 235, 205)",
"rgb(255, 228, 196)",
"rgb(255, 240, 219)",
"rgb(255, 248, 220)",
"rgb(255, 236, 209)",
"rgb(255, 224, 189)",
"rgb(255, 230, 199)",
"rgb(255, 242, 222)",
"rgb(255, 250, 240)"
];
btn.addEventListener('click', ()=> {
  document.body.style.backgroundColor = arrayForColor[randomNumber()];
  textForColor.textContent = arrayForColor[randomNumber()];
  textForColor.style.color = arrayForColor[randomNumber()];


})

function randomNumber() {
  return Math.floor(Math.random() * arrayForColor.length);
}

