const products = [
    { name: 'Apples', category: 'Fruits' },
    { name: 'Bananas', category: 'Fruits' },
    { name: 'Carrots', category: 'Vegetables' },
    { name: 'Broccolis', category: 'Vegetables' },
    { name: 'Chicken', category: 'Meat' },
    { name: 'Beef', category: 'Meat' }
];
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
}
const groupedProducts = groupByCategory(products);
for (const [category, items] of Object.entries(groupedProducts)) {
    console.log(`Category: ${category}`);
    items.forEach(product => {
        console.log(`  - ${product.name}`);
    });
}