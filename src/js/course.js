const leftButton = document.querySelector('.button-practice-prev');
const rightButton = document.querySelector('.button-practice-next');
const cardContainer = document.querySelector('.practice-container');
const card = document.querySelectorAll('.card-practice');
const n = card.length;

let posLeft = Array(n);
for (let i = 0; i < n; i++) {
  posLeft[i] = card[i].offsetLeft;
}

let index = 0;
leftButton.addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  cardContainer.scrollTo({
    left: posLeft[index],
    behavior: 'smooth',
  });
});

rightButton.addEventListener('click', () => {
  index = Math.min(index + 1, n - 1);
  cardContainer.scrollTo({
    left: posLeft[index],
    behavior: 'smooth',
  });
});
