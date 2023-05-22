import React, { createContext, useReducer } from 'react';
import Home from "./client/HomePage/Home";
import Navbar from "./client/Navbar/Navbar";
import Contact from "./client/ContactPage/Contact";
import {initialState , reducer } from "./client/Reducer/UseReducer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './client/Footer/Footer';
import { Switch, Route, Redirect } from "react-router-dom";
AOS.init();

//context api -> login and logout functionality
export const UserContext = createContext();

const Routing = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/contact" component={Contact} />
        
        <Redirect to="/" />
      {/* Can use Error 404 Page  but redirect is better than that page */}
    </Switch>
    )
};

const App  = () => {
    //passed state and dispatched at every root
    const [state, dispatch] = useReducer(reducer , initialState);
    return (
        <>
        <UserContext.Provider value={{ state, dispatch }}>
            <Navbar />
            <Routing /> 
            <Footer />
        </UserContext.Provider>
        </>
    );
};

export default App;