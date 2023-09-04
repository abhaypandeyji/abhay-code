console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// body.addEventListener('click', function(e){
//     body.style.backgroundColor = 'purple';
// });

body.addEventListener('mouseup', function(e) {
    body.style.backgroundColor = 'red';
});



buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    const ch = e.target.id;
    switch(ch){
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      default:
        body.style.backgroundColor =  e.target.id;
    }




    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    
  });
});