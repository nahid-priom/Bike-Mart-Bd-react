import React from "react";
import { useParams } from "react-router-dom";
import OtherHero from "../components/OtherHero";

const blogs = [
  {
    id: 1,
    title: "Top 10 Motorcycles of 2025",
    excerpt:
      "Discover the latest motorcycles of 2025, featuring the best in technology and performance.",
    image:
      "https://www.datocms-assets.com/119921/1714137474-top-10-ten-fastest-bikes_04.jpg?auto=format&w=800",
  },
  {
    id: 2,
    title: "How to Choose the Right Motorcycle",
    excerpt:
      "A guide to help you pick the perfect motorcycle for your needs and preferences.",
    image:
      "https://images.pexels.com/photos/3064630/pexels-photo-3064630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "The Evolution of Superbikes",
    excerpt:
      "A journey through the history of superbikes and how they've transformed over the years.",
    image:
      "https://i.ytimg.com/vi/SnDpKKuz9Xo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuMlEDkGpIvn_-yTtJ8EUq9ziZIw",
  },
  {
    id: 4,
    title: "Top 5 Motorcycle Safety Tips",
    excerpt:
      "Stay safe on the road with these essential motorcycle safety tips for riders of all levels.",
    image:
      "https://i.ytimg.com/vi/LSOE5xdqKE8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlf8a9CHcX_urdM4UKC7nIvXakvg",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center text-red-600 text-2xl mt-10">Blog Not Found</h1>;
  }

  return (
    <>
    <OtherHero title={blog.title} description= "Share your experience with us"/>
    <section className="mt-8 max-w-4xl mx-auto px-4">
      
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-96 object-cover rounded-lg shadow-md mb-6"
        />
      <p className="text-lg text-gray-700 leading-relaxed">{blog.excerpt}</p>
    </section>
        </>
  );
};

export default BlogDetails;
