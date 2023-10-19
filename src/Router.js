import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/sihyun/Login/Login';
import Signup from './pages/sihyun/Signup/Signup';
import Modify from './pages/sihyun/Thread/modify';
import Thread from './pages/sihyun/Thread/Thread';
import UserThread from './pages/sihyun/Thread/UserThread';
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
        <Route path="/userthread" element={<UserThread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
