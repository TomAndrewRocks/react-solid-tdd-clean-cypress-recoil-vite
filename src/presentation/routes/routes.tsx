import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import { SignUp } from '../pages/register';
import { Home } from '../pages/home';

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route id="Home" path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
