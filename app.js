let button = document.querySelector('button');
let body = document.querySelector('body');

let companies = [
  {
    name: 'google', 
    numEmployees: 200, 
    grossRevenue: 2000000
  }, 
  {
    name: 'apple', 
    numEmployees: 400, 
    grossRevenue: 40000
  }, 
  {
    name: 'yellow', 
    numEmployees: 150, 
    grossRevenue: 250000
  }, 
]

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

  // let ul = document.createElement('ul');
  // let li1 = document.createElement('li');
    
  // let li2 = document.createElement('li');
  // let li3 = document.createElement('li');

  
  body.append()

  input.value = '';
});



