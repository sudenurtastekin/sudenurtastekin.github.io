let ad = prompt("Maceraya Hoş Geldin! Adın nedir?")

let Steps = 1;

if (Steps === 1) {
  let choice = prompt("Merhaba " + ad + "! Ormanda kayboldun. Hangi yöne gitmek istersin?\n1: Sağa dön.\n2: Sola dön.");
  if (choice === '1') {
    Steps = 2;
  } else if (choice === '2') {
    Steps = 3;
  } else {
    alert("Lütfen geçerli bir seçenek girin.");
  }
}

if (Steps === 2) {
  let choice = prompt("Sağa döndün " + ad + " ve karşına bir nehir çıktı.\n1: Nehri geç.\n2: Nehri takip et.");
  if (choice === '1') {
    Steps = 4;
  } else if (choice === '2') {
    Steps = 5;
  } else {
    alert("Lütfen geçerli bir seçenek girin.");
  }
}

if (Steps === 3) {
  let choice = prompt("Sola döndün " + ad + " ve eski bir tapınak gördün.\n1: Tapınağa git.\n2: Tapınağı atla.");
  if (choice === '1') {
    Steps = 6;
  } else if (choice === '2') {
    Steps = 7;
  } else {
    alert("Lütfen geçerli bir seçenek girin.");
  }
}

if (Steps === 4) {
  let choice = prompt("Nehri geçtin " + ad + " ve bir dağa ulaştın.\n1: Dağa tırman.\n2: Dağın etrafından dolaş.");
  if (choice === '1') {
    Steps = 8;
  } else if (choice === '2') {
    Steps = 9;
  } else {
    alert("Lütfen geçerli bir seçenek girin.");
  }
}

if (Steps === 5) {
  let choice = prompt("Dikkat et " + ad + " nehri takip ederken vahşi hayvanlarla karşılaştın.\n1: Savaş.\n2: Kaç.");
  if (choice === '1') {
    Steps = 10;
  } else if (choice === '2') {
    Steps = 11;
  } else {
    alert("Lütfen geçerli bir seçenek girin.");
  }
}

if (Steps === 6) {
  alert("Tapınakta hazine buldun, " + ad + ".  Maceran sona erdi.");
}

if (Steps === 7) {
  alert("Tapınağı atlayarak başka bir bölgeye ulaştın " + ad + ". Maceran sona erdi.");
}

if (Steps === 8) {
  alert("Dağa tırmanırken bir fırtınaya yakalandın " + ad + ". Maceran sona erdi.");
}

if (Steps === 9) {
  alert("Dağın etrafından dolaşıp güvenli bir köye ulaştın " + ad + ".  Maceran sona erdi.");
}

if (Steps === 10) {
  alert("Vahşi hayvanlarla savaşırken yaralandın " + ad + ".  Maceran sona erdi.");
}

if (Steps === 11) {
  alert("Vahşi hayvanlardan kaçarken kayboldun " + ad + ".  Maceran sona erdi.");
}
