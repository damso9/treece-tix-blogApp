import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Registeration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="registeration">
      <h2>Registeration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="reg-form-wrapper">
          <div className="reg-first-name">
            <label htmlFor="reg-first-name-input">First Name:</label>
            <input
              type="text"
              name="reg-first-name-input"
              id="reg-first-name-input"
              {...register("firstName", { required: true, maxLength: 10 })}
            />
            {errors.firstName && (
              <p>
                Please fill in the first Name with a max limit of 10 strings
              </p>
            )}
          </div>
          <div className="reg-last-name">
            <label htmlFor="reg-last-name-input">Last Name:</label>
            <input
              type="text"
              name="reg-last-name-input"
              id="reg-last-name-input"
              {...register("lastName", { required: true, maxLength: 10 })}
            />
            {errors.lastName && (
              <p>Please fill in the last name with a max limit of 10 strings</p>
            )}
          </div>
          <div className="reg-username">
            <label htmlFor="reg-username-input">UserName:</label>
            <input
              type="text"
              name="reg-username-input"
              id="reg-username-input"
              {...register("userName", { required: true, maxLength: 10 })}
            />
            {errors.userName && (
              <p>Please fill in the username with a max limit of 10 strings</p>
            )}
          </div>
          <div className="reg-email">
            <label htmlFor="reg-email-input">Email:</label>
            <input
              type="email"
              name="reg-email-input"
              id="reg-email-input"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p>Please the email properly</p>}
          </div>
          <div className="reg-password">
            <label htmlFor="reg-password-input">Password:</label>
            <input
              type="password"
              name="reg-password-input"
              id="reg-password-input"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && <p>Please check the Password</p>}
          </div>
          <div className="reg-bio">
            <label htmlFor="reg-bio-input">Bio:</label>
            <textarea
              name="reg-bio-input"
              id="reg-bio-input"
              cols="30"
              rows="10"
              {...register("bio", { required: true, maxLength: 100 })}
            ></textarea>
            {errors.bio && <p>Please fill in your bio</p>}
          </div>
          <button type="submit" className="reg-btn">
            Register
          </button>
          <p>Already have an account? </p>
          <p>
            <Link to="/">Sign in</Link>
          </p>
        </section>
      </form>
    </div>
  );
};
