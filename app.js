const posts = [
    {title: 'Post 1', body: 'this is post one'},
    {title: 'Post 2', body: 'this is post two'}
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}: ${post.body}</li>`;
        })
        document.querySelector('.replace_post').innerHTML = output;
    }, 5000);
}

getPosts();

async function fetchUsers() {
    let userList = '';
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    data.forEach((user, index) => {
        userList += `<li>${user.name} ------- email: ${user.email}</li>`;
    })
    document.querySelector('.replace_user').innerHTML = userList;
};
fetchUsers();