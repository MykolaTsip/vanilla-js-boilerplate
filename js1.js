



function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => setUsers(users))
}

function removeUsers() {
    document.getElementById('users').innerHTML = '';
}


function setUsers(users) {
    const div = document.getElementById('users');

    for (let u of users) {
        let userBlock = document.createElement('div');
        userBlock.style.margin = '10px'
        userBlock.style.padding = '10px'
        userBlock.style.border = '2px solid red'
        userBlock.innerHTML = `<b>${u.id}</b> - ${u.username} - ${u.email}`

        div.appendChild(userBlock)
    }
}