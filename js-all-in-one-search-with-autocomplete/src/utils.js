const createElement = function(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

const getElement = function(selector) {
  return document.querySelector(selector);
}

const getAllElements = function(selector) {
  return document.querySelectorAll(selector);
}

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function sanitize(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match) => (map[match]));
}

function isTag(str) {
  return /<[^>]*>/g.test(str);
}

export {
  $,
  $$,
  isTag
};