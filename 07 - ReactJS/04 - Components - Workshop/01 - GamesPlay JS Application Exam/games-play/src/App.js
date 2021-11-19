import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState('/home');
  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />
  };

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  };

  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        { routes[page] || <h2>No Page Found!</h2> }
      </main>

    </div>
  );
}

export default App;
