import Head from 'next/head'
import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import * as civilData from './data/civil_data.json'
import Modal from './components/Modal'
import Explain from './components/Explain'

export default function Home() {
  const [viewport, setViewport] = useState({
    latitude: 13.4,
    longitude: 101.5,
    zoom: 5,
    width: '100vw',
    height: '100vh',
  })
  const [select, setSelect] = useState(null)
  const [bySelect, setBySelect] = useState(false)
  const returnType = (event) => {
    switch (event.type) {
      case 'a':
        return <span>🍊</span>
      case 'b':
        return <span>🦋</span>
      case 'c':
        return <span>🌟</span>
      case 'd':
        return <span>🐥</span>
      case 'e':
        return <span>💪</span>
      case 'f':
        return <span>🔥</span>
      case 'g':
        return <span>🩸</span>
      case 'h':
        return <span>✏️</span>
      case 'i':
        return <span>🌴</span>
      case 'j':
        return <span>✍️</span>
      case 'k':
        return <span>👩</span>
      case 'l':
        return <span>🌎</span>
      default:
        return <span>🚀</span>
    }
  }
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
  const byClass = bySelect
    ? 'absolute z-50 float-right w-12 h-12 m-5 bg-green-100 bg-opacity-80 border border-green-200 rounded-full right-14 sm:right-16 hover:border-green-400 focus:outline-none hover:cursor-pointer'
    : 'absolute z-50 float-right w-12 h-12 m-5 bg-white bg-opacity-80 border border-green-200 rounded-full right-14 sm:right-16 hover:border-green-400 focus:outline-none hover:cursor-pointer'
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
          setBySelect(!bySelect)
        }}
        className={byClass}
      >
        <span className="text-xl">🧑‍🦰</span>
      </button>
      <Explain></Explain>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGFsbWluaXN0ZXIiLCJhIjoiY2ttdzNiZnlxMDlpMTJvbXRlNWdxd3ZnaSJ9.Y5VScupvzmQFd5T7aeQYtw"
        mapStyle="mapbox://styles/palminister/cknh0ow9a0c5d17o3c2hezyjs"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {civilData.events.map((event) => (
          <Marker
            key={event.id}
            latitude={event.coordinates.lat}
            longitude={event.coordinates.lng}
          >
            <button
              className="text-2xl transition duration-200 transform cursor-pointer focus:outline-none hover:scale-150"
              onClick={(e) => {
                e.preventDefault()
                setSelect(event)
              }}
            >
              {bySelect ? byType(event) : returnType(event)}
            </button>
          </Marker>
        ))}
      </ReactMapGL>
      <Modal select={select} setSelect={setSelect}></Modal>
    </>
  )
}
