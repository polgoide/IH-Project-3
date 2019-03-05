import React from "react"
import ReactDOM from "react-dom"
import mapboxgl from "mapbox-gl"
import * as geo from "@mapbox/react-geocoder"
// import MapboxGeocoder from "@mapbox/react-geocoder"
console.log(geo)
const token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"

mapboxgl.accessToken = token
class Map extends React.Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 1.5
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    })

    map.on("move", () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    )
  }
}

export default Map