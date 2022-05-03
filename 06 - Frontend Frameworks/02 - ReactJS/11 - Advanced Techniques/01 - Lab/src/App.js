import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import MyList from './components/MyList';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="site-wrapper">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dogs" element={<MyList />} />
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
