import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/sihyun/Login/Login';
import Signup from './pages/sihyun/Signup/Signup';
import Modify from './pages/sihyun/Thread/modify';
import Thread from './pages/sihyun/Thread/Thread';
import Write from './pages/sihyun/Thread/Write';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/thread" element={<Thread />} />
        <Route path="/write" element={<Write />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
