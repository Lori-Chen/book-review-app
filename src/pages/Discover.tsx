import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { BookCard } from '../components/BookCard';
import { FilterTabs } from '../components/FilterTabs';
import { mockBooks } from '../mock/books';
import { mockCategories } from '../mock/categories';

export const Discover: React.FC = () => {
  const [activeSortTab, setActiveSortTab] = useState('综合');
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const sortTabs = ['综合', '热门', '评分最高', '最新出版'];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white pt-8 pb-4 px-4 border-b sticky top-0 z-40">
        <div className="max-w-md mx-auto">
          <div className="relative bg-gray-100 rounded-lg flex items-center px-4 py-3">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="搜索书籍、作者..."
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4 space-y-6">
        <div>
          <FilterTabs
            tabs={sortTabs}
            activeTab={activeSortTab}
            onTabChange={setActiveSortTab}
          />
        </div>

        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <span className="font-medium text-gray-800">评分筛选</span>
          </div>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="10"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>0分</span>
              <span className="font-medium text-secondary">{minRating}分以上</span>
              <span>10分</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-3">热门分类</h3>
          <div className="flex flex-wrap gap-2">
            {mockCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800">搜索结果</h3>
            <span className="text-sm text-gray-500">{mockBooks.length}本</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {mockBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
