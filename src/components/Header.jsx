import React from 'react';

import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <Link to="/" className="link">
        <div className="leftSide">
          <img src="img/logo.svg" alt="logo" />
          <div>
            <h1>React Sneakers</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="rightSide">
        <li onClick={props.onClickCart}>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <CgShoppingCart size={20} />
          </IconContext.Provider>
          <span>
            <Link to="/cart" className="link">
              1205 руб.
            </Link>
          </span>
        </li>
        <li>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <MdOutlineFavoriteBorder size={20} />
          </IconContext.Provider>
          <span>Закладки</span>
        </li>
        <li>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <AiOutlineUser size={20} />
          </IconContext.Provider>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
