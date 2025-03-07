document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("inputField");
    const addButton = document.getElementById("addButton");
    const sortButton = document.getElementById("sortButton");
    const itemList = document.getElementById("itemList");
    let items = JSON.parse(localStorage.getItem("items")) || [];
    function renderList() {
        itemList.innerHTML = "";
        items.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("click", () => {
                removeItem(index);
            });
            itemList.appendChild(li);
        });
    }
    function addItem() {
        const value = inputField.value.trim();
        if (value) {
            items.push(value);
            inputField.value = "";
            saveItems();
            renderList();
        } else {
            alert("Будь ласка, введіть значення.");
        }
    }
    function removeItem(index) {
        items.splice(index, 1);
        saveItems();
        renderList();
    }
    function sortItems() {
        items.sort((a, b) => a.localeCompare(b));
        saveItems();
        renderList();
    }
    function saveItems() {
        localStorage.setItem("items", JSON.stringify(items));
    }
    addButton.addEventListener("click", addItem);
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });
    sortButton.addEventListener("click", sortItems);
    renderList();
});