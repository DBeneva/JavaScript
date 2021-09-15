async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        data.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
            ul.appendChild(li);
        });
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.status} (Not Found)`;
        ul.appendChild(li);
    }

}