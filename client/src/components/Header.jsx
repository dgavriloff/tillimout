import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="header-elements">
        <h1 className="header-header">
        TIO
        </h1>
        <ul className="header-nav">
          <li className="header-link"><Link to="/">Home</Link></li>
          <li className="header-link"><Link to="/about">About</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Header