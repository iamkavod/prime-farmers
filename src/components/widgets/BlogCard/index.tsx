"use client";
import { CalendarDays, MessageCircle, User } from "lucide-react";

interface BlogCardProps {
  image: string;
  date: string;
  author: string;
  comments: number;
  title: string;
  description: string;
}

export default function BlogCard({
  image,
  date,
  author,
  comments,
  title,
  description,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div
        className="relative w-full h-64 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        <a href="#" className="absolute inset-0"></a>
      </div>
      <div className="p-6 text-center">
        <div className="flex justify-center text-sm text-gray-500 mb-4 space-x-4">
          <span className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1 text-green-600" /> {date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1 text-green-600" /> {author}
          </span>
          <span className="flex items-center">
            <MessageCircle className="h-4 w-4 mr-1 text-green-600" /> {comments}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 leading-tight">
          <a href="#" className="hover:text-green-600 transition-colors">
            {title}
          </a>
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href="#"
          className="inline-block px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
