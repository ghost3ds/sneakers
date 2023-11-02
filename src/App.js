import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
