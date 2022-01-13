import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "./custom-hooks/useFetch";

export const BlogDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const blogUrl = `http://localhost:8000/blogs/${id}`;
  const { data, isError, errorMessage, isLoading } = useFetch(blogUrl);

  const deleteDataFromEndpoint = async () => {
    try {
      const resp = await axios.delete(`http://localhost:8000/blogs/${id}`);
      console.log(resp.data);
      navigate("/");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteDataFromEndpoint();
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  console.log(data);

  return (
    <div className="blog-details">
      <h2>{data.title}</h2>
      <p> {data.body}</p>

      <p className="written-by">writtem by {data.author}</p>
      <button onClick={handleDelete}>Delete POST</button>
    </div>
  );
};
