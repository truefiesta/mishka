// Popup open and close
var popupOverlayAddToCart = document.querySelector(".overlay--add-to-cart");
var popupAddToCart = document.querySelector(".modal--add-to-cart");
var openAddToCart = document.querySelector(".add-to-cart__link");
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
  openAddToCartInCatalog.forEach(function (item) {
    item.addEventListener("click", openCartModal);
  });
}

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
