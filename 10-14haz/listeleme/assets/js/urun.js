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

  for (let i = 0; i < productList.length; i++) {
    total += productList[i].price;
    allProducts.innerHTML += ` 
      <h4>${productList[i].name}</h4>
      <p>${productList[i].description}</p>
      <p>Fiyat: ${productList[i].price} TL</p><br>
      <p>Kategori: ${productList[i].category}</p><br>
      <img src="${productList[i].image}" alt="${productList[i].name}" />
    `;
  }

  sonucToplam.textContent = `${total} TL`;

  categoryProducts.innerHTML = '';
  for (let i = 0; i < productList.length; i++) {
    categoryProducts.innerHTML += ` 
      <h4>${productList[i].name}</h4>
      <p>${productList[i].description}</p>
      <p>Fiyat: ${productList[i].price} TL</p><br>
      <p>Kategori: ${productList[i].category}</p><br>
      <img src="${productList[i].image}" alt="${productList[i].name}" />
    `;
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
  categoryProducts.innerHTML = ' ';
  if (selectedCategory === "Tüm") {
    displayAllProducts();
    return;
  }

  if (selectedCategory) {
    for (let i = 0; i < products.length; i++) {
      let categories = products[i].categories.split(', ');
      for (let j = 0; j < categories.length; j++) {
        if (categories[j] === selectedCategory) {
          let productDiv = '<div>' + products[i].name + ' - Kategoriler: ' + products[i].categories + '</div>';
          categoryProducts.innerHTML += productDiv;
          break;
        }
      }
    }
  } else {
    categoryProducts.innerHTML = 'Lütfen bir kategori seçin.';
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