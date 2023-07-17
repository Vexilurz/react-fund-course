import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';

function AppRouter() {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
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
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
