export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  ratingCount: number;
  tags: string[];
  publisher: string;
  publishDate: string;
  pages: number;
  description: string;
  ratingDistribution: number[];
}

export const mockBooks: Book[] = [
  {
    id: '1',
    title: '活着',
    author: '余华',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
    rating: 4.8,
    ratingCount: 12560,
    tags: ['文学', '经典', '中国'],
    publisher: '作家出版社',
    publishDate: '2012-08-10',
    pages: 191,
    description: '《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。',
    ratingDistribution: [5, 15, 20, 35, 25],
  },
  {
    id: '2',
    title: '百年孤独',
    author: '加西亚·马尔克斯',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
    rating: 4.9,
    ratingCount: 8920,
    tags: ['文学', '魔幻现实主义', '诺贝尔文学奖'],
    publisher: '南海出版公司',
    publishDate: '2017-08-01',
    pages: 360,
    description: '《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。',
    ratingDistribution: [3, 8, 12, 32, 45],
  },
  {
    id: '3',
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    rating: 4.6,
    ratingCount: 15680,
    tags: ['历史', '科普', '人文'],
    publisher: '中信出版社',
    publishDate: '2014-11-01',
    pages: 440,
    description: '《人类简史：从动物到上帝》是以色列历史学家尤瓦尔·赫拉利的作品，讲述了人类从十万年前的非洲到21世纪的演化历程，探讨了认知革命、农业革命、科学革命等重大历史事件对人类发展的影响。',
    ratingDistribution: [8, 12, 20, 30, 30],
  },
  {
    id: '4',
    title: '三体',
    author: '刘慈欣',
    cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=400&fit=crop',
    rating: 4.9,
    ratingCount: 25680,
    tags: ['科幻', '硬科幻', '雨果奖'],
    publisher: '重庆出版社',
    publishDate: '2008-01-01',
    pages: 302,
    description: '《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》《三体Ⅱ·黑暗森林》《三体Ⅲ·死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    ratingDistribution: [2, 5, 10, 28, 55],
  },
  {
    id: '5',
    title: '小王子',
    author: '安托万·德·圣-埃克苏佩里',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
    rating: 4.7,
    ratingCount: 18920,
    tags: ['童话', '寓言', '经典'],
    publisher: '人民文学出版社',
    publishDate: '2003-08-01',
    pages: 97,
    description: '《小王子》是法国作家安托万·德·圣-埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。',
    ratingDistribution: [5, 10, 15, 30, 40],
  },
  {
    id: '6',
    title: '围城',
    author: '钱钟书',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
    rating: 4.5,
    ratingCount: 9680,
    tags: ['文学', '经典', '中国'],
    publisher: '人民文学出版社',
    publishDate: '1991-02-01',
    pages: 359,
    description: '《围城》是钱钟书所著的一部现代文学长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为“新儒林外史”。第一版于1947年由上海晨光出版公司出版。故事主要写抗战初期知识分子的群相。',
    ratingDistribution: [10, 15, 20, 30, 25],
  },
];
