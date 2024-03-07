const toggelBtn = document.querySelector(".toggel-btn");
const toggelBtnIcon = document.querySelector(".toggel-btn i");
const dropDownMenu = document.querySelector(".drop-menu");

toggelBtn.onclick = function () {
  const isOpen = dropDownMenu.classList.toggle("open");
  toggelBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
