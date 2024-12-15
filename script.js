document.getElementById('orderButton').addEventListener('click', function() {
    // Получаем все выбранные товары
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach((checkbox) => {
        selectedItems.push(checkbox.value);
    });

    // Проверяем, есть ли выбранные товары
    if (selectedItems.length > 0) {
        // Формируем сообщение для отправки в Telegram
        const message = `Выбранные товары:\n${selectedItems.join('\n')}`;

        // Здесь вы можете использовать fetch для отправки данных на ваш сервер или напрямую в Telegram-бот
        // Пример отправки данных на сервер (замените URL на ваш)
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