import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Dashboard from './components/Dasboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';
import Notification from './components/common/Notification';


function App() {
  return (
    <AuthProvider>
      <NotificationProvider>

        <div id="container">
          <Header />
          <Notification />

          <main id="site-content">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:petId" element={<Edit />} />
              <Route path="/details/:petId" element={<Details />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>

          <footer id="site-footer">
            <p>@PetMyPet</p>
          </footer>

        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
