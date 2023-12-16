import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser =  result.user;
        console.log(createdUser)
      })
      .catch((err) => {
        console.log(err)
      });
  };
  return (
    <div>
      <form
        className="grid grid-cols-1 gap-4 w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("photo", { required: true })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            className="input input-bordered w-full"
            {...register("gender")}
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>
        <input className="btn bg-[#F45050]" type="submit" value="Sign Up" />
      </form>
      <div className="w-1/2 mx-auto"></div>
      <p className="text-center mt-4">
        Already have an account? please{" "}
        <Link to="/signin" className="text-orange-500 font-bold">
          Sign In
        </Link>
      </p>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
};

export default Signup;
