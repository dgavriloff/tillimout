import {useState, useEffect } from "react"
import { intervalToDuration, isAfter, formatDuration, parseISO } from 'date-fns'
import Timer from "./Timer.jsx"
import axios from "axios"
import "./UserTIO.css"


const UserTIO = ({userData}) => {
  const [liked, setLiked] = useState(false)
  const [currLikes, setCurrLikes] = useState(userData.likes)



  const likeOrDislike = () => {
    setLiked(!liked)
    !liked ? setCurrLikes(currLikes + 1) : setCurrLikes(currLikes - 1)
    axios.post('http://localhost:3001/api/tios', {...userData, likes: currLikes})
    .then((response) => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
      <div className="user-tio">
        <div className="single-tio">
          <h2>
            {userData.rank ? userData.rank : ""} {userData.name ? userData.name : userData.username} has 
          </h2>
          <div>
            <Timer endDate={userData.endDate}/>
          </div>
            <h2>
              till they're out {userData.branch ? `of the ${userData.branch}` : ""}
            </h2>
            <div className="like-section">
              {!liked ? <button onClick={likeOrDislike}>Like</button> : <button onClick={likeOrDislike}>Dislike</button>}
            <h3>
              Likes: {currLikes}
            </h3>
            </div>
        </div>
      </div>

  )
}

export default UserTIO