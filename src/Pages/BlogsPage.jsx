import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonHero from "../Components/CommonHero";
import axios from "axios";

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 21;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/blogs");
      setBlogPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch blogs");
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice().reverse().slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <CommonHero title={"BLOGS"} />
      <section className="py-10 bg-white sm:py-16 lg:py-24 group">
        <div className="px-4 mx-auto sm:px-6 lg:px-20 max-w-screen-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif md:text-5xl" data-aos="flip-down" data-aos-duration="2000">
              Latest from the Blog
            </h2>
            <div className="lg:w-0 w-72 lg:group-hover:w-72 transition-all duration-500 mx-auto mt-4 h-[5px] bg-[#006CB7] rounded"></div>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Discover the latest trends and tips in software technology and development.
            </p>
          </div>

          <div className="flex flex-col mt-12 lg:mt-16 lg:flex-row lg:flex-wrap justify-between">
            {currentBlogs.map((post) => (
              <div key={post.id} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="w-[400px] mb-12">
                <Link to={`/blogs/${post.id}`} state={{ blogPost: post }} title={post.title} className="block aspect-w-4 aspect-h-3">
                  <img className="object-cover w-full h-[250px]" src={`http://localhost:3000/Images/${post.image}`} alt={post.title} />
                </Link>
                <span
                  className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                    post.category === "Technology" ? "text-rose-500 bg-rose-100" : "text-sky-500 bg-sky-100"
                  } mt-9`}
                >
                  {post.category}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <Link to={`/blogs/${post.id}`} state={{ blogPost: post }} title={post.title} className="text-black">
                    {post.title}
                  </Link>
                </p>
                <p className="mt-4 text-gray-600 text-justify">{post.subContent}</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {post.author} · {new Date(post.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination controls with arrows */}
          <div className="flex justify-center mt-8">
            <ul className="flex space-x-2">
              {/* Previous Button */}
              {currentPage > 1 && (
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className="px-4 py-2 border rounded bg-gray-200 text-gray-700"
                  >
                    ← Previous
                  </button>
                </li>
              )}
              
              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              {currentPage < totalPages && (
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className="px-4 py-2 border rounded bg-gray-200 text-gray-700"
                  >
                    Next →
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogsPage;
