import React from 'react';
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
   <div className="wrapper">
      <Header />
      <div className="container">
         <Cards />
         <Footer />
      </div>
   </div>
);

export default App;
