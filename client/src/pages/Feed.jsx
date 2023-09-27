import Header from "../components/Header"
import { useState } from "react"

import UserTIO from "../components/UserTIO.jsx";
import axios from 'axios';

const Feed = () => {
  const [userData, setUserData] = useState(undefined)
  
  const timer = setTimeout(()=>{
    axios.get('/api/tios')
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
      
      {userData ? <ul>{userData.toReversed().map(userData => <li  key={userData.id}><UserTIO userData = {userData} /></li>)}</ul> : <h1>Loading...</h1>}
      

    </div>
  )
}
//




export default Feed