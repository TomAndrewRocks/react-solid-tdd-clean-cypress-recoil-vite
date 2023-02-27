import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import { SignUp } from '../pages/register';

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        index
        id="Home"
        path="/"
        element={<div>Home</div>}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
