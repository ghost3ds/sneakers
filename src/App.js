import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';

const items = [
  { name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'img/item1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 8999, imageUrl: 'img/item2.jpg' },
];

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
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
            <Card name={item.name} price={item.price} image={item.imageUrl} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
