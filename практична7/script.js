document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const deadlineInput = document.getElementById('deadline');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo.task} (Дедлайн: ${todo.deadline})</span>
                <div>
                    <button onclick="deleteTask(${index})">Видалити</button>
                    <button onclick="toggleComplete(${index})">${todo.completed ? 'Невиконане' : 'Виконане'}</button>
                </div>
            `;
            if (todo.completed) {
                li.classList.add('completed');
            }
            todoList.appendChild(li);
        });
    };

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
            task: taskInput.value,
            deadline: deadlineInput.value,
            completed: false
        };
        todos.push(newTask);
        saveTodos();
        renderTodos();
        todoForm.reset();
    });

    window.deleteTask = (index) => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    };

    window.toggleComplete = (index) => {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    };

    renderTodos();
});