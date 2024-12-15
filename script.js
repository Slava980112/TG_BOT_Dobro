// Пример данных о товарах
const products = [
    {
        id: 1,
        category: "Торты",
        title: "Торт Шоколадный",
        price: 500,
        image: "cake1.jpg"
    },
    {
        id: 2,
        category: "Торты",
        title: "Торт Фруктовый",
        price: 600,
        image: "cake2.jpg"
    },
    {
        id: 3,
        category: "Выпечка",
        title: "Круассан",
        price: 150,
        image: "pastry1.jpg"
    },
    {
        id: 4,
        category: "Выпечка",
        title: "Пирожное",
        price: 200,
        image: "pastry2.jpg"
    },
    {
        id: 5,
        category: "Конфеты",
        title: "Шоколадные Конфеты",
        price: 300,
        image: "candy1.jpg"
    },
    {
        id: 6,
        category: "Конфеты",
        title: "Леденцы",
        price: 100,
        image: "candy2.jpg"
    }
];

// Функция для отображения продуктов
function displayProducts(category) {
    const productContainer = document.querySelector("main");
    productContainer.innerHTML = ""; // Очистить контейнер перед добавлением новых продуктов

    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Цена: ${product.price} руб.</p>
                <button onclick="addToCart(${product.id})">Купить</button>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Вы добавили ${product.title} в корзину!`);
}

// Инициализация страницы
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(); // Отображаем все продукты при загрузке страницы

    // Добавляем обработчики событий для навигации по категориям
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const category = e.target.textContent; // Получаем название категории
            displayProducts(category); // Отображаем продукты выбранной категории
        });
    });
});