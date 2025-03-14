document.getElementById('load-users').addEventListener('click', fetchUsers);
document.getElementById('load-cached-users').addEventListener('click', loadCachedUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            if (validateUserData(data)) {
                displayUsers(data.data);
                cacheUserData(data.data);
            } else {
                alert('Invalid data structure received');
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function validateUserData(data) {
    if (!data || !data.data || !Array.isArray(data.data)) {
        return false;
    }
    return data.data.every(user => user.hasOwnProperty('first_name') && user.hasOwnProperty('last_name'));
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.first_name} ${user.last_name}`;
        userList.appendChild(listItem);
    });
}

function cacheUserData(users) {
    const jsonData = JSON.stringify(users);
    localStorage.setItem('users', jsonData);
    sessionStorage.setItem('users', jsonData);
}

function loadCachedUsers() {
    const cachedData = localStorage.getItem('users');
    if (cachedData) {
        const users = JSON.parse(cachedData);
        displayUsers(users);
    } else {
        alert('No cached data found');
    }
}