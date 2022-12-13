
const select = document.getElementById('system-type-select');
const selectBtn = select.querySelector('.select-control');
const selectOptions = select.querySelectorAll('input[name="system-type"]');
const selectBtnLabel = document.getElementById('select-label');
const uploadBtn = document.getElementById('upload');
const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__navigation');
const navLinks = document.querySelectorAll('.navigation__link');

burger.addEventListener('click', () => {
  toggleActive(burger, 'burger-menu');
  toggleActive(nav, 'header__navigation');
  document.body.classList.toggle('lock-scroll');
})

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    navLinks.forEach((link) => {
      if (e.target.closest('.navigation__link') !== link) {
        link.classList.remove('navigation__link_active');
      } else {
        link.classList.add('navigation__link_active');
      }
    })
    closeBurger();
  })
})

selectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleActive(select, 'select');
});

selectOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    const selectedId = e.target.id;
    setSelected(selectedId);
    toggleActive(select, 'select')
  })
})

uploadBtn.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    uploadBtn.querySelector('label').click();
  }
})

function toggleActive(element, basicClass) { //node, basic class to which _active will be applied
  const activeClass = `${basicClass}_active`;
  element.classList.toggle(activeClass);
}

function setSelected(id) {
  const selectedLabel = select.querySelector(`label[for='${id}']`).innerText;
  selectBtnLabel.innerText = selectedLabel;
}

function closeBurger() {
  burger.classList.remove('burger-menu_active');
  nav.classList.remove('header__navigation_active');
}


