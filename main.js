import './style.css';
import './normalize.css';

document.getElementById('currentYear').textContent = new Date().getFullYear();

const searchForm = document.querySelector('.search__btn');
const searchInput = document.querySelector('.form-input');
console.log(searchForm, searchInput);
searchForm.addEventListener('click', (e) => {
  e.preventDefault();
  searchInput.classList.toggle('input-active');
});
