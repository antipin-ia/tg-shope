import type { SteamItem } from '../types/steamItem';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

interface ItemCardProps {
  item: SteamItem;
  onPurchase: (itemId: string) => void;
}

export const ItemCard = ({ item, onPurchase }: ItemCardProps) => {
  const dispatch = useDispatch();
  const finalPrice = item.discount 
    ? item.price * (1 - item.discount / 100)
    : item.price;

  return (
    <div className="item-card">
      <img src={item.image || '/src/assets/mag.png'} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className="price-container">
        {item.discount && (
          <span className="original-price">${item.price.toFixed(2)}</span>
        )}
        <span className="final-price">${finalPrice.toFixed(2)}</span>
        {item.discount && (
          <span className="discount-badge">-{item.discount}%</span>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPurchase(item.id);
        }}
      >
        Buy
      </button>
      <button
        className="add-to-cart"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addItem(item));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};