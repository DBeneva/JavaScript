import './App.css';
import { useState } from 'react';

function App() {
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { username, password, rememberMe } = Object.fromEntries(formData);

    console.log(username);
    console.log(password);
    console.log(Boolean(rememberMe));
  };

  const onChange = (e) => {
    const currentUsername = e.target.value;
    if (currentUsername.length < 4) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue="Pesho"
            onChange={onChange}
          />
        </div>
        {!isValid && <div style={{ color: 'red' }}>Username is invalid!</div>}
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>
        <label htmlFor="rememberMe">Remember me </label>
        <input type="checkbox" name="rememberMe" id="rememberMe" defaultChecked />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
