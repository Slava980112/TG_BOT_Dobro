document.getElementById('orderButton').addEventListener('click', function() {
    const cart = document.getElementById('cart');
    let orderSummary = '';

    // Собираем данные о заказе
    const products = document.querySelectorAll('.product input[type="checkbox"]:checked');
    products.forEach(product => {
        const quantityInput = product.nextElementSibling.nextElementSibling; // Получаем элемент input с количеством
        const quantity = quantityInput.value;
        orderSummary += `${product.value} - Количество: ${quantity}\n`;
    });

    if (orderSummary === '') {
        alert('Ваша корзина пуста!');
        return;
    }

    // Отправляем данные на сервер
    fetch('http://localhost:5000/send_order', { // Замените на ваш URL сервера
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order_summary: orderSummary })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Ваш заказ успешно отправлен!');
        } else {
            alert('Ошибка при отправке заказа.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке заказа.');
    });
});