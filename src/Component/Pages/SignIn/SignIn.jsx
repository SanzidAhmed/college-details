import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext) || {};
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    signInUser(data.email, data.password)
      .then(() => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold">Please Sign In</h1>
      <form
        className="grid grid-cols-1 gap-4 w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <input className="btn bg-[#F45050]" value="sign in" type="submit" />
      </form>
      <p className="text-center text-red-600">{error}</p>
      <p className="text-center">are you new to college details? <Link to="/signup" className="text-red-600">Sign UP</Link></p>
    </div>
  );
};

export default SignIn;
