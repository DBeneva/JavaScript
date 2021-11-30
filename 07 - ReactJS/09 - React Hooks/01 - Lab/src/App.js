import './App.css';
import { useState, useEffect } from 'react';
// import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import CharacterList from './components/CharacterList';
import useDidMount from './hooks/useDidMount';

function App() {
  const [name, setName] = useState('Pesho');
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: 'Pesho',
    age: 30,
    hobbies: ['first', 'second', 'third']
  });

  useDidMount(() => {
    setTimeout(() => {
      setName(oldState => oldState + 'o');
    }, 1500);
  });

  const onClick = () => {
    setCount(x => x + 1);
    setInfo(oldState => ({
      ...oldState, age: oldState.age + 1
    }));
  };

  return (
    <div className="App">
      <h2>{!name ? 'Loading...' : name}</h2>
      {count < 10 ? <Counter count={count} /> : null}
      <button onClick={onClick}>+</button>
      {/* <ClassComponent /> */}
      <CharacterList />
    </div>
  );
}

export default App;
