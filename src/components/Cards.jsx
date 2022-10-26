import React from 'react';
import { Card } from './Card';
import { cardInfo } from '../constants';

export const Cards = () => (
   <div className="card-wrap">
      {cardInfo.map((curElem, index) => (
         <Card key={index} {...curElem} />
      ))}
   </div>
);
