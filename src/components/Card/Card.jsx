import React from 'react';
import styles from './Card.module.scss';
import { IconContext } from 'react-icons';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const Card = ({ name, price, image, onClickPlus }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <MdOutlineFavoriteBorder size={20} />
      </div>
      <img width={133} height={112} src={image} alt="Nike Blazer" />
      <p>{name}</p>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div className={styles.btn} onClick={onClickPlus}>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <AiOutlinePlusCircle size={21} />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Card;
