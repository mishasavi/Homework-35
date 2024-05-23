import React from 'react';

const Friend = ({friendPhoto, pos}) => {
    let styles = 'col-4 p-1';
    if (pos === 7) {
        styles += " bottom-left"
    }
    if (pos === 9) {
        styles += " bottom-right"
    }
    return (
        <img className={styles} src={friendPhoto} alt="friend"/>
    );
};

export default Friend;