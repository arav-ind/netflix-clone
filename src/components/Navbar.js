import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logOut()
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="flex justify-between items-center py-4 z-[100] absolute px-4 w-full">
      <Link to="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <button onClick={handleLogout} className="text-white p-3 pr-4">
            Logout
          </button>
          <Link to="/account">
            <button className="bg-red-600 text-white px-3 py-3 rounded-md">
              Account
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white p-3 pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white px-3 py-3 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
