import { $, $$, isTag } from './src/utils.js';
import { badWordExists } from './src/badwords.js';
import { bindSearchEvents } from './src/searchLinks.js';

const html = $('html');
const searchInput = $('#search-input');
const searchButton = $('#menu > .search-btn');
const autocomplete = $('#autocomplete');
const menuList = $('#menu > ul.list');
const baseUrl = 'https://api.datamuse.com';
const max = 500;

$('#year').textContent = new Date().getFullYear();

searchInput.focus();
bindSearchEvents($, searchInput);

// Generate dropdown list
['keyup', 'click'].forEach(event => {
  searchInput.addEventListener(event, (e) => {
    const str = e.target.value.toLowerCase();
    if (str) {
      searchButton.classList.remove('hide');
      menuList.classList.remove('hide');
      searchInput.classList.remove('badword');
      if (badWordExists(str) || isTag(str)) invalidInput();
      getWords(str).then(list => {
        const sortedList = list.sort((a, b) => a.word.localeCompare(b.word));
        const found = findMatch(sortedList, str);
        if (found.length && !badWordExists(str) && !isTag(str)) {
          autocomplete.innerHTML = found;
          autocomplete.classList.remove('hide');
          searchInput.classList.add('results');
          bindClickEvents();
        }
      });
    } else {
      emptyInput();
    }
  }, true);
});

// Event to close dropdown with outside click 
html.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') {
    autocomplete.classList.add('hide');
    searchInput.classList.remove('results');
  }
}, true);

// Events to fill input from dropdown
function bindClickEvents() {
  const items = $$('#autocomplete > ul > li');
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      searchInput.value = e.target.textContent;
      searchInput.focus();
      autocomplete.classList.add('hide');
      searchInput.classList.remove('results');
    }, true);
  });
}

// Get data from API
function getWords(str) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/sug?s=${str}&max=${max}`;
    return fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    }, error => {
      reject(new Error(error.message));
    });
  });
}

// Generate HTML for dropdown
function findMatch(arr, str) {
  const list = arr.reduce((acc, item) => {
    if (str === item.word.substring(0, str.length)) {
      acc += `<li>${item.word}</li>`;
    }
    return acc;
  }, '');
  return list.length ? `<ul>${list}</ul>` : false;
}

function emptyInput() {
  autocomplete.classList.add('hide');
  searchInput.classList.remove('results');
  searchButton.classList.add('hide');
  menuList.classList.add('hide');
}

function invalidInput() {
  autocomplete.classList.add('hide');
  searchInput.classList.add('badword');
  searchInput.classList.remove('results');
  searchButton.classList.add('hide');
  menuList.classList.add('hide');
}