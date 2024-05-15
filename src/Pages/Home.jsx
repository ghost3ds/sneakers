import Card from '../components/Card/Card';

function Home({ items, onAddToCart }) {
  return (
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
