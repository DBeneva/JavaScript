import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setName('Pesho');
    }, 1500);
  }, []);

  return (
    <div className="App">
      <h2>{!name ? 'Loading...' : name}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(x => x + 1)}>+</button>
    </div>
  );
}

export default App;
