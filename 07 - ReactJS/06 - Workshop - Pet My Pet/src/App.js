import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Create from './components/Create/Create';
import Dashboard from './components/Dasboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';

const initialAuthState = {
  accessToken: '',
  email: '',
  _id: ''
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <div id="container">

        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        <footer id="site-footer">
          <p>@PetMyPet</p>
        </footer>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
