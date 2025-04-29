let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart!");
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const cartItems = document.getElementById("cart-items");
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = storedCart.map(item => `<li>${item}</li>`).join('');
}

function checkout() {
  alert("Order placed!");
  localStorage.removeItem("cart");
  document.getElementById("cart-items").innerHTML = "";
}

window.onload = () => {
  if (document.getElementById("cart-items")) {
    loadCart();
  }
};
