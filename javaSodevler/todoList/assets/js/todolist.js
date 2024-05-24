let btn = document.querySelector("#ekleBtn");

let liste = document.querySelector("#liste");
let todoTxt = document.querySelector("#todoTxt");

function listeyeEkle() {
  
  liste.innerHTML += "<li>" + todoTxt.value + "</li>";

}

btn.addEventListener("click", listeyeEkle);