let movies = [];
let id = 0;

if(localStorage.movies) {
  movies = JSON.parse(localStorage.movies);
  renderMovies();
}

if(localStorage.id) {
  id = Number(localStorage.id);
}

function generateId() {
  id++;
  localStorage.id = id;
  return id;
}

addMovieBtn.addEventListener('click', () => { 
  modal.classList.remove('editModal');
  document.querySelector('input[name="id"]').value = "";
  modal.showModal();
});

function handleMovieForm() {
  let formData = new FormData(addMovieForm);
  let formObj = Object.fromEntries(formData);
  addMovieForm.reset();

  if(formObj.id !== '') { // guncelle
    let movie = movies.find(x => x.id === Number(formObj.id));
    movie.name = formObj.name;
    movie.poster = formObj.poster;
    movie.summary = formObj.summary;
    movie.score = formObj.score;
  } else { // yeni ekle
    formObj.id = generateId();
    movies.push(formObj);
  }

  save();
  renderMovies();
}

addMovieForm.addEventListener('submit', handleMovieForm);

function save() {
  localStorage.movies = JSON.stringify(movies);
}

function createMovieHtml(movie) {
  return `<div class="movie">
        <div class="movieEditControls">
          <a class="movieEditBtn" href="#" data-movieid="${movie.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
          </a>
          <a class="movieDeleteBtn" href="#" data-movieid="${movie.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </a>
        </div>
        <img src="${movie.poster}" alt="">
        <h3>${movie.name} <span>${movie.score}</span></h3>
        <p>${movie.summary}</p>
      </div>`;
}

function handleDeleteBtn(e) {
  e.preventDefault();
 
  if(!confirm('Emin misin?')) {
    return;

  }


  movies = movies.filter(x => x.id !== Number(this.dataset.movieid));
  
  save();
  renderMovies();
}

function handleEditBtn(e) {
  e.preventDefault();

  modal.classList.add('editModal');

  let movieId = Number(this.dataset.movieid);
  let movie = movies.find(x => x.id === movieId);
  document.querySelector('input[name="id"]').value = movie.id;
  document.querySelector('input[name="name"]').value = movie.name;
  document.querySelector('input[name="summary"]').value = movie.summary;
  document.querySelector('input[name="poster"]').value = movie.poster;
  document.querySelector('input[name="score"]').value = movie.score;
  modal.showModal();
}


function renderMovies() {
  movies.sort((a, b) => b.score - a.score); 
  moviesContainer.innerHTML = movies.map(x => createMovieHtml(x)).join('');
  document.querySelectorAll('.movieDeleteBtn')
    .forEach(x => x.addEventListener('click', handleDeleteBtn));

    document.querySelectorAll('.movieEditBtn')
    .forEach(x => x.addEventListener('click', handleEditBtn));
}