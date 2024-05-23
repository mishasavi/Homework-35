import React from 'react';

const NavItems = ({changePage, itemTitle}) => {
    return (
        <li className="nav-item btn btn-danger mx-1"
        onClick={()=>changePage(itemTitle)}>{itemTitle}</li>
    );
};

export default NavItems;