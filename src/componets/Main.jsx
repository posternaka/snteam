import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import routes
import MainPage from './routes/MainPage';
import News from './routes/News';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Nav from './Nav'; 
import Login from './routes/Login';

function Main() {
  return (
    <main>
      <Nav />

      <Routes>
        
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </main>
  )
}

export default Main