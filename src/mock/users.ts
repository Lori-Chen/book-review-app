export interface User {
  id: string;
  nickname: string;
  avatar: string;
  bio: string;
  reviewCount: number;
  followingCount: number;
  favoriteCount: number;
}

export const mockUser: User = {
  id: '1',
  nickname: '书虫小明',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  bio: '热爱阅读，分享好书，记录生活中的点点滴滴。',
  reviewCount: 42,
  followingCount: 128,
  favoriteCount: 86,
};
