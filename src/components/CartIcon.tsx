import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const CartIcon = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  return (
    <div className="cart-icon">
      <img src={'src/assets/cart.png'} alt="Cart" width="24" height="24" />
      {cartItems.length > 0 && (
        <span className="cart-badge">{cartItems.length}</span>
      )}
    </div>
  );
};