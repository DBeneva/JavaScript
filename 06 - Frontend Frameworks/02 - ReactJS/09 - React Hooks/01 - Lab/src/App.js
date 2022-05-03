import './App.css';
import { useState, useEffect } from 'react';
// import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import CharacterList from './components/CharacterList';
import useDidMount from './hooks/useDidMount';
import AuthContext from './contexts/АuthContext';

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

  const addHobby = (hobby) => {
    setInfo(oldState => ({
      ...oldState, hobbies: [...oldState.hobbies, hobby]
    }));
  };

  return (
    <AuthContext.Provider value={{ count, user: info, addHobby }}>
      <div className="App">
        <h2>{!name ? 'Loading...' : name}</h2>
        {count < 10 ? <Counter count={count} /> : null}
        <button onClick={onClick}>+</button>
        {/* <ClassComponent /> */}
        <ul>
          {info.hobbies.map(x => <li key={x}>{x}</li>)}
        </ul>

        <CharacterList />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
