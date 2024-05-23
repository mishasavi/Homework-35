import React from 'react';
import {navigationItems} from "../utils/constants.js";
import NavItems from "./NavItems.jsx";


const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navigationItems.map((item, index)=> <NavItems changePage={changePage} key={index} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;