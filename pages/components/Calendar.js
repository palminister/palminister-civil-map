import React, { useState } from 'react'
const Calendar = ({ selectedMonth, setSelectedMonth }) => {
  const months = {
    1: 'ม.ค.',
    2: 'ก.พ.',
    3: 'มี.ค.',
    4: 'เม.ย.',
    5: 'พ.ค.',
    6: 'มิ.ย.',
    7: 'ก.ค.',
    8: 'ส.ค.',
    9: 'ก.ย.',
    10: 'ต.ค.',
    11: 'พ.ย.',
    12: 'ธ.ค.',
  }
  const onSelectMonth = (key, event) => {
    key = parseInt(key)
    if (selectedMonth.includes(key)) {
      // console.log('included')
      let tempArray = [...selectedMonth]
      tempArray.splice(tempArray.indexOf(key), 1)
      setSelectedMonth(tempArray)
      event.target.style.backgroundColor = 'transparent'
    } else {
      // console.log('not included')
      setSelectedMonth([...selectedMonth, key])
      event.target.style.backgroundColor = '#A8F3D0'
    }
  }

  return (
    <div className="font-bold bg-white font-noto">
      <div className="flex p-10">
        <h1 className="pr-3 text-4xl">เลือกเดือน</h1>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/spiral-notepad_1f5d2-fe0f.png"
          alt="calendar"
          width={40}
          className="self-center"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="grid grid-cols-4 gap-4 p-5 pb-10 m-auto">
          {Object.keys(months).map((key) => (
            <button
              key={key}
              onClick={(event) => onSelectMonth(key, event)}
              className="flex items-center justify-center w-16 h-16 m-auto font-bold transition ease-in border border-green-300 rounded-md focus:outline-none"
            >
              {months[key]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Calendar
