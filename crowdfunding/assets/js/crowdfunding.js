let basliklar = [];

function render() {
  document.querySelector('.heroMain').innerText = basliklar.mainTitle;
  document.querySelector('.heroSub').innerText = basliklar.subTitle;
  document.querySelector(".backedCurrent").innerText = `$${basliklar.backed.current}`;
  document.querySelector(".backedTarget").innerText = `${basliklar.backed.target}`;
  document.querySelector(".totalBacker").innerText = `${basliklar.totalBackers}`;
  document.querySelector(".daysleft").innerText = `${basliklar.dayLeft}`;

  document.querySelector(".aboutHeader").innerText = `${basliklar.title}`;
  document.querySelector(".aboutParagraph").innerText = `${basliklar.description}`;
  
  
  let infoItem = document.querySelector(".infoItem");
  infoItem.innerHTML = basliklar.products.map(x =>
    `  <div class="infoItem">
    <div class="nameandpledge">
    <h5 class="itemName">${x.name}</h5>
    <h6 class="itemPledge">${x.pledge}</h6>
    </div>
    <p class="itemDescription">${x.description}</p>
    <div class="itemP">
    <span class="itemStock">${x.stock} left</span>
    <button ${x.stock === 0 ? 'class="disabled"' : ''}>Select Reward</button>
    </div>
    </div>`
  ).join('');
 
  


}



function init() {
  fetch('https://dummyjson.czaylabs.com.tr/api/exam/crowdfunding')
    .then(res => res.json())
    .then(res => {
      basliklar = res;
      render();
    });
}

init();
