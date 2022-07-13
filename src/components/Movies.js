import React, { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { db } from "../firebaseConfig"
import { UserAuth } from "../context/AuthContext"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"

const Movies = ({ item }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"
  const { user } = UserAuth()
  const [like, setLike] = useState(false)
  const movieId = doc(db, "users", `${user?.email}`)

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item.backdrop_path,
        }),
      })
    } else {
      alert("Please login to save movies")
    }
  }

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2">
      <img
        className="w-full h-full block"
        src={`${imageBaseUrl}${item?.backdrop_path}`}
        alt={`${item.title}`}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="text-white whitespace-normal flex justify-center items-center h-full w-full text-center">
          {item?.title}
        </p>
        <div onClick={saveMovie} className="top-4 left-4 absolute text-white">
          {like ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  )
}

export default Movies
