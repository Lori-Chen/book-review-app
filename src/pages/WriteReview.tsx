import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye } from 'lucide-react';
import { StarRating } from '../components/StarRating';
import { mockBooks } from '../mock/books';

export const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBook] = useState(mockBooks[0]);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [publishScope, setPublishScope] = useState('公开');

  const allTags = ['推荐', '值得一读', '经典', '感人', '深刻', '脑洞大'];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('书评发布成功！');
    navigate('/profile');
  };

  const handleSaveDraft = () => {
    alert('草稿已保存！');
  };

  const handlePreview = () => {
    alert('预览功能');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 z-40 px-4 py-3 flex items-center justify-between border-b">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-semibold">写书评</h1>
        <div className="w-10"></div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex gap-3">
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              className="w-20 h-28 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{selectedBook.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{selectedBook.author}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-800">给这本书评分</h3>
          </div>
          <StarRating
            rating={rating}
            onRatingChange={setRating}
            size={32}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="写个标题吧（2-50字）"
            className="w-full px-4 py-3 border-b outline-none"
            maxLength={50}
          />
          <div className="px-4 py-2 flex justify-end text-xs text-gray-400">
            {title.length}/50
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="分享你的阅读感受...（至少10字）"
            className="w-full px-4 py-3 h-48 resize-none outline-none"
            maxLength={5000}
          />
          <div className="px-4 py-2 flex justify-end text-xs text-gray-400">
            {content.length}/5000
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-800 mb-3">添加标签</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-800 mb-3">发布范围</h3>
          <div className="flex gap-3">
            {['公开', '仅关注者可见', '仅自己可见'].map((scope) => (
              <button
                key={scope}
                type="button"
                onClick={() => setPublishScope(scope)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  publishScope === scope
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-gray-200 text-gray-600'
                }`}
              >
                {scope}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="flex-1 py-3 border border-gray-300 rounded-lg font-medium"
          >
            保存草稿
          </button>
          <button
            type="button"
            onClick={handlePreview}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium"
          >
            <Eye size={18} />
            预览
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-primary text-white rounded-lg font-medium"
          >
            发布
          </button>
        </div>
      </form>
    </div>
  );
};
