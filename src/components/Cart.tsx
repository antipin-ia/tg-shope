import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { removeItem, clearCart } from '../store/cartSlice';
import { SteamService } from '../services/steamService';
import { useTelegram } from '../hooks/useTelegram';

export const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  useTelegram();

  const handleRemove = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = async () => {
    try {
      const success = await SteamService.purchaseItems(items.map(item => item.id));
      if (success) {
        dispatch(clearCart());
        alert('Purchase successful!');
      }
    } catch {
      alert('Purchase failed');
    }
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <img src={'src/assets/mag.png'} alt={item.name} width="50" height="50" />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};