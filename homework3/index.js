document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    console.log(`Кількість товарів: ${productList.getElementsByTagName('li').length}`);
    const addButton = document.getElementById('add-product');
    addButton.addEventListener('click', () => {
        const newProduct = document.createElement('li');
        newProduct.textContent = 'Новий товар';
        productList.appendChild(newProduct);
        console.log(`Кількість товарів: ${productList.getElementsByTagName('li').length}`);
    });
});