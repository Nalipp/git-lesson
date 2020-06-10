let button = document.querySelector('button');
let body = document.querySelector('body');

button.addEventListener('click', function(evt) {
  evt.preventDefault();

  let input = document.querySelector('input');

  let p = document.createElement('p');
  p.innerHTML = input.value;

  let span = document.createElement('span');
  span.innerHTML = ' X';

  span.addEventListener('click', function(e) {

    e.target.parentNode.innerHTML = '';
  });

  p.append(span);
  body.append(p);

  input.value = '';

  // next we need to add a checkbox to put a line through the todo
});



