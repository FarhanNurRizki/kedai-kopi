// Toggle Class Active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika Hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  SearchForm.classList.remove("active");
  ShoppingCart.classList.remove("active");
  e.preventDefault();
};

// Toggle Class active untuk search form

const SearchForm = document.querySelector(".search-form");
const SearchBox = document.querySelector("#search-box");

// ketika search button di klik

document.querySelector("#search-button").onclick = (e) => {
  SearchForm.classList.toggle("active");
  SearchBox.focus();
  navbarNav.classList.remove("active");
  ShoppingCart.classList.remove("active");
  e.preventDefault();
};

// Toggle class active untuk Shopping cart

const ShoppingCart = document.querySelector(".shopping-cart");

// Ketika Shopping cart button di klik

document.querySelector("#shopping-cart-button").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  navbarNav.classList.remove("active");
  SearchForm.classList.remove("active");
  e.preventDefault();
};
// klik dimana saja untuk menghilangkan sidebar

const hamburger = document.querySelector("#hamburger-menu");
const SearchButton = document.querySelector("#search-button");
const ShoppingCartButton = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    !SearchButton.contains(e.target) &&
    !SearchForm.contains(e.target) &&
    !ShoppingCartButton.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
    SearchForm.classList.remove("active");
    ShoppingCart.classList.remove("active");
  }
});

// modal box

const ItemDetailModal = document.querySelector("#item-detail-modal");
const ItemDetailButton = document.querySelectorAll(".item-detail-button");

ItemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    ItemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  ItemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik dimana saja Modal hilang

window.onclick = (e) => {
  if (e.target === ItemDetailModal) {
    ItemDetailModal.style.display = "none";
  }
};
