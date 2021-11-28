import './App.css';
import { useState, useEffect, useRef } from 'react';
import MyHobbies from './components/MyHobbies';

function App() {
  const [username, setUsername] = useState('Pesho');
  const [services, setServices] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const passwordRef = useRef();

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
    setUsername(e.target.value);
    
    const currentUsername = e.target.value;
    if (currentUsername.length < 4) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    console.log(username);
  };

  const onServiceChange = (e) => {
    setUsername('');
    console.log(passwordRef.current.value);
    passwordRef.current.value = '';
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
            value={username}
            onChange={onChange}
          />
        </div>
        {!isValid && <div style={{ color: 'red' }}>Username is invalid!</div>}
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="services">Services </label>
          <select name="services" id="services" onChange={onServiceChange}>
            {services.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rememberMe">Remember me </label>
          <input type="checkbox" name="rememberMe" id="rememberMe" defaultChecked />
        </div>
        <input type="submit" value="Login" />
      </form>

      <MyHobbies title="My Favourite Hobbies" />
    </div>
  );
}

export default App;
