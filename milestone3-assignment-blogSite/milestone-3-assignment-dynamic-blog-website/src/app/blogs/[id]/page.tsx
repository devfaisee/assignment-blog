import FirstPost from '@/app/components/lib/first-post';
import SecondPost from '@/app/components/lib/second-post';
import ThirdPost from '@/app/components/lib/third-post';

import React from 'react';

interface BlogProps {
  params: { id: string };
}

const Blog = ({ params }: BlogProps) => {
  const posts = [
    { id: 1, title: "first-post", description: <FirstPost /> },
    { id: 2, title: "second-post",  description: <SecondPost /> },
    { id: 3, title: "third-post", description: <ThirdPost /> },
  ];

  const selectedPost = posts.find(p => p.title == params.id)

  return (
    <div>
      {selectedPost?.description}
     
    </div>
  );
};

export default Blog;
