import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Create from './components/Create/Create';
import Dashboard from './components/Dasboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: '' });
  const onLogin = (username) => {
    setUserInfo({ isAuthenticated: true, user: username });
  };

  const onLogout = () => {
    setUserInfo({ isAuthenticated: false, user: '' });
  };
  
  return (
    <div id="container">

      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:petId" element={<Details />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
  );
}

export default App;
