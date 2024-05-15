import Header from './components/Header';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

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
    if (!cartItems.some((item) => item.id === obj.id)) {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onDeleteCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      <Header onClickCart={() => setOpenCart(true)} />
      <Routes>
        <Route path="/" element={<Home items={items} onAddToCart={onAddToCart} />} />
        <Route
          path="/cart"
          element={
            openCart && (
              <Cart
                onClose={() => setOpenCart(false)}
                cartItems={cartItems}
                onDeleteCart={onDeleteCart}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
