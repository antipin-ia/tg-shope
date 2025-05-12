import { useState, useEffect } from 'react';
import { SteamService } from '../services/steamService';
import { ItemCard } from './ItemCard';
import type { SteamItem } from '../types/steamItem';

export const Store = () => {
  const [items, setItems] = useState<SteamItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await SteamService.fetchItems();
        setItems(data);
      } catch {
        setError('Failed to load items');
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, []);

  const handlePurchase = async (itemId: string) => {
    try {
      const success = await SteamService.purchaseItem(itemId);
      if (success) {
        alert('Purchase successful!');
      }
    } catch {
      alert('Purchase failed');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="store">
      <h1>Steam Store</h1>
      <div className="items-grid">
        {items.map(item => (
          <ItemCard 
            key={item.id} 
            item={item} 
            onPurchase={handlePurchase}
          />
        ))}
      </div>
    </div>
  );
};