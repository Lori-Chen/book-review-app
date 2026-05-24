import React, { useState } from 'react';
import { Settings, Edit } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { BookCard } from '../components/BookCard';
import { FilterTabs } from '../components/FilterTabs';
import { useAppContext } from '../context/AppContext';
import { mockBooks } from '../mock/books';
import { mockReviews } from '../mock/reviews';

export const Profile: React.FC = () => {
  const { user, logout } = useAppContext();
  const [activeTab, setActiveTab] = useState('我的评价');
  const tabs = ['我的评价', '我的书架', '我的收藏'];

  const userReviews = mockReviews;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-b from-primary to-primary-light pt-8 pb-12 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">个人中心</h1>
          <button className="p-2 text-white">
            <Settings size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <img
              src={user?.avatar}
              alt={user?.nickname}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-gray-800">{user?.nickname}</h2>
                <button className="p-1 text-gray-400">
                  <Edit size={16} />
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">{user?.bio}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{user?.reviewCount}</div>
              <div className="text-sm text-gray-500">评价</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{user?.followingCount}</div>
              <div className="text-sm text-gray-500">关注</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{user?.favoriteCount}</div>
              <div className="text-sm text-gray-500">收藏</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <FilterTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="mt-6 space-y-4">
          {activeTab === '我的评价' && userReviews.map((review) => {
            const book = mockBooks.find((b) => b.id === review.bookId);
            return (
              <div key={review.id} className="bg-white rounded-xl p-4 shadow-sm">
                {book && (
                  <div className="flex gap-3 mb-3">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{book.title}</h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                  </div>
                )}
                <h4 className="font-semibold text-gray-800">{review.title}</h4>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">{review.content}</p>
                <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
                  <span>{review.publishDate}</span>
                  <span>👍 {review.likes}</span>
                </div>
              </div>
            );
          })}

          {activeTab === '我的书架' && (
            <div className="grid grid-cols-3 gap-3">
              {mockBooks.slice(0, 6).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}

          {activeTab === '我的收藏' && (
            <div className="grid grid-cols-3 gap-3">
              {mockBooks.slice(2, 5).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={logout}
          className="w-full mt-8 py-3 border border-red-400 text-red-500 rounded-lg font-medium"
        >
          退出登录
        </button>
      </div>

      <BottomNav />
    </div>
  );
};
