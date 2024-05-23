import React, {Component} from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
import {navigationItems} from "../utils/constants.js";


const Switcher =({currentPage})=> {



        switch (currentPage) {
            case navigationItems[0]: return <Home/>
            case navigationItems[1]: return <AboutMe/>
            case navigationItems[2]: return <StarWars/>
            case navigationItems[3]: return <Contacts/>
        }


}

export default Switcher;