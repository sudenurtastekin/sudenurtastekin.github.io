let hesapla = document.querySelector("#hesaplaBtn");
let birinciNot = document.querySelector("#birinciNot");
let ikinciNot = document.querySelector("#ikinciNot");
let ucuncuNot = document.querySelector("#ucuncuNot");
let sonuc = document.querySelector("#sonuc");

function hesaplaOrtalama() {
  let not1 = Number(birinciNot.value);
  let not2 = Number(ikinciNot.value);
  let not3 = Number(ucuncuNot.value);

  let notToplam = not1 + not2 + not3;
  let ortalama = notToplam / 3;

  sonuc.innerHTML = ortalama;

  if (ortalama >= 50) {
    alert("Geçtin");
  } else {
    alert("Kaldın");
  }
}

hesapla.addEventListener("click", hesaplaOrtalama);
