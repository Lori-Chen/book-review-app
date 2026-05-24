import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
  size?: number;
  readonly?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  onRatingChange,
  size = 20,
  readonly = false,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const getRatingText = (rating: number): string => {
    const texts = ['', '很差', '较差', '还行', '推荐', '力荐'];
    return texts[rating] || '';
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || rating);
        return (
          <Star
            key={index}
            size={size}
            fill={isFilled ? '#F39C12' : 'transparent'}
            stroke={isFilled ? '#F39C12' : '#d1d5db'}
            className={`${!readonly ? 'cursor-pointer' : ''} transition-colors`}
            onMouseEnter={() => !readonly && setHoverRating(starValue)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
            onClick={() => !readonly && onRatingChange && onRatingChange(starValue)}
          />
        );
      })}
      {!readonly && hoverRating > 0 && (
        <span className="ml-2 text-sm text-secondary">
          {getRatingText(hoverRating)}
        </span>
      )}
    </div>
  );
};
