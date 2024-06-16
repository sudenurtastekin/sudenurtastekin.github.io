let productForm = document.querySelector("#productForm");
let resetBtn = document.querySelector("#resetBtn");
let allProducts = document.querySelector("#allProducts");
let categoryProducts = document.querySelector("#categories");
let sonucToplam = document.querySelector("#sonucToplam");
let productList = [];

if (typeof localStorage.productList !== "undefined") {
  productList = JSON.parse(localStorage.productList);
  renderProductDetails();
}

function handleProductForm(e) {
  e.preventDefault();
  let formData = new FormData(productForm);
  let formObj = Object.fromEntries(formData);
  formObj.price = parseFloat(formObj.price); 
  productList.push(formObj);
  productForm.reset();
  renderProductDetails();
  save();
}

productForm.addEventListener("submit", handleProductForm);

function renderProductDetails() {
  allProducts.innerHTML = '';
  let total = 0;
  let categories = {};

  for (let i = 0; i < productList.length; i++) {
    total += productList[i].price;
    allProducts.innerHTML += ` 
      <h4>${productList[i].name}</h4>
      <p>${productList[i].description}</p>
      <p>Fiyat: ${productList[i].price} TL</p><br>
      <p>Kategori: ${productList[i].category}</p><br>
      <img src="${productList[i].image}" alt="${productList[i].name}" />
    `;

    
    if (!categories[productList[i].category]) {
      categories[productList[i].category] = [];
    }
    categories[productList[i].category].push(productList[i]);
  }

  sonucToplam.textContent = `${total} TL`;

  categoryProducts.innerHTML = '';
  for (let category in categories) {
    let sectionHTML = `<div><h3>${category}</h3>`;
    for (let i = 0; i < categories[category].length; i++) {
      let product = categories[category][i];
      sectionHTML += `
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p>Fiyat: ${product.price} TL</p><br>
        <img src="${product.image}" alt="${product.name}" />
      `;
    }
    sectionHTML += '</div>';
    categoryProducts.innerHTML += sectionHTML;
  }
}

function save() {
  localStorage.productList = JSON.stringify(productList);
}

resetBtn.addEventListener("click", clear);

function displayAllProducts() {
  allProducts.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    let product = '<div>' + products[i].name + ' - Kategoriler: ' + products[i].categories + '</div>';
    allProducts.innerHTML += product;
  }
}

function chosenCategory(selectedCategory) {
  if (selectedCategory === "Tüm") {
    renderProductDetails();
    return;
  }

  categoryProducts.innerHTML = ' ';
  let selectedProducts = [];
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].category === selectedCategory) {
      selectedProducts.push(productList[i]);
    }
  }

  for (let i = 0; i < selectedProducts.length; i++) {
    let product = selectedProducts[i];
    categoryProducts.innerHTML += `
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p>Fiyat: ${product.price} TL</p><br>
      <p>Kategori: ${product.category}</p><br>
      <img src="${product.image}" alt="${product.name}" />
    `;
  }

  if (selectedProducts.length === 0) {
    categoryProducts.innerHTML = 'Bu kategoride ürün yok.';
  }
}

let categoryRadios = document.querySelectorAll('#categoryOptions input[name="category"]');
for (let i = 0; i < categoryRadios.length; i++) {
  categoryRadios[i].addEventListener('change', function() {
    chosenCategory(categoryRadios[i].value);
  });
}

function clear() {
  localStorage.clear();
  productList = [];
  renderProductDetails();
}
