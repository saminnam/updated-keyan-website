import { useEffect, useState } from "react";
import { apiRequest } from "./Api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = () => {
    apiRequest("get", "blogs")
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("Failed to fetch blogs", error);
      });
  };
  return (
    <section className="bg-gray-100">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20 group">
        <h2
          className="text-center text-3xl font-serif font-bold md:text-5xl lg:text-left"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          The latest news
        </h2>
        <div className="lg:w-0 w-40 lg:group-hover:w-40 mt-4 transition-all duration-500 h-[5px] bg-[#006CB7] rounded"></div>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
          The Future of Software Development: Trends to Watch.
        </p>
        {/* Content */}
        {blogs.length > 0 ? (
          <div className="mx-auto grid gap-8 lg:grid-cols-2">
            {blogs
              .slice(0, 4)
              .reverse()
              .map((blog) => (
                <a
                  href="#"
                  key={blog.id}
                  className={`flex flex-col gap-4 rounded-md ${
                    blog.id === 1
                      ? "[grid-area:1/1/4/2] lg:pr-8"
                      : "lg:flex-row lg:border-b lg:border-gray-300"
                  } `}
                  data-aos="fade-up"
                  data-aos-duration={blog.aosDuration}
                >
                  <img
                    src={`http://localhost:3000/Images/${blog.image}`}
                    alt={blog.title}
                    className={`inline-block ${
                      blog.id === 1
                        ? "h-72 w-full"
                        : "h-60 w-full md:h-32 lg:h-32 lg:w-32"
                    } object-cover`}
                  />
                  <div className="flex flex-col items-start py-4 lg:px-8">
                    <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                      <p className="text-sm font-semibold text-blue-600">
                        {blog.category}
                      </p>
                    </div>
                    <p className="mb-4 text-xl font-bold md:text-2xl">
                      {blog.title}
                    </p>
                    <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                      <p>{blog.author}</p>
                      <p className="mx-2 hidden lg:block">-</p>
                      <p>{blog.readTime}</p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <div className="text-center">Loading Blogs...</div>
        )}
      </div>
    </section>
  );
};

export default Blog;
