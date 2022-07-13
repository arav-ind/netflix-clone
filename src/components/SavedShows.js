import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { UserAuth } from "../context/AuthContext"

const SavedShows = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"
  const { user } = UserAuth()
  const movieRef = doc(db, "users", `${user?.email}`)
  const removeMovie = async (movieId) => {
    const result = movies.filter((item) => item.id !== movieId)
    await updateDoc(movieRef, {
      savedMovies: result,
    })
  }
  return (
    <div>
      <div className="w-full h-full m-8">
        {movies?.map((item, i) => (
          <div
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2"
            key={i}
          >
            <img
              className="w-full h-full block"
              src={`${imageBaseUrl}${item?.img}`}
              alt={`${item.title}`}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
              <p className="text-white whitespace-normal flex justify-center items-center h-full w-full text-center">
                {item?.title}
              </p>
              <div
                onClick={() => removeMovie(item.id)}
                className="top-4 right-4 absolute text-white"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedShows
