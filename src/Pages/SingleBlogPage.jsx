import React from "react";
import { useLocation } from "react-router-dom";
import CommonHero from "../Components/CommonHero";

const BlogDetailPage = () => {
  const location = useLocation();
  const blogPost = location.state?.blogPost; // Get the blog post data from the state

  if (!blogPost) {
    return <p>No blog post data available.</p>; // Handle the case where no data is passed
  }

  return (
    <section>
      {/* Container */}
      <CommonHero title={"BLOG DETAILS"} />
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 border my-16 shadow-xl rounded">
        {/* Component */}

        <div className="flex flex-col gap-14 lg:gap-20">
          {/* Image */}
          <div className="flex justify-between items-center gap-10">
            <img
              src={`http://localhost:3000/Images/${blogPost.image}`}
              alt={blogPost.title}
              className="w-[580px] h-[500px] rounded"
            />
            <div className="flex flex-col gap-9 justify-center items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-center">
                {blogPost.title}
              </h2>

              <div className="">
                <hr />
                <h2 className="text-xl py-2 font-medium uppercase tracking-wider text-center text-[#006CB7]">
                  {blogPost.category}
                </h2>
                <hr />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-14 lg:gap-20">
            <p className="flex-1 text-lg text-justify">{blogPost.content}</p>
            <hr />
            <p>
              {blogPost.author} ·{" "}
              {new Date(blogPost.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
