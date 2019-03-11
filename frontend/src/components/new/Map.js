import React, { Component } from "react"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import mapboxgl from "mapbox-gl"
let map

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A"

class Map extends Component {
  state = {
    lng: -99.4238064,
    lat: 19.300519,
    zoom: 8,
    job: {
      address: {
        location: {}
      },
      company: {}
    }
  }

  componentDidMount() {
    const { lng, lat, zoom, job } = this.state
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: "mx"
    })
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    })

    map.addControl(geocoder)
    geocoder.on("result", e => {
      let sitio = e.result
      job.address.location.coords = sitio.geometry.coordinates || ""
      job.address.location.lng = sitio.geometry.coordinates[0] || ""
      job.address.location.lat = sitio.geometry.coordinates[1] || ""
      if (sitio.place_type[0] === "poi") {
        job.company.name = sitio.text || ""
        job.address.direccion = sitio.properties.address || ""
      } else if (sitio.place_type[0] === "address") {
        job.address.direccion = sitio.text || "" + sitio.address || ""
      }
      for (let i = 0; i < sitio.context.length; i++) {
        if (/postcode.*/.test(sitio.context[i].id)) {
          job.address.postalCode = sitio.context[i].text
        } else if (/locality.*/.test(sitio.context[i].id)) {
          job.address.alcaldia = sitio.context[i].text
        } else if (/place.*/.test(sitio.context[i].id)) {
          job.address.ciudad = sitio.context[i].text
        } else if (/region.*/.test(sitio.context[i].id)) {
          job.address.estado = sitio.context[i].text
        } else if (/country.*/.test(sitio.context[i].id)) {
          job.address.pais = sitio.context[i].text
        }
      }
      this.setState({
        job
      })

      localStorage.setItem("job", JSON.stringify(job))
    })
  }

  render() {
    const { updateCurrent } = this.props
    return (
      <div className="form-container">
        <h4>Lugar de trabajo</h4>
        <p>
          Escoge en el mapa el negocio que esta contratando para esta posicion.
          Puedes buscar por el nombre del negocio o la calle y el numero.
        </p>
        <div
          style={{ width: "100%", height: "300px" }}
          ref={e => (this.mapContainer = e)}
        />
        <button onClick={() => updateCurrent(2)} className="btn btn-positive">
          Confirmar
        </button>
      </div>
    )
  }
}

export default Map
