import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context/context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
