const listItems = document.querySelectorAll('.header-nav__item');
let activeIndex = -1;

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    if (activeIndex > -1) {
      listItems[activeIndex]
        .querySelector('.sub-menu')
        .classList.remove('is-active');
    }
    const subMenu = listItems[i].querySelector('.sub-menu');
    subMenu.classList.add('is-active');
    activeIndex = i;
  });
}
