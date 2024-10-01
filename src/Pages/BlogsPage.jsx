import React from "react";
import CommonHero from "../Components/CommonHero";

const blogPosts = [
  {
    id: 1,
    title: "How to Manage Your Remote Team?",
    category: "Technology",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
    description:
      "Learn effective strategies for managing a remote team successfully.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 2,
    title: "6 Product Launching Emails for Your Next Campaign",
    category: "Marketing",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
    description: "Craft compelling product launch emails that convert.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 3,
    title: "7 Email Marketing Ideas You Can Use",
    category: "Marketing",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    description:
      "Discover innovative email marketing strategies from the best.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 4,
    title: "The Future of Software Development: Trends to Watch",
    category: "Technology",
    image:
      "https://th.bing.com/th/id/OIP.9Tp1gw9fKiw0dq58apwS7wHaEc?rs=1&pid=ImgDetMain",
    description:
      "Stay ahead of the curve with the latest software development trends.",
    author: "Martin Jones",
    date: "July 5, 2021",
  },
  {
    id: 5,
    title: "How to Improve Your Coding Skills?",
    category: "Technology",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    description: "Effective techniques to enhance your programming skills.",
    author: "Martin Jones",
    date: "July 19, 2021",
  },
  {
    id: 6,
    title: "How to Manage Your Remote Team?",
    category: "Technology",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
    description:
      "Learn effective strategies for managing a remote team successfully.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 7,
    title: "6 Product Launching Emails for Your Next Campaign",
    category: "Marketing",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
    description: "Craft compelling product launch emails that convert.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 8,
    title: "7 Email Marketing Ideas You Can Use",
    category: "Marketing",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    description:
      "Discover innovative email marketing strategies from the best.",
    author: "Martin Jones",
    date: "June 12, 2021",
  },
  {
    id: 9,
    title: "The Future of Software Development: Trends to Watch",
    category: "Technology",
    image:
      "https://th.bing.com/th/id/OIP.9Tp1gw9fKiw0dq58apwS7wHaEc?rs=1&pid=ImgDetMain",
    description:
      "Stay ahead of the curve with the latest software development trends.",
    author: "Martin Jones",
    date: "July 5, 2021",
  },
];

const BlogsPage = () => {
  return (
    <section>
      <CommonHero title={"BLOGS"} />
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl font-bold font-serif md:text-5xl"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              Latest from the Blog
            </h2>
            <div className=" w-[230px] mx-auto mt-4 h-[5px] bg-[#ff7222] rounded"></div>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Discover the latest trends and tips in software technology and
              development.
            </p>
          </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src={post.image}
                  alt={post.title}
                />
              </a>
              <span
                className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                  post.category === "Technology"
                    ? "text-rose-500 bg-rose-100"
                    : "text-sky-500 bg-sky-100"
                } mt-9`}
              >
                {post.category}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black">
                  {post.title}
                </a>
              </p>
              <p className="mt-4 text-gray-600">{post.description}</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {post.author} . {post.date}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>
    </section>
  );
};

export default BlogsPage;
