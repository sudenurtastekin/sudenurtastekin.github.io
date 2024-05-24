let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomsayi = Math.round(Math.random(sayilar) * 10);

let tahmin = Number(prompt("1'den 10'a kadar bir sayı tahmin edin!"));
if (tahmin === randomsayi) {
  alert("Tahminin doğru! Tebrikler!");
} else {
  let tahmin2 = Number(prompt("Maalesef! Başka bir sayı daha tahmin edin"));
  if (tahmin2 === randomsayi) {
    alert("Tahminin doğru! Tebrikler!");
  } else {
    let tahmin3 = Number(prompt("Maalesef! Başka bir sayı daha tahmin edin"));
    alert("Şansınız yaver gitmedi.. Cevap: " + randomsayi) ;
  }
}