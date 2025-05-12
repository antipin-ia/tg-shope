import type { SteamItem } from '../types/steamItem';

export class SteamService {
  static async fetchItems(): Promise<SteamItem[]> {
    // TODO: Заменить на реальный API вызов
    return [
      {
        id: '1',
        name: 'Example Game',
        price: 19.99,
        image: '//',
        description: 'Example game description',
        category: 'Action'
      },
      {
        id: '2',
        name: 'Another Game',
        price: 29.99,
        image: '//',
        description: 'Another game description',
        category: 'RPG',
        discount: 10
      }
    ];
  }

  static async purchaseItem(itemId: string): Promise<boolean> {
    // TODO: Реализовать логику покупки
    console.log(`Purchasing item ${itemId}`);
    return true;
  }

  static async purchaseItems(itemIds: string[]): Promise<boolean> {
    // TODO: Реализовать логику массовой покупки
    console.log(`Purchasing items: ${itemIds.join(', ')}`);
    return true;
  }
}