import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateBlog } from "./CreateBlog";
import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Registeration } from "./Registeration";
import { ErrorPage } from "./ErrorPage";
import { BlogDetails } from "./BlogDetails";
import { PrivateRoute } from "./PrivateRoute";
import { Blogs } from "./Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* My Private Routes */}

          {/* My Public Routes */}
          <Route
            path="/blogs"
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <PrivateRoute>
                <BlogDetails />
              </PrivateRoute>
            }
          />
          <Route path="/sign-up" element={<Registeration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
