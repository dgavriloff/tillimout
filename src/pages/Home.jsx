import Header from "../components/Header.jsx"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <div className="home-welcome">
        <h1>Welcome To tillimout.com!(TIO)</h1>
      </div>
      <ul className="home-links">
        <Link><li>Quick TIO</li></Link>
        <Link><li>TIO feed</li></Link>
        <Link><li>Register</li></Link>
      </ul>
    </div>
  )
}

export default Home