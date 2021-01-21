import React from 'react';
import '../assets/styles.css'; 

const Navbar = () => {


    return (
        <>
            <div className="navbar">
                <div className="title">
                    <h4> Navigation </h4>
                </div>
                <div className="nav">
                    <a href='/#1'> Page 1 </a>
                    <a href='/#2'> Page 2 </a>
                    <a href='/#3'> Page 3 </a>
                    <a href='/#4'> Page 4 </a>
                    <a href='/#5'> Page 5 </a>
                </div>
                </div>
        </>
    );
};

export default Navbar;