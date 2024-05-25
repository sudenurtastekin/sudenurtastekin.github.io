let hesapSonuc = document.querySelector('.hesapSonuc');
let btns = document.querySelectorAll('.buttons button:not(.del-button, .reset-button, .conclusion)');
function handleCalcClick() {
  hesapSonuc.innerText += this.innerText;
}
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleCalcClick);
}

let sonucBtn = document.querySelector('.conclusion');
function handleSonucClick() {
  hesapSonuc.innerText = eval(hesapSonuc.innerText);
}
sonucBtn.addEventListener('click', handleSonucClick);

let clrBtn = document.querySelector([".del-button", ".reset-button"]);
function handleClrClick() {
  hesapSonuc.innerText = '';
}
clrBtn.addEventListener('click', handleClrClick);