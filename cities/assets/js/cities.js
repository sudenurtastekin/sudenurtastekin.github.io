let cities = [
  {
    plateNumber: "24",
    city: "Erzincan",
    famousFor: "Döner",
    type: "Yiyecek"
  },
  {
    plateNumber: "01",
    city: "Adana",
    famousFor: "Kebap",
    type: "Yiyecek"
  },
  {
    plateNumber: "06",
    city: "Ankara",
    famousFor: "Simidi",
    type: "Yiyecek"
  },
  {
    plateNumber: "34",
    city: "İstanbul",
    famousFor: "Boğaz",
    type: "Yer"
  },
  {
    plateNumber: "35",
    city: "İzmir",
    famousFor: "Boyoz",
    type: "Yiyecek"
  },
  {
    plateNumber: "16",
    city: "Bursa",
    famousFor: "İskender Kebabı",
    type: "Yiyecek"
  },
  {
    plateNumber: "07",
    city: "Antalya",
    famousFor: "Düden Şelalesi",
    type: "Yer"
  },
  {
    plateNumber: "27",
    city: "Gaziantep",
    famousFor: "Baklava",
    type: "Yiyecek"
  },
  {
    plateNumber: "42",
    city: "Konya",
    famousFor: "Etli Ekmek",
    type: "Yiyecek"
  },
  {
    plateNumber: "61",
    city: "Trabzon",
    famousFor: "Hamsi",
    type: "Yiyecek"
  },
  {
    plateNumber: "38",
    city: "Kayseri",
    famousFor: "Mantı",
    type: "Yiyecek"
  },
  {
    plateNumber: "26",
    city: "Eskişehir",
    famousFor: "Lületaşı",
    type: "Yer"
  },
  {
    plateNumber: "53",
    city: "Rize",
    famousFor: "Çay",
    type: "Yiyecek"
  },
  {
    plateNumber: "25",
    city: "Erzurum",
    famousFor: "Cağ Kebabı",
    type: "Yiyecek"
  },
  {
    plateNumber: "21",
    city: "Diyarbakır",
    famousFor: "Karpuz",
    type: "Yiyecek"
  },
  {
    plateNumber: "47",
    city: "Mardin",
    famousFor: "Taş Evler",
    type: "Yer"
  },
  {
    plateNumber: "65",
    city: "Van",
    famousFor: "Van Kedisi",
    type: "Hayvan"
  },
  {
    plateNumber: "58",
    city: "Sivas",
    famousFor: "Kangal Köpeği",
    type: "Hayvan"
  },
  {
    plateNumber: "63",
    city: "Şanlıurfa",
    famousFor: "Balıklıgöl",
    type: "Yer"
  },
  {
    plateNumber: "33",
    city: "Mersin",
    famousFor: "Tantuni",
    type: "Yiyecek"
  },
  {
    plateNumber: "48",
    city: "Muğla",
    famousFor: "Turistik Yerleri",
    type: "Yer"
  },
  {
    plateNumber: "17",
    city: "Çanakkale",
    famousFor: "Tarihi Gelibolu Yarımadası",
    type: "Yer"
  },
  {
    plateNumber: "31",
    city: "Hatay",
    famousFor: "Antakya Mozaikleri",
    type: "Yer"
  },
  {
    plateNumber: "35",
    city: "İzmir",
    famousFor: "Efes Antik Kenti",
    type: "Yer"
  },
  {
    plateNumber: "50",
    city: "Nevşehir",
    famousFor: "Kapadokya",
    type: "Yer"
  },
  {
    plateNumber: "09",
    city: "Aydın",
    famousFor: "Milet Antik Kenti",
    type: "Yer"
  }
];

let tabloBody = document.querySelector(".sehir-tablosu tbody");
let yemekSehirleri = document.querySelector(".yemek-sehirleri");
let tarihiSehirler = document.querySelector(".tarihi-sehirler");
let tekPlakaSehirler = document.querySelector(".tek-plaka-sehirler");
let ciftPlakaSehirler = document.querySelector(".cift-plaka-sehirler");

let tabloHTML = '';
let yemekHTML = '';
let tarihiHTML = '';
let tekPlakaHTML = '';
let ciftPlakaHTML = '';

for (let i = 0; i < cities.length; i++) {
  let sehir = cities[i];

  tabloHTML += '<tr>';
  tabloHTML += '<td>' + sehir.plateNumber + '</td>';
  tabloHTML += '<td>' + sehir.city + '</td>';
  tabloHTML += '<td>' + sehir.famousFor + '</td>';
  tabloHTML += '<td>' + sehir.type + '</td>';
  tabloHTML += '</tr>';

  if (sehir.type === "Yiyecek") {
    yemekHTML += '<li>' + sehir.city + ' - ' + sehir.famousFor + '</li>';
  }

  if (sehir.type === "Yer") {
    tarihiHTML += '<li>' + sehir.city + ' - ' + sehir.famousFor + '</li>';
  }

  if (parseInt(sehir.plateNumber) % 2 === 0) {
    ciftPlakaHTML += '<li>' + sehir.city + ' - ' + sehir.plateNumber + '</li>';
  } else {
    tekPlakaHTML += '<li>' + sehir.city + ' - ' + sehir.plateNumber + '</li>';
  }
}

tabloBody.innerHTML = tabloHTML;
yemekSehirleri.innerHTML = yemekHTML;
tarihiSehirler.innerHTML = tarihiHTML;
tekPlakaSehirler.innerHTML = tekPlakaHTML;
ciftPlakaSehirler.innerHTML = ciftPlakaHTML;
