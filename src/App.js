import Header from './components/Header';
import Card from './components/Card/Card';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    fetch('https://636f5291f2ed5cb047daa480.mockapi.io/articles')
      .then((response) => {
        return response.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.includes(obj)) {
      setCartItems([cartItems]);
    } else {
      setCartItems([...cartItems, obj]);
    }
  };

  return (
    <div className="wrapper">
      {openCart && <Cart onClose={() => setOpenCart(false)} cartItems={cartItems} />}
      <Header onClickCart={() => setOpenCart(true)} />
      <main>
        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="searchItem">
            <img className="searchLogo" src="/img/search.svg" alt="search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              image={item.imageUrl}
              addToCart={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
