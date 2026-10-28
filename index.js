
let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cart").textContent = cart;
  alert("Toy added to cart!");
}
