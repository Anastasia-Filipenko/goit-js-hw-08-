import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');



form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));


saveForm();

function onInput() {
  const formData = {
    email: input.value,
    textarea: textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};



function saveForm() {
  const message = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (message) {
    input.value = message.email;
    textarea.value = message.textarea;
  }
};

function onSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};