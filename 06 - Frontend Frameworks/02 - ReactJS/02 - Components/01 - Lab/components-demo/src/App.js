import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>
      <main>
        <ToDoList />
      </main>
      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );
}

export default App;
