import { IconContext } from 'react-icons';
import { MdRemoveCircle } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Cart = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer_header">
          <h2>Корзина</h2>
          <div className="closeCart" onClick={props.onClose}>
            <IoIosCloseCircleOutline size={21} />
          </div>
        </div>

        <div className="cartItems">
          <div className="cartItem">
            <img width={70} height={70} src="img/item1.jpg" alt="Nike Blazer" />
            <div className="cartPrice">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <MdRemoveCircle size={21} className="removeBtn" />
            </IconContext.Provider>
          </div>
          <div className="cartItem">
            <img width={70} height={70} src="img/item2.jpg" alt="Nike Blazer" />
            <div className="cartPrice">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <MdRemoveCircle size={21} className="removeBtn" />
            </IconContext.Provider>
          </div>
        </div>
        <div className="totalPrice">
          <span>Итого:</span>
          <div className="line"></div>
          <b>21 498 руб.</b>
        </div>
        <button className="greenBtn">
          Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
