import React from 'react';

import { IconContext } from 'react-icons';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const Card = ({ name, price, image }) => {
  return (
    <div className="card">
      <div className="favorite">
        <MdOutlineFavoriteBorder size={20} />
      </div>
      <img width={133} height={112} src={image} alt="Nike Blazer" />
      <p>{name}</p>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div className="btn">
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <AiOutlinePlusCircle size={21} />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Card;
