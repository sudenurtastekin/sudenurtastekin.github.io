let kilo = Number(prompt("Kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu giriniz"));

let endeks = Number(kilo / (boy * boy));

if (endeks >= 40) {
  alert("Morbid Obez çıktınız, ideal kilonuzun çok üstündesiniz!");
} else if (endeks >= 30) {
  alert("Obez çıktınız, ideal kilonuzun çok üstündesiniz!");
} else if (endeks >= 25) {
  alert("İdeal kilonuzun üstündesiniz!");
} else if (endeks >= 18) {
  alert("Böyle devam! İdeal kilonuzdasınız!");
} else (endeks < 18); {
  alert("İdeal kilonuzun altındasınız!")
}