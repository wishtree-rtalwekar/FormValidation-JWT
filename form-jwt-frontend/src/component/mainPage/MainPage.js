import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth.service';
import LoginPage from '../loginPage/LoginPage';
import NavBar from '../navBar/NavBar';
import AdminPage from '../profileComponents/AdminPage';
import HomePage from '../profileComponents/HomePage';
import Moderator from '../profileComponents/Moderator';
import ProfilePage from '../profileComponents/ProfilePage';
import UserPage from '../profileComponents/UserPage';
import RegisterPage from '../registerPage/RegisterPage';

const MainPage = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user.firstName + " "+ user.lastName);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);


  const handleLogOut = () => {
    AuthService.logout();
    navigate("/signIn")
  }

  return (
    <div className='main_wrapper'>
      <div className='main_navbar'>
        <div>
          <a className='create_link main_navbar_link' onClick={() => navigate("home")}>Home</a>

          {showModeratorBoard &&
            (<a className='create_link main_navbar_link' onClick={() => navigate("moderator")}>Moderator</a>)}

          {showAdminBoard &&
            (<a className='create_link main_navbar_link' onClick={() => navigate("admin")}>Admin</a>)}

          <a className='create_link main_navbar_link' onClick={() => navigate("user")}>User</a>
        </div>
        <div>
          <a
            className='create_link main_navbar_link'
            style={{ marginRight: "20px" }}
            onClick={() => navigate("profile")}
          >
            {currentUser}
          </a>
          <a
            className='create_link main_navbar_link'
            style={{ marginRight: "20px" }}
            onClick={handleLogOut}
          >
            LogOut
          </a>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="moderator" element={<Moderator />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="profile" element={<ProfilePage/>} />
        </Routes>
        <a className='create_link' onClick={() => navigate("/signIn")}>Back to Sign In</a>
      </div>

    </div>
  )
}

export default MainPage