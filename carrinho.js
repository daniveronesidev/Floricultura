document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    let cart = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const product = event.target.getAttribute("data-product");
        const price = parseFloat(event.target.getAttribute("data-price"));
        
        cart.push({ product, price });
        total += price;

        updateCartUI();
    }

    function updateCartUI() {
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.product} - R$${item.price}`;
            cartItemsList.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
    }
});
