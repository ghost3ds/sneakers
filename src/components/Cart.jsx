import { IconContext } from 'react-icons';
import { MdRemoveCircle } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Cart = ({ onClose, cartItems, onDeleteCart }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer_header">
          <h2>Корзина</h2>
          <Link to="/" className="link">
            <div className="closeCart" onClick={onClose}>
              <IoIosCloseCircleOutline size={21} />
            </div>
          </Link>
        </div>
        {cartItems.length > 0 ? (
          <div className="cartItems">
            {cartItems.map((obj) => (
              <div className="cartItem">
                <img width={70} height={70} src={obj.image} alt="Nike Blazer" />
                <div className="cartPrice">
                  <p>{obj.name}</p>
                  <b>{obj.price}</b>
                </div>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <MdRemoveCircle
                    size={21}
                    className="removeBtn"
                    onClick={() => onDeleteCart(obj.id)}
                  />
                </IconContext.Provider>
              </div>
            ))}
          </div>
        ) : (
          'Корзина пуста'
        )}
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
