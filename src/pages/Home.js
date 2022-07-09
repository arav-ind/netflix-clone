import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        id={"upcoming"}
        title={"Upcoming"}
        dataURL={requests.requestUpcoming}
      />
      <Row
        id={"topRated"}
        title={"Top Rated"}
        dataURL={requests.requestTopRated}
      />
      <Row
        id={"trending"}
        title={"Trending"}
        dataURL={requests.requestTrending}
      />
      <Row id={"popular"} title={"Popular"} dataURL={requests.requestPopular} />
    </div>
  )
}

export default Home
