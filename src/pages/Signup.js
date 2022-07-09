import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Signup = () => {
  const bgImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" hidden absolute sm:block w-full h-screen object-cover"
          src={bgImage}
        />
        <div className="w-full h-full fixed bg-black/70" />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="bg-black/75 mx-auto max-w-[450px] h-[600px] text-white">
            <div className="w-[320px] py-16 mx-auto h-screen">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-3"
              >
                <input
                  className="p-3 my-2 rounded bg-gray-600 outline-none"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 rounded bg-gray-600 outline-none"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 px-6 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between text-sm font-semibold text-gray-500">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-500 text-sm font-semibold">
                    Already Registered?
                  </span>
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
