import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '../loginPage/LoginPage';
import MainPage from '../mainPage/MainPage';
import AdminPage from '../profileComponents/AdminPage';
import HomePage from '../profileComponents/HomePage';
import Moderator from '../profileComponents/Moderator';
import UserPage from '../profileComponents/UserPage';
import RegisterPage from '../registerPage/RegisterPage';

const NavBar = () => {
  let navigate = useNavigate();

  useEffect(() => {
  
    navigate("")
  }, [])
  return (
    <>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="signIn" element={<LoginPage />} />
        <Route path="signUp" element={<RegisterPage />} />
        {/* <Route path="home" element={<HomePage />} />
        <Route path="moderator" element={<Moderator />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="user" element={<UserPage />} /> */}
        <Route path="mainPage/*" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default NavBar