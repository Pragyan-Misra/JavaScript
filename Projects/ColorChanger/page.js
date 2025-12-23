const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
console.log(body)
buttons.forEach( (butt) => {
  butt.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target);
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
    }
  })
})