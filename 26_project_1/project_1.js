
console.log("Yash JS PROJECT 1")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const currentColor = document.querySelector('#current-color');

buttons.forEach(function(button){

  button.addEventListener('click', function(e){

    const color = e.target.id;

    body.style.backgroundColor = color;

    currentColor.textContent = color;

    if(color === 'white' || color === 'yellow'){
      body.style.color = 'black';
    } else {
      body.style.color = 'white';
    }

  });

});

