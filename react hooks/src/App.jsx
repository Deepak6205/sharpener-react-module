import React, { useEffect, useState } from 'react'
import './App.css'
import Login from '../src/components/login/Login.jsx';
import Home from '../src/components/home/Home.jsx';
import MainHeader from '../src/components/mainHeader/MainHeader.jsx'
function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storeUserIsLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (storeUserIsLoggedInStatus === '1') {
      setIsLoggedIn(true);
    }
  },[])
  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <div>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </div>
        
      
    </React.Fragment>
  );
}

export default App
