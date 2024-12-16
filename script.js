document.getElementById('orderButton').addEventListener('click', function() {
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach((checkbox) => {
        const quantityInput = checkbox.nextElementSibling.nextElementSibling; // Получаем поле ввода количества
        const quantity = quantityInput.value;
        const itemValue = checkbox.value;

        // Добавляем в массив выбранные товары с учетом количества
        selectedItems.push(`${itemValue} (количество: ${quantity})`);
    });

    if (selectedItems.length > 0) {
        const message = `Выбранные товары:\n${selectedItems.join('\n')}`;

        fetch('https://your-server-url/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => {
            if (response.ok) {
                alert('Ваши заказы отправлены!');
                // Закрываем мини-приложение
                window.close();
            } else {
                alert('Ошибка при отправке заказа.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке заказа.');
        });
    } else {
        alert('Пожалуйста, выберите хотя бы один товар.');
    }
});