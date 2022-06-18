import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import routes
import MainPage from './routes/MainPage';
import News from './routes/News';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Nav from './Nav'; 
import Login from './routes/Login';
import { LoginPage } from './routes/LoginPage';

import RequireAuth from './hoc/RequireAuth';


function Main() {
  return (
    <main >
      <div className="main">
        <Nav />
        <Routes>
          
          <Route path="/" element={<MainPage />} />
          <Route path="/profile/:id" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>  
          } />
          <Route path="/friends" element={
            <RequireAuth>
              <Friends />
            </RequireAuth>
          } />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/loginpage" element={<LoginPage />} /> */}

        </Routes>
      </div>
    </main>
  )
}

export default Main