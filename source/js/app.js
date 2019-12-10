var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// Popup open and close
var popupOverlayAddToCart = document.querySelector(".overlay--add-to-cart");
var popupAddToCart = document.querySelector(".modal--add-to-cart");
var openAddToCart = document.querySelector(".add-to-cart__link");

openAddToCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOverlayAddToCart.classList.add("overlay--show");
  popupAddToCart.classList.add("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupOverlayAddToCart.classList.remove("overlay--show");
    popupAddToCart.classList.remove("modal--show");
  }
});

popupOverlayAddToCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOverlayAddToCart.classList.remove("overlay--show");
  popupAddToCart.classList.remove("modal--show");
});
