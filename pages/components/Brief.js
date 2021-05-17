import * as civilData from '../data/civil_data_filtered.json'
import { FlyToInterpolator } from 'react-map-gl'
import { easeCubic } from 'd3-ease'

import returnType from './returnType'
const Brief = ({
  setViewport,
  selectedMonth,
  selectedRegion,
  setEmojiSelect,
}) => {
  const emoji = returnType
  const filteredData = civilData.events
    .filter((event) => {
      if (selectedMonth != undefined) {
        if (selectedMonth.includes(parseInt(event.date.split('-')[1])))
          return event
      }
    })
    .filter((event) => {
      if (selectedRegion != undefined) {
        if (selectedRegion.length != 0) {
          if (selectedRegion.includes(event.region)) {
            return event
          }
        } else {
          return event
        }
      } else {
        return event
      }
    })
  const byYoungAdults = filteredData.filter((event) => {
    if (event.by == 1) return event
  })
  const byAdults = filteredData.filter((event) => {
    if (event.by == 2) return event
  })
  return (
    <div className="font-bold bg-white font-noto">
      <div className="flex w-full h-full">
        <div className="p-10 text-4xl">
          {/* <button onClick={() => console.log(filteredData)}>Click</button> */}
          <div className="flex">
            <p className="pr-2 text-7xl font-nimbus">
              {filteredData.length}
              <span className="text-4xl font-noto"> การประท้วง</span>
            </p>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/fire_1f525.png"
              alt="fire"
              width={40}
              className="self-center -mt-3"
            />
          </div>
          <div className="flex">
            <p className="pr-2 text-5xl font-nimbus">
              {byYoungAdults.length}
              <span className="text-4xl font-noto"> นำโดยเยาวชน</span>
            </p>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/singer_1f9d1-200d-1f3a4.png"
              alt="fire"
              width={40}
              className="self-center -mt-3"
            />
          </div>
          <div className="flex">
            <p className="pr-2 text-5xl font-nimbus">
              {byAdults.length}
              <span className="text-4xl font-noto"> นำโดยประชาชน</span>
            </p>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/superhero_1f9b8.png"
              alt="fire"
              width={40}
              className="self-center -mt-3"
            />
          </div>
        </div>
      </div>
      <div className="m-auto font-normal">
        {filteredData.map((event) => (
          <button
            key={event.id}
            onClick={(e) => {
              e.preventDefault()
              setEmojiSelect(event)
              setViewport({
                latitude: event.coordinates.lat,
                longitude: event.coordinates.lng,
                zoom: 6.5,
                minZoom: 5,
                width: '50vw',
                height: '100vh',
                transitionDuration: 1000,
                transitionInterpolator: new FlyToInterpolator(),
                transitionEasing: easeCubic,
              })
            }}
            className="w-full px-10 mb-2 font-bold text-left transition ease-in hover:text-gray-500 focus:outline-none"
          >
            <div className="flex">
              {emoji(event)}
              <span className="w-1"></span>
              {event.name}
            </div>
          </button>
        ))}
        {/* </div> */}
      </div>
      {/* <button onClick={() => console.log(selectedRegion)}>Click</button> */}
    </div>
  )
}
export default Brief
