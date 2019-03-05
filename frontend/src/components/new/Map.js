import React, { Component } from "react"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A"

class Map extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 1.5
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    })
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
    console.log(geocoder)
    map.addControl(geocoder)
    geocoder.on("result", e => console.log(e))
  }

  render() {
    return (
      <div
        style={{ width: "400px", height: "300px" }}
        ref={e => (this.mapContainer = e)}
      />
    )
  }
}

export default Map
