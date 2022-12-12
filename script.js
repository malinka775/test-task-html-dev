
const select = document.getElementById('system-type-select');
const selectBtn = select.querySelector('.select-control');
const selectOptions = select.querySelectorAll('input[name="system-type"]');
const selectBtnLabel = document.getElementById('select-label');

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


const toggleActive = (element, basicClass) => { //node, basic class to which _active will be applied
  const activeClass = `${basicClass}_active`;
  element.classList.toggle(activeClass);
}

const setSelected = (id) => {
  const selectedLabel = select.querySelector(`label[for='${id}']`).innerText;
  selectBtnLabel.innerText = selectedLabel;
}

