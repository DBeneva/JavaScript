module.exports = {};



const users = {};
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1><a href="/register">Register</a><a href="/login">Login</a>');
});

app.get('/register', (req, res) => {
    res.send(`
    <form action="/register" method="POST">
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="text" name="password"></label>
    <label>Repeat: <input type="text" name="repeat"></label>
    <input type="submit" value="Register">
    </form>
    `);
});

app.get('/login', (req, res) => {
    res.send(`
    <form action="/login" method="POST">
    <label>Username: <input type="text" name="username"></label>
    <label>Password: <input type="text" name="password"></label>
    <input type="submit" value="Login">
    </form>
    `);
});
