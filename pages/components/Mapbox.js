import ReactMapGL, { Marker } from 'react-map-gl'
import * as civilData from '../data/civil_data_filtered.json'
import React, { useState, useEffect } from 'react'
import returnType from './returnType'

const Mapbox = ({
  viewport,
  setViewport,
  byWhoSelect,
  setEmojiSelect,
  selectedMonth,
  selectedRegion,
}) => {
  const byType = (event) => {
    switch (event.by) {
      case 1:
        return '🧑‍🎤'
      case 2:
        return '🦸'
      case 3:
        return '🧑‍💼'
      default:
        return ''
    }
  }
  const emoji = returnType
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoicGFsbWluaXN0ZXIiLCJhIjoiY2ttdzNiZnlxMDlpMTJvbXRlNWdxd3ZnaSJ9.Y5VScupvzmQFd5T7aeQYtw"
      mapStyle="mapbox://styles/palminister/cknh0ow9a0c5d17o3c2hezyjs"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {civilData.events
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
                // console.log(event.region)
                return event
              }
            } else {
              return event
            }
          } else {
            return event
          }
        })
        .map((event) => (
          <Marker
            key={event.id}
            latitude={event.coordinates.lat}
            longitude={event.coordinates.lng}
          >
            <button
              className="text-2xl transition duration-200 transform cursor-pointer focus:outline-none hover:scale-150"
              onClick={(e) => {
                e.preventDefault()
                setEmojiSelect(event)
              }}
            >
              {byWhoSelect ? byType(event) : emoji(event)}
            </button>
          </Marker>
        ))}
    </ReactMapGL>
  )
}
export default Mapbox
