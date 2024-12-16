document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('orderButton');
    const cart = document.getElementById('cart');

    orderButton.addEventListener('click', () => {
        cart.innerHTML = ''; // Очистить корзину перед добавлением новых товаров
        const products = document.querySelectorAll('.product');

        let total = 0;
        let cartItems = '';

        products.forEach(product => {
            const checkbox = product.querySelector('input[type="checkbox"]');
            const quantityInput = product.querySelector('.quantity');

            if (checkbox.checked) {
                const quantity = parseInt(quantityInput.value);
                const price = parseInt(quantityInput.dataset.price);
                const itemTotal = quantity * price;

                total += itemTotal;
                cartItems += `<p>${checkbox.value} - Количество: ${quantity} - Итого: ${itemTotal} руб.</p>`;
            }
        });

        if (cartItems === '') {
            cart.innerHTML = '<p>Корзина пуста. Пожалуйста, выберите товары.</p>';
        } else {
            cart.innerHTML = cartItems;
            cart.innerHTML += `<p><strong>Общая сумма: ${total} руб.</strong></p>`;
        }
    });
});