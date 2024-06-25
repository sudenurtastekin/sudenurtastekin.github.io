let contacts = [];
let contactId = 0;

if (localStorage.contacts) {
  contacts = JSON.parse(localStorage.contacts);
  renderContacts();
}

if (localStorage.contactId) {
  contactId = Number(localStorage.contactId);
}

function generateContactId() {
  contactId++;
  localStorage.contactId = contactId;
  return contactId;
}

document.querySelector('.contact-form').addEventListener('submit', handleContactForm);
document.querySelector('.clear').addEventListener('click', clearContacts);

function handleContactForm(e) {
  e.preventDefault();

  let formData = new FormData(e.target);
  let formObj = Object.fromEntries(formData);
  e.target.reset();

  if (formObj.id !== '') { // Güncelle
    let contact = contacts.find(x => x.id === Number(formObj.id));
    contact.ad = formObj.ad;
    contact.soyad = formObj.soyad;
    contact.phone = formObj.phone;
    contact.email = formObj.email;
    contact.message = formObj.message;
  } else { // Yeni ekle
    formObj.id = generateContactId();
    contacts.push(formObj);
  }

  saveContacts();
  renderContacts();
}

function saveContacts() {
  localStorage.contacts = JSON.stringify(contacts);
}

function createContactHtml(contact) {
  return `<div class="contact">
        <div class="contactEditControls">
          <a class="contactEditBtn" href="#" data-contactid="${contact.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
          </a>
          <a class="contactDeleteBtn" href="#" data-contactid="${contact.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </a>
        </div>
        <h3>${contact.ad} ${contact.soyad}</h3>
        <p>Telefon: ${contact.phone}</p>
        <p>E-posta Adresi: ${contact.email}</p>
        <p>Adres: ${contact.message}</p>
      </div>`;
}

function handleDeleteBtn(e) {
  e.preventDefault();

  if (!confirm('Emin misiniz?')) {
    return;
  }

  contacts = contacts.filter(x => x.id !== Number(this.dataset.contactid));
  saveContacts();
  renderContacts();
}

function handleEditBtn(e) {
  e.preventDefault();

  let contactId = Number(this.dataset.contactid);
  let contact = contacts.find(x => x.id === contactId);
  document.querySelector('input[name="id"]').value = contact.id;
  document.querySelector('input[name="ad"]').value = contact.ad;
  document.querySelector('input[name="soyad"]').value = contact.soyad;
  document.querySelector('input[name="phone"]').value = contact.phone;
  document.querySelector('input[name="email"]').value = contact.email;
  
  document.querySelector('textarea[name="message"]').value = contact.message;
}

function renderContacts() {
  const contactsContainer = document.querySelector('.print');
  contactsContainer.innerHTML = contacts.map(x => createContactHtml(x)).join('');
  document.querySelectorAll('.contactDeleteBtn')
    .forEach(x => x.addEventListener('click', handleDeleteBtn));

  document.querySelectorAll('.contactEditBtn')
    .forEach(x => x.addEventListener('click', handleEditBtn));
}

function clearContacts() {
  if (confirm('Tüm kayıtları silmek istediğinizden emin misiniz?')) {
    localStorage.clear();
    contacts = [];
    renderContacts();
  }
}
