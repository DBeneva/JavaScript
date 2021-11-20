import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState('/home');
  
  const navigationChangeHandler = (path) => {
    setPage(path);
    console.log(path);
  };

  const router = (path) => {
    let pathNames = path.split('/');
    console.log(pathNames);
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'create-game': <CreateGame />,
      'details': <GameDetails id={argument} />,
      'login': <Login />,
      'register': <Register />
    };

    return routes[rootPath];
  };

  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        { router(page) || <ErrorPage /> }
      </main>

    </div>
  );
}

export default App;