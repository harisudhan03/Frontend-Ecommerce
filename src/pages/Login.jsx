import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [currentStste, setCurrentStste] = useState('Sign Up')

  const onSubmithandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmithandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 animate__animated animate__fadeIn animate__slow	2s"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10 ">
        <p className="prata-regular text-3xl">{currentStste}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentStste === "Login" ? (
        " "
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
          required
        />
      )}
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentStste === "Login" ? (
          <p
            onClick={() => setCurrentStste("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentStste("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">
        {currentStste === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;