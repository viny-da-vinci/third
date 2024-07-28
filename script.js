let cart = [];

function updatePrice(selectElement) {
    const priceElement = selectElement.parentElement.nextElementSibling;
    priceElement.textContent = `$${selectElement.value}`;
}

function addToCart(productName, productPrice, quantity) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: quantity
    };

    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push(product);
    }

    updateCartPopup();
    openCartPopup();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartPopup();
}

function updateCartPopup() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name}</p>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });

    const cartTotalPriceElement = document.getElementById('cart-total-price');
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalPriceElement.textContent = `$${totalPrice}`;
}

function openCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'block';
}

function closeCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'none';
}

document.getElementById('cart-icon').addEventListener('click', openCartPopup);
document.getElementById('close-cart').addEventListener('click', closeCartPopup);
