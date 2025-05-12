export interface SteamItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
  discount?: number;
}