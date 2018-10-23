const card = document.getElementById('card');
let classes = card.classList;
console.log(classes);

card.onclick = function() {
  const result = classes.toggle('is-active');
  modal.classList = result;
}

const close = document.querySelector('.cancel');
