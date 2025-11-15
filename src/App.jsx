
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Input from "./components/Input";
import React from 'react';
import LoginPage from './pages/LoginPage'
import LoginPage_uncorrect from './pages/LoginPage_fail';
import SignupPage from './pages/SignupPage';
import SignupPage_fail from './pages/SignupPage_fail';
import LoginPage_fail from './pages/LoginPage_fail';
import MyPageGiver from './pages/MyPageGiver';
import MyPageReceiver from './pages/MyPageReceiver';
import StampPage from './pages/StampPage';
import PassportPage from './pages/PassportPage';
import './App.css'
import ReceiverHome from './pages/RecevierHome';

export default function App() {
  return (
    <>
      <ReceiverHome/>

      {/* <MyPageGiver />;  */}
      {/* <MyPageReceiver />; */}
      {/* <StampPage />; */}
      <PassportPage />;
    </>
  );
    {/*
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> */}
  }

