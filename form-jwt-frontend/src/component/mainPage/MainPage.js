import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '../loginPage/LoginPage';
import NavBar from '../navBar/NavBar';
import AdminPage from '../profileComponents/AdminPage';
import HomePage from '../profileComponents/HomePage';
import Moderator from '../profileComponents/Moderator';
import UserPage from '../profileComponents/UserPage';
import RegisterPage from '../registerPage/RegisterPage';

const MainPage = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const handleToSignIn = () => {
    navigate("/signIn")
  }
  return (
    <div className='main_wrapper'>
      <div className='main_navbar'>
        <div>
          <a className='create_link main_navbar_link' onClick={() => navigate("home")}>Home</a>
          <a className='create_link main_navbar_link' onClick={() => navigate("moderator")}>Moderator</a>
          <a className='create_link main_navbar_link' onClick={() => navigate("admin")}>Admin</a>
          <a className='create_link main_navbar_link' onClick={() => navigate("user")}>User</a>
        </div>
        <div>
          <a
            className='create_link main_navbar_link'
            style={{ marginRight: "20px" }}
            onClick={() => navigate("/signIn")}
          >
            LogOut
          </a>
        </div>
      </div>
      <div>
        <h1>Main Page</h1>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="moderator" element={<Moderator />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="user" element={<UserPage />} />
        </Routes>
        <a className='create_link' onClick={() => navigate("/signIn")}>Back to Sign In</a>
      </div>

    </div>
  )
}

export default MainPage