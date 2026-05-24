import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { BookCard } from '../components/BookCard';
import { FilterTabs } from '../components/FilterTabs';
import { mockBooks } from '../mock/books';
import { mockCategories } from '../mock/categories';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('推荐');
  const tabs = ['推荐', '热门', '新书', '榜单', '文学', '科幻'];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-primary pt-8 pb-4 px-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 bg-white rounded-lg flex items-center px-4 py-2">
              <Search size={20} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="搜索书籍、作者..."
                className="flex-1 outline-none text-gray-700"
              />
            </div>
          </div>
          <FilterTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 mt-4 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">为你推荐</h2>
          <div className="grid grid-cols-3 gap-3">
            {mockBooks.slice(0, 3).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">图书分类</h2>
          <div className="grid grid-cols-4 gap-3">
            {mockCategories.map((category) => (
              <div
                key={category.id} className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xs text-gray-600 mt-1">{category.name}</span>
                </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">精选推荐</h2>
          <div className="bg-gradient-to-r from-primary-light to-primary rounded-xl p-4 text-white">
            <h3 className="text-xl font-bold mb-2">本周热门榜单</h3>
            <p className="text-white/80 text-sm mb-3">发现更多好书</p>
            <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium">
              查看更多
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">大家都在读</h2>
          <div className="grid grid-cols-3 gap-3">
            {mockBooks.slice(3, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
