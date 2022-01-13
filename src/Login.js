import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Registeration } from "./Registeration";
import { useForm } from "react-hook-form";
import { useGlobalCustomContext } from "./custom-hooks/context";

export const Login = () => {
  const { isLoggedIn, accessYes } = useGlobalCustomContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit1 = (e) => {

    console.log(e);
    console.log("Why are you trying to login");
    accessYes();
    navigate("/blogs");
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit1)}>
        <section className="login-wrapper">
          <div className="login-email">
            <label htmlFor="login-email-input">Email</label>
            <input
              type="email"
              name="login-email-input"
              id="login-email-input"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p>Please the email properly</p>}
          </div>
          <div className="login-password">
            <label htmlFor="login-password-input">Password</label>
            <input
              type="password"
              name="login-password-input"
              id="login-password-input"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && <p>Please check the Password</p>}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>don't have an account? </p>
          <p>
            register<Link to={"/sign-up"}>here</Link>
          </p>
        </section>
      </form>
    </div>
  );
};
