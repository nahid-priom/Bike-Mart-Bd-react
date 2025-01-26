import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <OtherHero
        title="Blog"
        description="Discover our services and customer review"
      />
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border cursor-pointer border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-red-500 font-medium hover:text-red-600 transition-all"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
