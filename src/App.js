import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const auth = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);
  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
