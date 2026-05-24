import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarRating } from './StarRating';
import { Book } from '../mock/books';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <img 
        src={book.cover} 
        alt={book.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
          {book.title}
        </h3>
        <p className="text-gray-500 text-xs mt-1">
          {book.author}
        </p>
        <div className="flex items-center mt-2">
          <StarRating rating={Math.round(book.rating)} size={14} readonly />
          <span className="ml-2 text-xs text-secondary font-medium">
            {book.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
