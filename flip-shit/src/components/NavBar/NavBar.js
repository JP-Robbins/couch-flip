import React, { useState } from 'react';
import "./NavBar.css";
import Logo from './the sofa spot (2).jpeg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex bg-emerald-100 flex-row justify-between align-center bg-slate-200 shadow-md p-4 border'>
      <div className="logo"><img src={Logo}></img></div>
       <div className="pr-5 pt-12 flex flex-col align-middle justify-bottom underline-offset-8">
       <button className={`hamburger ${isOpen ? 'open' : ''}`}  onClick={toggleMenu}>Button img</button>
       <ul className={`menu ${isOpen ? 'open' : 'closed'}`}>
         <li><a href="#">Home</a></li>
         <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
       </ul>
       </div>
    </nav>
  );
};

export default NavBar;