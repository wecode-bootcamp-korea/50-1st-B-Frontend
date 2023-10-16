import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KimCodeLogin from './pages/KimCode/Login/Login';
import KimCodeMain from './pages/KimCode/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kimcode-login" element={<KimCodeLogin />} />
        <Route path="/kimcode-main" element={<KimCodeMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
