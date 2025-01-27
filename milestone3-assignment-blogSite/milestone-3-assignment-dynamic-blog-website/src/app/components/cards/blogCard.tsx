import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({ image, title,  description, link }: BlogCardProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {/* Image Section */}
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
        <div className="p-6">

          {/* Title */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>

          {/* Description */}
          <p className="leading-relaxed mb-3">{description}</p>

          {/* Learn More Link */}
          <div className="flex items-center flex-wrap">
            <Link
              href={link}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>)
}

export default BlogCard