// Popup open and close
var popupOverlayAddToCart = document.querySelector(".overlay--add-to-cart");
var popupAddToCart = document.querySelector(".modal--add-to-cart");
var openAddToCart = document.querySelector(".featured__add-to-cart");
var openAddToCartInCatalog = document.querySelectorAll(".item-card__cart-link");

function openCartModal(evt) {
  evt.preventDefault();
  popupOverlayAddToCart.classList.add("overlay--show");
  popupAddToCart.classList.add("modal--show");
}

if (openAddToCart) {
  openAddToCart.addEventListener("click", openCartModal);
}

if (openAddToCartInCatalog) {
  for (var item = 0; item < openAddToCartInCatalog.length; item++) {
    openAddToCartInCatalog[item].addEventListener("click", openCartModal);
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupOverlayAddToCart.classList.remove("overlay--show");
    popupAddToCart.classList.remove("modal--show");
  }
});

if (popupOverlayAddToCart) {
  popupOverlayAddToCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupOverlayAddToCart.classList.remove("overlay--show");
    popupAddToCart.classList.remove("modal--show");
  });
};
