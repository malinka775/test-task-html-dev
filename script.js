
const select = document.getElementById('system-type-select');
const selectBtn = select.querySelector('.select-control');
const selectOptions = select.querySelectorAll('input[name="system-type"]');
const selectBtnLabel = document.getElementById('select-label');
const uploadBtn = document.getElementById('upload');

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

const toggleActive = (element, basicClass) => { //node, basic class to which _active will be applied
  const activeClass = `${basicClass}_active`;
  element.classList.toggle(activeClass);
}

const setSelected = (id) => {
  const selectedLabel = select.querySelector(`label[for='${id}']`).innerText;
  selectBtnLabel.innerText = selectedLabel;
}


