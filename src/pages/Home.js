import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"

const Home = () => {
  return (
    <div>
      <Main />
      <Row title={"Upcoming"} dataURL={requests.requestUpcoming} />
      <Row title={"Top Rated"} dataURL={requests.requestTopRated} />
      <Row title={"Trending"} dataURL={requests.requestTrending} />
      <Row title={"Popular"} dataURL={requests.requestPopular} />
    </div>
  )
}

export default Home
