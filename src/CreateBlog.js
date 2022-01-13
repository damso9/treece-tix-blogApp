import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Treece");

  const userData = { title, body, author };

  const postDataToEndPoint = async () => {
    try {
      const resp = await axios.post("http://localhost:8000/blogs", userData);
      console.log(resp.data);
      console.log(userData);
      navigate("/");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      // postDataToEndPoint();
      postDataToEndPoint();
    }
  };
  return (
    <div className="create-blog">
      <h2>Create a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-blog-input-container">
          <div className="create-blog-title">
            <label htmlFor="blog-title-input">Blog Title:</label>
            <input
              type="text"
              name="blog-title-input"
              id="blog-title-input"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="create-blog-body">
            <label htmlFor="blog-body-input">Blog Body:</label>
            <textarea
              name="blog-body-input"
              id="blog-body-input"
              cols="30"
              rows="10"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="create-blog-author">
            <label htmlFor="blog-author-input">Blog Author:</label>
            <select
              id="blog-author-input"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            >
              <option value="Treece">Treece</option>
              <option value="Dammie">Dammie</option>
              <option value="Daerice">Daerice</option>
              <option value="April">April</option>
            </select>
          </div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      {/* <button 
        // onClick={() => {
        //   navigate("/login");
        // }}
      >
        Login
      </button> */}
    </div>
  );
};
