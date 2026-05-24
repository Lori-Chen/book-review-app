export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const mockCategories: Category[] = [
  { id: '1', name: '文学', icon: '📚' },
  { id: '2', name: '科幻', icon: '🚀' },
  { id: '3', name: '历史', icon: '📜' },
  { id: '4', name: '哲学', icon: '🧠' },
  { id: '5', name: '经济', icon: '💰' },
  { id: '6', name: '艺术', icon: '🎨' },
  { id: '7', name: '科技', icon: '💻' },
  { id: '8', name: '生活', icon: '🌸' },
];
