import React from 'react';
import { logo } from '../assets';

export const Header = () => (
   <header className="header">
      <div className="container">
         <a href="#" className="logo">
            <img src={logo} alt="s" />
         </a>
      </div>
   </header>
);
