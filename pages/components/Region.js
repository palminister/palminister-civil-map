import * as d3 from 'd3'
import React, { useEffect } from 'react'
import * as regionData from '../data/region.json'

const Region = ({ selectedRegion, setSelectedRegion }) => {
  const createSvg = () => {
    return d3
      .select('#bubble')
      .append('svg')
      .attr('width', 280)
      .attr('height', 280)
    //   .attr('style', 'border: thin black solid')
  }
  const drawChart = (svg) => {
    var g = svg
      .selectAll(null)
      .data(regionData.data)
      .enter()
      .append('g')
      .attr('transform', function (d) {
        return 'translate(' + [d.x, d.y] + ')'
      })

    g.append('circle')
      .attr('r', function (d) {
        return d.r
      })
      .attr('fill', function (d) {
        return d.color
      })
      .attr('stroke', function (d) {
        return d.border
      })
      .on('click', clicked)
      .on('mouseover', function (d) {
        d3.select(this).style('cursor', 'pointer')
      })

    g.append('text')
      .attr('dy', function (d) {
        return d.r / ((d.r * 25) / 100)
      })
      .attr('text-anchor', 'middle')
      .attr('font-size', 15)
      .text(function (d) {
        return d.name
      })
  }
  function clicked(d, i) {
    if (!d3.select(this).classed('selected')) {
      d3.select(this).classed('selected', true)
      d3.select(this).transition().style('fill', '#A7F3D0')
      //   console.log('name', i.name)
      setSelectedRegion(() => [...selectedRegion, i.name])
      selectedRegion[selectedRegion.length] = i.name
    } else {
      d3.select(this).classed('selected', false)
      d3.select(this).transition().style('fill', this.color)
      selectedRegion.splice(selectedRegion.indexOf(i.name), 1)
      setSelectedRegion(() => [...selectedRegion])
    }
  }

  useEffect(() => {
    const svg = createSvg()
    drawChart(svg)
  }, [])
  return (
    <div className="font-bold bg-white font-noto">
      <div className="flex p-10">
        <h1 className="pr-3 text-4xl">เลือกภูมิภาค</h1>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/world-map_1f5fa-fe0f.png"
          alt="world-map"
          width={40}
          className="self-center"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="m-auto font-bold">
          <div id="bubble"></div>
        </div>
      </div>
      {/* <button onClick={() => console.log(selectedRegion)}>Click</button> */}
    </div>
  )
}
export default Region
