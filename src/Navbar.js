import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalCustomContext } from "./custom-hooks/context";

export const Navbar = () => {
  const { isLoggedIn, accessNo } = useGlobalCustomContext();
  const navigate = useNavigate();

  const logOut = () => {
    accessNo();
    navigate("/");
  };

  return (
    <>
      <div className="navbar-container">
        <nav>
          <ul className="nav1">
            <li className="treece-tix">
              Treece
              <span style={{ color: "greenyellow", fontWeight: "bold" }}>
                Tix
              </span>
            </li>
          </ul>
          <ul className="nav2">
            {isLoggedIn && (
              <li>
                <Link to="/create" className="link-btn">
                  New Blogs
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/sign-up" className="link-btn">
                  Registeration
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="link-btn" onClick={logOut}>
                Log Out
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
