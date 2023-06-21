import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import PrivateComponent from './utils/PrivateComponent';
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import TestAxios from "./pages/TestAxios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slices/TokensSlice";
import Nav from "./pages/Nav";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();





  const handleLogout = () => {





    dispatch(logout());
    navigate("/login");

  };



  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <div className="App">
        <Link to='/'>home</Link> <br />
        <Link to='/login'>login</Link>
        <Nav/>
        <Routes>
          <Route element={< HomePage /> } path="/" exact />
          { <Route element={<LoginPage />} path="/login" />}
          <Route element={<TestAxios />} path="/test" />
        </Routes>
      </div>
      {/* {pe} */}


      <p>home</p>
      {/* <p>{tokens.access}</p> */}
      {/* <p>{tokens.refresh}</p> */}
    </>
  );
};

export default App;
