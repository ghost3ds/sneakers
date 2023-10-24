import { CgShoppingCart } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineUser, AiOutlinePlusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
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
