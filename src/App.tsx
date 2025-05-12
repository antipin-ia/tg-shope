import { Store } from './components/Store';
import { Cart } from './components/Cart';
import { CartIcon } from './components/CartIcon';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useState } from 'react';
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <h1>Steam Store</h1>
          <button 
            className="cart-button"
            onClick={() => setShowCart(!showCart)}
          >
            <CartIcon />
          </button>
        </header>
        {showCart ? <Cart /> : <Store />}
      </div>
    </Provider>
  );
}

export default App;
