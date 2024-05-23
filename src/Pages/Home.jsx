import { useState } from 'react';
import Card from '../components/Card/Card';

function Home({ items, onAddToCart }) {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <main>
      <div className="searchBlock">
        <h1>Все кроссовки</h1>
        <div className="searchItem">
          <img className="searchLogo" src="/img/search.svg" alt="search" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="search"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers">
        {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.imageUrl}
              addToCart={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </main>
  );
}
export default Home;
