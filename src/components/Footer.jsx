import React from 'react';

const curYear = new Date().getFullYear();
export const Footer = () => (
   <footer className="footer">
      <span>
         <span>{curYear}</span> All Right Reserved.
      </span>
   </footer>
);
