"use client";

import { useEffect, useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        }
      } catch (error) {
        console.error("Error parsing comments from local storage:", error);
      }
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]); 

  // Handle adding a new comment
  const addComment = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  // Handle deleting a comment
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Comments</h2>

      {/* Input Field */}
      <form className="flex gap-2 mb-4" onSubmit={addComment}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </form>

      {/* Comments List */}
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded"
            >
              <span>{comment}</span>
              <button
                onClick={() => deleteComment(index)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </ul>
    </div>
  );
};

export default CommentSection;
