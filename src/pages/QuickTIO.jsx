import  Header  from "../components/Header.jsx"
import { useState } from "react"
import DateSelector from "../components/DateSelector.jsx"
import TIO from "../components/TIO.jsx"

import "react-datepicker/dist/react-datepicker.css"
import "./QuickTIO.css"

const QuickTIO = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isSubmitted, setIsSubmitted] = useState(false)

  const getDate = (date) => {
    setSelectedDate(date)
    return date
  }


  const onClick = () => {
    setIsSubmitted(true)
  }

  const onReset = () => {
    setIsSubmitted(false)
    setSelectedDate(new Date())
  }

  return (
    <div>
      <Header />
      { (isSubmitted) ?(
        <div className="content">
          <div className="content-box">
            <TIO endDate={selectedDate}/>
            <button className="submit-button" onClick={onReset}>New Quick TIO</button>
          </div>
        </div>
      ) : ( 
      <div className="content">
        <div className="content-box">
          <h1>Enter Your End of Service Date</h1>
          <DateSelector getDate={getDate}/>
          <button className="submit-button" onClick={onClick}>Submit</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default QuickTIO