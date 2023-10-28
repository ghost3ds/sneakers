import { CgShoppingCart } from 'react-icons/cg';
import { MdOutlineFavoriteBorder, MdRemoveCircle } from 'react-icons/md';
import { AiOutlineUser, AiOutlinePlusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
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

      <header>
        <div className="leftSide">
          <img src="img/logo.svg" alt="logo" />
          <div>
            <h1>React Sneakers</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="rightSide">
          <li>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <CgShoppingCart size={20} />
            </IconContext.Provider>
            <span>1205 руб.</span>
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

      <main>
        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="searchItem">
            <img className="searchLogo" src="/img/search.svg" alt="search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <MdOutlineFavoriteBorder size={20} />
            </div>
            <img width={133} height={112} src="img/item1.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/item2.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/item3.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/item4.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/item5.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/item6.jpg" alt="Nike Blazer" />
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="btn">
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  <AiOutlinePlusCircle size={21} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
