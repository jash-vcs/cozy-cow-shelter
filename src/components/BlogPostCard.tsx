
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  featured?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  date, 
  author,
  featured = false
}) => {
  if (featured) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{author}</span>
            </div>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-cow-brown">
            {title}
          </h3>
          <p className="text-gray-600 mb-5">
            {excerpt}
          </p>
          <Link 
            to={`/blog/${id}`} 
            className="text-cow-brown font-medium hover:text-cow-earth flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow bg-white hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="font-serif text-xl font-bold mb-2 text-cow-brown">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${id}`} 
          className="text-cow-brown text-sm font-medium hover:text-cow-earth flex items-center"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
