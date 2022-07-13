import React, { useState, useEffect } from "react"
import { UserAuth } from "../context/AuthContext"
import { db } from "../firebaseConfig"
import { onSnapshot, doc } from "firebase/firestore"
import SavedShows from "../components/SavedShows"

const Account = () => {
  const bgImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg"
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies)
    })
  }, [user?.email])

  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <img className="w-full h-[450px] object-cover" src={bgImage} alt="/" />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-[450px]" />
        <h1 className="text-gray-300 font-bold text-3xl m-4">Liked Shows</h1>
        {movies.length > 0 ? (
          <SavedShows movies={movies} />
        ) : (
          <h1 className="text-gray-300 font-semibold text-2xl m-4">
            No shows Liked yet!
          </h1>
        )}
      </div>
    </>
  )
}

export default Account
