document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.className = currentTheme;
    document.getElementById('toggle-theme').addEventListener('click', () => {
        const newTheme = document.body.className === 'light' ? 'dark' : 'light';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        sessionStorage.setItem('contactName', name);
        sessionStorage.setItem('contactEmail', email);
        alert('Дані збережено у sessionStorage');
    });
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const renderCart = () => {
        cartList.innerHTML = '';
        cart.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = product;
            cartList.appendChild(li);
        });
    };
    document.getElementById('product-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const product = document.getElementById('product').value;
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        document.getElementById('product-form').reset();
    });
    renderCart();
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcome-message').textContent = `Вітаємо, ${username}!`;
    }
    document.getElementById('welcome-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
        document.getElementById('welcome-message').textContent = `Вітаємо, ${username}!`;
    });
    const changesList = document.getElementById('changes-list');
    const addChange = (change) => {
        const li = document.createElement('li');
        li.textContent = change;
        changesList.appendChild(li);
    };
    window.addEventListener('storage', (event) => {
        if (event.storageArea === localStorage) {
            addChange(`Key: ${event.key}, Old Value: ${event.oldValue}, New Value: ${event.newValue}`);
        }
    });
});