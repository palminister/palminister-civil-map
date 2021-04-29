import Head from 'next/head'
import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl'
// import * as civilData from './data/civil_data.json'
import Modal from './components/Modal'
import Explain from './components/Explain'
import Mapbox from './components/Mapbox'
import { FlyToInterpolator } from 'react-map-gl'
import { easeCubic } from 'd3-ease'
import Calendar from './components/Calendar'
import Arrow from './components/Arrow'
import Region from './components/Region'
import Brief from './components/Brief'

export default function Home() {
  const [emojiSelect, setEmojiSelect] = useState(null)
  const [byWhoSelect, setbyWhoSelect] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedRegion, setSelectedRegion] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 13.4,
    longitude: 101.5,
    minZoom: 5,
    width: '50vw',
    height: '100vh',
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: easeCubic,
  })

  const byClass = byWhoSelect
    ? 'absolute z-50 float-right w-12 h-12 m-5 bg-green-300 bg-opacity-70 border border-green-200 rounded-full right-14 sm:right-16 hover:border-green-400 focus:outline-none hover:cursor-pointer'
    : 'absolute z-50 float-right w-12 h-12 m-5 bg-white bg-opacity-10 border border-green-200 rounded-full right-14 sm:right-16 hover:border-green-400 focus:outline-none hover:cursor-pointer'
  return (
    <>
      <Head>
        <title>CIVIL MOVEMENT MAP</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>"
        ></link>
        <link rel="preconnect" href="https://api.mapbox.com"></link>
        <meta
          name="description"
          content="CIVIL MOVEMENT 2020 (ELECT) MAP, by Palminister"
        ></meta>
      </Head>
      <h1 className="absolute z-10 m-3 mt-8 ml-8 font-mono font-bold tracking-wider bg-white bg-opacity-80 text-md md:text-lg">
        CIVIL MOVEMENT 2020
      </h1>
      <button
        onClick={(e) => {
          e.preventDefault()
          setbyWhoSelect(!byWhoSelect)
        }}
        className={byClass}
      >
        <span className="text-xl">🧑‍🦰</span>
      </button>
      <Explain></Explain>
      <Modal emojiSelect={emojiSelect} setEmojiSelect={setEmojiSelect}></Modal>
      <div className="absolute w-1/2 h-full overflow-hidden bg-gray-50">
        {/* bg-green-300 */}
        <div className="flex w-full h-full">
          <div className="relative w-11/12 m-auto overflow-y-auto align-middle bg-white rounded-lg shadow-xl h-4/6">
            <div className={currentPage === 0 ? 'visible' : 'hidden'}>
              <Calendar
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              ></Calendar>
            </div>
            <div className={currentPage === 1 ? 'visible' : 'hidden'}>
              <Region
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              ></Region>
            </div>
            <div className={currentPage === 2 ? 'visible' : 'hidden'}>
              <Brief
                setViewport={setViewport}
                selectedMonth={selectedMonth}
                selectedRegion={selectedRegion}
                setEmojiSelect={setEmojiSelect}
              ></Brief>
            </div>

            {/* {currentPage === 0 ? (
              <Calendar
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              ></Calendar>
            ) : currentPage === 1 ? (
              <Region></Region>
            ) : null} */}

            {/* <Arrow
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Arrow> */}
            <Arrow
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              selectedMonth={selectedMonth}
              setViewport={setViewport}
            ></Arrow>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* bg-red-400 */}
        <Mapbox
          viewport={viewport}
          setViewport={setViewport}
          byWhoSelect={byWhoSelect}
          setEmojiSelect={setEmojiSelect}
          selectedMonth={selectedMonth}
          selectedRegion={selectedRegion}
        ></Mapbox>
      </div>
    </>
  )
}
