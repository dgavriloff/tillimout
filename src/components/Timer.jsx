import {useState, useEffect } from "react"
import { intervalToDuration, isAfter, formatDuration, parseISO } from 'date-fns'

const Timer = ({endDate}) => {
  const [currDate, setCurrDate] = useState(new Date())

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrDate(new Date())
    }, 1000)

    return () => clearTimeout(timerId)
  }, [currDate])

  endDate = parseISO(endDate)
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
  

  const arrayDuration = formatDuration(getDuration()).split()

  const formattedDuration = arrayDuration.map(i => `<br>${i}</br>`)

  return (

    <div className="timer">{formattedDuration} {console.log(formatDuration(getDuration()))}</div>

  )
}

export default Timer