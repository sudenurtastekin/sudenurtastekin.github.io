let form = document.querySelector(".form")
let dayInput = document.querySelector('.day');
let monthInput = document.querySelector('.month');
let yearInput = document.querySelector('.year');

let ekleBtn = document.querySelector('.ekleBtn');
ekleBtn.addEventListener('click', calculateAge);

function handleForm(e){
  e.preventDefault();
}
form.addEventListener("submit", handleForm);



function calculateAge() {
  let birthDay = parseInt(dayInput.value);
  let birthMonth = parseInt(monthInput.value);
  let birthYear = parseInt(yearInput.value);


  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  if (ageDays < 0) {
    ageMonths--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let currentlyDaySpan = document.querySelector('.currentlyDay');
  let currentlyMonthSpan = document.querySelector('.currentlyMonth');
  let currentlyYearSpan = document.querySelector('.currentlyYear');

  currentlyYearSpan.innerHTML = `${ageYears} <h1>years</h1>`;
  currentlyMonthSpan.innerHTML = `${ageMonths} <h1>months</h1>`;
  currentlyDaySpan.innerHTML = `${ageDays} <h1>days</h1>`;
}
