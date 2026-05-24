export interface Review {
  id: string;
  bookId: string;
  userId: string;
  userNickname: string;
  userAvatar: string;
  rating: number;
  title: string;
  content: string;
  tags: string[];
  publishDate: string;
  likes: number;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    bookId: '1',
    userId: '2',
    userNickname: '读书达人',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    title: '震撼人心的经典之作',
    content: '余华的《活着》是一部让人深思的作品。福贵的一生经历了太多苦难，但他依然坚强地活着。这本书让我明白了生命的可贵，也让我更加珍惜当下的生活。强烈推荐！',
    tags: ['推荐', '感人', '经典'],
    publishDate: '2024-01-15',
    likes: 256,
  },
  {
    id: '2',
    bookId: '1',
    userId: '3',
    userNickname: '爱书的猫',
    userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop',
    rating: 4,
    title: '值得一读的好书',
    content: '故事很感人，但是读起来有点沉重。不过确实是一本值得细细品味的好书，推荐给大家。',
    tags: ['值得读', '深刻'],
    publishDate: '2024-01-10',
    likes: 128,
  },
  {
    id: '3',
    bookId: '2',
    userId: '4',
    userNickname: '文学爱好者',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    title: '魔幻现实主义的巅峰之作',
    content: '马尔克斯的《百年孤独》是魔幻现实主义文学的代表作。书中的每一个人物都鲜活生动，每一个故事都引人入胜。读完后让人回味无穷，强烈推荐！',
    tags: ['推荐', '魔幻', '经典'],
    publishDate: '2024-01-08',
    likes: 312,
  },
];
