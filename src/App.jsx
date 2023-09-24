import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import QuickTIO from "./pages/QuickTIO.jsx"
import Feed from "./pages/Feed.jsx"


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element= { <About /> }/>
        <Route path="/quicktio" element={ <QuickTIO /> } />
        <Route path="/feed" element={ <Feed /> } />
      </Routes>
    </div>
  )
}

export default App
