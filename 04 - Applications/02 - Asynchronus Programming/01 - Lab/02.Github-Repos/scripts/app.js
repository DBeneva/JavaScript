async function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	
	try {
		const response = await fetch(url);

		if (response.status == 404) {
			throw new Error('User not found');
		}

		const data = await response.json();
		
		const ul = document.getElementById('repos');
		ul.innerHTML = '';
	
		data.forEach(r => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = `${r.full_name}`;
			a.setAttribute('href', r.html_url);
			li.appendChild(a);
			ul.appendChild(li);
		});
	} catch (error) {
		console.log('Promise rejected')
		console.log(error);
	}
}