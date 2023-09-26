//using DatePicker's Custom Selection Option

import  DatePicker  from "react-datepicker";
import { useState } from "react";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "./DateSelector.css"

const DateSelector = ({getDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 20, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="date-selector">
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div 
        style={{
          margin: 10,
          display: "flex",
          justifyContent: "center",
        }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>

      )}
      selected={startDate}
      onChange={(date) => setStartDate(getDate(date))}
    />

</div>
  );
};

export default DateSelector;