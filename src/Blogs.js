import React from "react";
import { useState, useEffect } from "react";
import { BlogItems } from "./BlogItems";
import { useFetch } from "./custom-hooks/useFetch";

export const Blogs = () => {
  const url = "http://localhost:8000/blogs";

  const { data: allBlogs, isError, isLoading, errorMessage } = useFetch(url);

  if (isLoading) {
    return <h2>Loading .....</h2>;
  }
  const getBlogDetails = (blogId) => {
    console.log(`this is blog ${blogId}`);
  };
  return (
    <div className='blogs'>
      <h2>All Blogs</h2>
      {isError && <h3>{errorMessage}</h3>}
      {allBlogs.map((blog) => {
        return (
          <BlogItems key={blog.id} {...blog} getBlogDetails={getBlogDetails} />
        );
      })}
    </div>
  );
};
