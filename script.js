function updatePrice(selectElement) {
    const priceElement = selectElement.parentElement.nextElementSibling;
    priceElement.textContent = `$${selectElement.value}`;
}
