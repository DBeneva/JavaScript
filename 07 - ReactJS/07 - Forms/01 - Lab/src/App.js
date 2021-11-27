import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [services, setServices] = useState([]);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/services')
      .then(res => res.json())
      .then(res => {
        setServices(Object.values(res));
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { username, password, rememberMe, services } = Object.fromEntries(formData);

    console.log(username);
    console.log(password);
    console.log(Boolean(rememberMe));
    console.log(services);
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
        <div>
          <label htmlFor="services">Services </label>
          <select name="services" id="services">
            {services.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rememberMe">Remember me </label>
          <input type="checkbox" name="rememberMe" id="rememberMe" defaultChecked />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
