document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').files[0];
    const productPrice = document.getElementById('product-price').value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const productImageURL = e.target.result;

        const productList = document.getElementById('product-list');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${productImageURL}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productDescription}</p>
            <p class="price">$${productPrice}</p>
        `;

        productList.appendChild(productCard);

        // Reset form
        document.getElementById('product-form').reset();
    };

    reader.readAsDataURL(productImage);
});
