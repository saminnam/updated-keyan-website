import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Emerging Technologies and How They Will Shape the Software Industry",
  //     category: "TECHNOLOGIES",
  //     author: "John Doe",
  //     readTime: "6 mins read",
  //     imageUrl: "https://i.pinimg.com/564x/f2/6b/fc/f26bfc9c7bdb5ca1c6a787f1b4cc4d77.jpg",
  //     aosDuration: "2000",
  //   },
  //   {
  //     id: 2,
  //     title: "A Guide to Selecting Tools and Technologies",
  //     category: "TECHNOLOGIES",
  //     author: "Jane Smith",
  //     readTime: "8 mins read",
  //     imageUrl: "https://i.pinimg.com/736x/da/90/6d/da906dbc9d3b5c8945b3bd507173300d.jpg",
  //     aosDuration: "2000",
  //   },
  //   {
  //     id: 3,
  //     title: "Understanding Agile Practices and Their Benefits for Teams",
  //     category: "SOFTWARE DEVELOPMENT",
  //     author: "Michael Lee",
  //     readTime: "6 mins read",
  //     imageUrl: "https://i.pinimg.com/564x/57/58/b6/5758b6667aa24cc4f6aabfef472a0a0c.jpg",
  //     aosDuration: "3000",
  //   },
  //   {
  //     id: 4,
  //     title: "How AI is Revolutionizing Software Across Industries",
  //     category: "ARTIFICIAL INTELLIGENCE",
  //     author: "Emily Davis",
  //     readTime: "5 mins read",
  //     imageUrl: "https://i.pinimg.com/564x/79/0f/30/790f30d30a937ac74d95eef8df66dcb6.jpg",
  //     aosDuration: "4000",
  //   },
  // ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
   fetcher() 
  },[])

  const fetcher = () => {
    axios.get("http://localhost:3000/api/blogs")
    .then((res) => {
      setBlogs(res.data)
    })
  }
  return (
    <section className="group">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2
          className="text-center text-3xl font-serif font-bold md:text-5xl lg:text-left"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          The latest and greatest news
        </h2>
        <div className="lg:w-0 w-96 lg:group-hover:w-96 transition-all duration-500 h-[5px] mt-4 bg-[#006CB7] rounded"></div>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
          The Future of Software Development: Trends to Watch in 2024
        </p>
        {/* Content */}
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          {/* Map through the blogs array */}
          {blogs
          .slice(0,4)
          .reverse()
          .map((blog) => (
            <a
              href="#"
              key={blog.id}
              className={`flex flex-col gap-4 rounded-md ${blog.id === 1 ? '[grid-area:1/1/4/2] lg:pr-8' : 'lg:flex-row lg:border-b lg:border-gray-300'} `}
              data-aos="fade-up"
              data-aos-duration={blog.aosDuration}
            >
              <img
                src={`http://localhost:3000/Images/${blog.image}`}
                alt={blog.title}
                className={`inline-block ${blog.id === 1 ? 'h-72 w-full' : 'h-60 w-full md:h-32 lg:h-32 lg:w-32'} object-cover`}
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
      </div>
    </section>
  );
};

export default Blog;
