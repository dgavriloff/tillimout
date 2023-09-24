import Header from "../components/Header"
import { useState } from "react"

import UserTIO from "../components/UserTIO.jsx";
import axios from 'axios';

const Feed = () => {
  const [userData, setUserData] = useState(undefined)
  
  const timer = setTimeout(()=>{
    axios.get('http://localhost:3001/api/tios')
    .then((response) => {
      setUserData(response.data)
      console.log("getting data")
    })  
    .catch(error => {
      console.log(error)
    })
  }, userData ? 30000 : 0)

  


  
  return (
    <div>
      <Header />
      {console.log("feed")}
      
      {userData ? <UserTIO userData = {userData[0]}/> : <h1>Loading...</h1>}
      

    </div>
  )
}
//




export default Feed