// Toggle Class Active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika Hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  SearchForm.classList.remove("active");
  e.preventDefault();
};

// Toggle Class active untuk search form

const SearchForm = document.querySelector(".search-form");
const SearchBox = document.querySelector("#search-box");

// ketika search form di klik

document.querySelector("#search-button").onclick = (e) => {
  SearchForm.classList.toggle("active");
  SearchBox.focus();
  navbarNav.classList.remove("active");
  e.preventDefault();
};

// klik dimana saja untuk menghilangkan sidebar

const hamburger = document.querySelector("#hamburger-menu");
const SearchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    !SearchButton.contains(e.target) &&
    !SearchForm.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
    SearchForm.classList.remove("active");
  }
});
