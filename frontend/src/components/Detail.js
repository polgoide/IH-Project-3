import React from "react"
import axios from "axios"
import mapboxgl from "mapbox-gl"
import { Link } from "react-router-dom"
let map

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A"

class Detail extends React.Component {
  state = {
    job: {
      address: {
        location: {}
      },
      company: {},
      apply: {
        onsite: ""
      }
    },
    zoom: 12
  }

  componentWillMount() {
    let url = "http://localhost:3000/vacante/"
    let { id } = this.props.match.params
    console.log(this.props.match.params)
    axios
      .get(url + id, { withCredentials: true })
      .then(res => {
        this.setState({ job: res.data })
        this.getMap()
      })
      .catch(e => {
        console.log(e)
      })
  }

  getMap() {
    const { lng, lat } = this.state.job.address.location
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: 14
    })
    new mapboxgl.Marker({
      color: "red"
    })
      .setLngLat([lng, lat])
      .addTo(map)
  }

  render() {
    let { job } = this.state
    return (
      <div className="container">
        <h2>{job.position}</h2>
        <p>
          En{" "}
          <Link to={`/trabajos/?address.alcaldia=${job.address.alcaldia}`}>
            {job.address.alcaldia}
          </Link>
          ,{" "}
          <Link to={`/trabajos/?address.ciudad=${job.address.ciudad}`}>
            {job.address.ciudad}
          </Link>
        </p>
        <div className="form-container">
          {job.description && <h3>Descripcion de la vacante</h3>}
          {job.jobType && (
            <p>
              Tipo de trabajo:
              <Link to={`/trabajos/?jobType=${job.jobType}`}>
                {job.jobType}
              </Link>
            </p>
          )}
          {job.description && <p>{job.description}</p>}
          {job.requirements && <h3>Requisitos</h3>}
          {job.requirements && <p>{job.requirements}</p>}
          <h3>Imagen de la vacante</h3>
          <img src={job.image} alt={job.position} />
        </div>
        <div className="form-container">
          <h3>Empresa</h3>
          <p>
            <Link to={`/trabajos/?company.name=${job.company.name}`}>
              {job.company.name}
            </Link>
          </p>
          {job.company.companyType && (
            <p>
              Tipo de empresa:{" "}
              <Link
                to={`/trabajos/?company.companyType=${job.company.companyType}`}
              >
                {job.company.companyType}
              </Link>
            </p>
          )}
          {job.address.direccion && <p>Direccion: {job.address.direccion}</p>}
          {job.address.alcaldia && (
            <p>
              Alcaldia:{" "}
              <Link to={`/trabajos/?address.alcaldia=${job.address.alcaldia}`}>
                {job.address.alcaldia}
              </Link>
            </p>
          )}
          {job.address.ciudad && (
            <p>
              Ciudad:{" "}
              <Link to={`/trabajos/?address.ciudad=${job.address.ciudad}`}>
                {job.address.ciudad}
              </Link>
            </p>
          )}
          {job.address.pais && <p>Pais: {job.address.pais}</p>}
          <div
            style={{ width: "100%", height: "300px" }}
            ref={e => (this.mapContainer = e)}
          />
        </div>
        <div className="form-container">
          <h3>Como aplicar</h3>
          {job.apply.onsite && <p>Presencialmente</p>}
          {job.apply.whatsapp && (
            <p>
              Por Whatsapp:{" "}
              <a href={`https://wa.me/${job.apply.whatsapp}`}>
                {job.apply.whatsapp}
              </a>
            </p>
          )}
          {job.apply.phone && (
            <p>
              Por telefono:{" "}
              <a href={`tel:${job.apply.phone}`}>{job.apply.phone}</a>
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default Detail
