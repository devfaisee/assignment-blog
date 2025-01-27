import React from "react";
import BlogCard from "../components/cards/blogCard";
import firstImage from "@/assets/A-Brief-History-of-AI_cover.png";
import secondImage from "@/assets/AI-Echo.png";
import thirdImage from "@/assets/AI-collaborator.png";
import { StaticImageData } from "next/image";

// Define the blog data type
interface BlogCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const Blog = () => {
  // Blog data
  const blogs: BlogCardProps[] = [
    {
      id: 1,
      image: firstImage,
      title: "A Brief History of AI",
      description:
        "Explore the fascinating journey of AI from its inception to modern advancements.",
      link: "/blogs/first-post",
    },
    {
      id: 2,
      image: secondImage,
      title: "AI in the Modern World",
      description:
        "Discover how AI is shaping industries and transforming the way we live.",
      link: "/blogs/second-post",
    },
    {
      id: 3,
      image: thirdImage,
      title: "AI as a Collaborator",
      description:
        "Learn about AI's role as a creative and productive collaborator in various fields.",
      link: "/blogs/third-post",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">All Blogs</h1>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
