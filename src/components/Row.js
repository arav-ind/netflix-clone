import React, { useEffect, useState, useRef } from "react"
import Movies from "./Movies"
import axios from "axios"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Row = ({ title, dataURL }) => {
  const [movies, setMovies] = useState([])
  const slideRef = useRef(null)

  useEffect(() => {
    axios.get(dataURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  const slideLeft = () => {
    let slider = slideRef.current
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = slideRef.current
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div>
      <div className="relative">
        <h2 className="text-white font-bold p-4 text-2xl">{title}</h2>
      </div>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full left-2 absolute hover:opacity-100 opacity-50 hidden group-hover:block z-[50]"
          size={40}
          onClick={slideLeft}
        />
        <div
          ref={slideRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movies key={id} id={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded-full right-2 absolute hover:opacity-100 opacity-50 hidden group-hover:block z-[50]"
          size={40}
          onClick={slideRight}
        />
      </div>
    </div>
  )
}

export default Row
