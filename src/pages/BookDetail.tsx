import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Plus, Edit } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { StarRating } from '../components/StarRating';
import { BookCard } from '../components/BookCard';
import { mockBooks } from '../mock/books';
import { mockReviews } from '../mock/reviews';

export const BookDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const book = mockBooks.find((b) => b.id === id) || mockBooks[0];
  const relatedBooks = mockBooks.filter((b) => b.id !== id).slice(0, 3);
  const bookReviews = mockReviews.filter((r) => r.bookId === id);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white sticky top-0 z-40 px-4 py-3 flex items-center justify-between border-b">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-semibold">书籍详情</h1>
        <div className="w-10"></div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="flex gap-4">
          <img
            src={book.cover}
            alt={book.title}
            className="w-32 h-44 object-cover rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
            <p className="text-gray-600 mt-1">{book.author}</p>
            <div className="mt-2">
              <div className="flex items-center">
                <StarRating rating={Math.round(book.rating)} size={18} readonly />
                <span className="ml-2 text-lg font-bold text-secondary">{book.rating.toFixed(1)}</span>
                <span className="ml-1 text-gray-400 text-sm">({book.ratingCount}人评价)</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center justify-center py-3 bg-white rounded-lg border">
            <BookOpen size={20} className="text-primary" />
            <span className="text-xs text-gray-600 mt-1">想读</span>
          </button>
          <button className="flex flex-col items-center justify-center py-3 bg-white rounded-lg border">
            <Plus size={20} className="text-primary" />
            <span className="text-xs text-gray-600 mt-1">加入书架</span>
          </button>
          <button className="flex flex-col items-center justify-center py-3 bg-primary text-white rounded-lg">
            <Edit size={20} />
            <span className="text-xs mt-1">写书评</span>
          </button>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">出版信息</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>出版社</span>
              <span>{book.publisher}</span>
            </div>
            <div className="flex justify-between">
              <span>出版日期</span>
              <span>{book.publishDate}</span>
            </div>
            <div className="flex justify-between">
              <span>页数</span>
              <span>{book.pages}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">内容简介</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {showFullDescription ? book.description : `${book.description.slice(0, 100)}...`}
          </p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="flex items-center justify-center w-full mt-3 text-primary text-sm"
          >
            {showFullDescription ? (
              <>
                收起 <ChevronUp size={16} />
              </>
            ) : (
              <>
                展开 <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-gray-800 mb-3">评分分布</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const percentage = book.ratingDistribution[5 - star] || 0;
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 w-8">{star}星</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-12">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800">精选书评</h3>
            <button className="text-primary text-sm">查看全部</button>
          </div>
          <div className="space-y-4">
            {bookReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <img
                    src={review.userAvatar}
                    alt={review.userNickname}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{review.userNickname}</span>
                      <span className="text-xs text-gray-400">{review.publishDate}</span>
                    </div>
                    <StarRating rating={review.rating} size={14} readonly  />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 mt-3">{review.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{review.content}</p>
                <div className="flex gap-2 mt-3">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-3 text-gray-400 text-sm">
                  <span>👍 {review.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-3">猜你喜欢</h3>
          <div className="grid grid-cols-3 gap-3">
            {relatedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
