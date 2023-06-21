// import PrivateComponent from './utils/PrivateComponent';
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import cv from './mah.png';
import jwt_decode from "jwt-decode";
import { logout, refreshTokens, setRunningInterval, setTokens } from "../redux/slices/TokensSlice";
// import { applyMiddleware } from "@reduxjs/toolkit";

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fourMinutes = 2000;

    const tokens = useSelector((state) => state.TokensSlice.tokens);
    const tokensRef = useRef({});
    const auth = useSelector((state) => state.TokensSlice.auth);
    const user = useSelector((state) => state.TokensSlice.user);
    const loggedin = useSelector((state) => state.TokensSlice.loggedin);
    const full = useSelector((state) => state.TokensSlice.full);
    const running_interval = useSelector((state) => state.TokensSlice.running_interval);
    const constant = useSelector((state) => state.TokensSlice.constant);
    tokensRef.current = tokens;

    const loggedinRef = useRef((loggedin));

    const [tokens_from_local_Storage, setlocals] = useState(() => (localStorage.getItem('Tokens') ? JSON.parse(localStorage.getItem('Tokens')) : null));




    if (tokens_from_local_Storage && tokens_from_local_Storage.refresh) {
        console.log("++++++++++++++++local storage+++++++++++++++++++++++++++++++++++++++");

        // dispatch(setTokens({ refresh: tokens_from_local_Storage.refresh, access: tokens_from_local_Storage.access }));

    } else {
        // alert("local storage is empty");
    }






    //     if (full === true) {
    //         // console.log("🚀 ~ file: App.jsx:14 ~ App ~ tokens:", tokens);

    //     }


    //     // dispatch(setTokens({ access: "sdfdsf", refresh: "sdfsf" }));


    let interval = useRef(null);


    const autoLogin = () => {
        if (tokens_from_local_Storage && tokens_from_local_Storage.refresh) {
            if (!loggedinRef.current) {
                // dispatch(logout());


                dispatch(refreshTokens(tokens_from_local_Storage.refresh));

                // if (!running_interval) {

                interval.current = setInterval(() => {
                    dispatch(refreshTokens(tokens_from_local_Storage.refresh));
                }
                    , fourMinutes);
                console.log('IIIiIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');

                dispatch(setRunningInterval(interval.current));

                console.log("🚀 ~ file: Nav.jsx:78 ~ useEffect ~ interval.current:", interval.current);




                // }


            }
            else {
                dispatch(logout());
            }


        }
    };

    useEffect(() => {

        autoLogin();


    }, [constant]);




    return (
        <>
            <div className="App">
                <Link to='/'>home</Link> <br />
                <Link to='/login'>login</Link>

            </div>
            {/* {pe} */}
            {auth ? (
                // tokens.access
                auth

            ) : (
                <p>
                    not found



                </p>
            )}
            <p>home</p>
            <p>{auth}</p>
            {/* <p>{tokens.access}</p> */}
            {/* <p>{tokens.refresh}</p> */}
        </>
    );
};

export default Nav;
