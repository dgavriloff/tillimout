import {useState } from "react"
import { intervalToDuration, isAfter, formatDuration } from 'date-fns'


const TIO = ({endDate}) => {
  const [currDate, setCurrDate] = useState(new Date())
  const dateIsAfter = isAfter(endDate, currDate) 
  
  const getDuration = () => {
    if (dateIsAfter)
      return intervalToDuration({
        start: currDate,
        end: endDate
      })
    else
      return intervalToDuration({
        start: endDate,
        end: currDate
      })
  }
  
  setTimeout(() => {
    setCurrDate(new Date())
  }, 1000)
  const aformattedDuration = {
    years : 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0

  }

  return (

    <h1>{formatDuration(getDuration())}</h1>

  )
}

export default TIO