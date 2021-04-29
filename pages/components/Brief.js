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
          <h1>
            <span className="text-7xl ">{filteredData.length}</span> การประท้วง
            🔥
          </h1>
          <h1>
            <span className="text-5xl ">{byYoungAdults.length}</span>{' '}
            นำโดยเยาวชน 🧑‍🎤
          </h1>
          <h1>
            <span className="text-5xl ">{byAdults.length}</span> นำโดยประชาชน 🦸
          </h1>
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
            <span className="pr-2 text-xl">{emoji(event)}</span>
            {event.name}
          </button>
        ))}
        {/* </div> */}
      </div>
      {/* <button onClick={() => console.log(selectedRegion)}>Click</button> */}
    </div>
  )
}
export default Brief
