import React from 'react';
import CommentSection from '../commentSection';
import AuthorCard from '../cards/authorCard';
import Image from 'next/image';
import profile from '@/assets/profile.jpg';
import firstImage from "@/assets/A-Brief-History-of-AI_cover.png";

const FirstPost = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
     <div className="mb-8 relative w-full h-96 overflow-hidden rounded-lg"> 
          <Image
              src={firstImage}
              alt='Cover image'
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
          />
        </div>
      <h1 className="mt-10 text-3xl text-center font-bold mb-4 text-gray-800">The AI Mirror: Reflecting Ourselves</h1>

      <p className="mb-4 text-gray-700">
        Think about it. AI learns from the data we feed it. That data is a
        messy, biased, beautiful, and flawed record of human behavior, thought,
        and creation. If an AI generates biased output, it&apos;s not the AI that&apos;s
        inherently biased; it&apos;s reflecting the biases present in the data it
        was trained on – <em className="italic">our</em> biases.
      </p>

       <p className="mb-4 text-gray-700">
        The real power (and the real danger) of AI lies in this mirroring
        effect. It forces us to confront aspects of ourselves we might prefer
        to ignore. It reveals the hidden patterns in our behavior, the biases
        embedded in our systems, the potential and the limitations of our own
        creativity.
      </p>

      <p className="mb-4 text-gray-700">
        So, the next time you interact with an AI, don&apos;t just see a machine. See
        a reflection. See yourself. And ask yourself what that reflection is
        telling you. Because understanding the AI mirror is crucial to
        understanding ourselves.
      </p>
      <AuthorCard name="Ali Haider Noorani" bio="A passionate writer and developer" profilePicture={profile}/>
      <CommentSection/>
    </div>
  );
};

export default FirstPost;