import './App.css';

function App() {
  let numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      {numbers.map(n => <li>{n}</li>)}
    </div>
  );
}

export default App;
