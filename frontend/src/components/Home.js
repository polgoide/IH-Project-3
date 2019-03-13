import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import mapboxgl from "mapbox-gl"
let map

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A"

class Home extends React.Component {
  state = {
    user: {},
    totals: {
      jobType: [],
      address: {
        alcaldia: []
      },
      company: {
        name: [],
        companyType: []
      }
    },
    zoom: 12,
    jobs: [
      {
        address: {
          location: {}
        },
        company: {},
        apply: {}
      }
    ]
  }

  componentDidMount() {
    this.getJobs()
    this.getTotals("jobType")
    this.getTotals("address.alcaldia")
    this.getTotals("company.name")
    this.getTotals("company.companyType")
  }
  getJobs = () => {
    let url = "http://localhost:3000/trabajos"
    axios
      .get(url + this.props.location.search, { withCredentials: true })
      .then(res => {
        this.setState({ jobs: res.data })
        this.getMap()
      })
      .catch(e => {
        console.log(e)
      })
  }
  getTotals = field => {
    let url = "http://localhost:3000/totals?"
    axios
      .get(url + field, { withCredentials: true })
      .then(res => {
        const { totals } = this.state
        if (field === "address.alcaldia") {
          totals.address.alcaldia = res.data
        } else if (field === "company.name") {
          totals.company.name = res.data
        } else if (field === "company.companyType") {
          totals.company.companyType = res.data
        } else {
          totals[field] = res.data
        }

        this.setState({ totals })
      })
      .catch(e => {
        console.log(e)
      })
  }
  getMap() {
    const { lng, lat } = this.state.jobs[0].address.location
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: 12
    })
    this.setMarkers()
  }
  getMarker = (lng, lat, job, place, id) => {
    new mapboxgl.Marker({
      color: "red"
    })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          // .setHTML("<h3>" + job + "</h3><p>" + place + "</p>")
          .setHTML(
            "<a href='/trabajo/" +
              id +
              "'>" +
              "<h3>" +
              job +
              "</h3><p>" +
              place +
              "</p></a>"
          )
      )
      .addTo(map)
  }

  setMarkers = () => {
    const { jobs } = this.state
    jobs.forEach(j => {
      this.getMarker(
        j.address.location.lng,
        j.address.location.lat,
        j.position,
        j.company.name,
        j._id
      )
    })
  }
  render() {
    let { jobs, totals } = this.state
    return (
      <div>
        <header className="cover">
          <h2>Encuentra trabajo en CDMX</h2>
          <p>Sin colas, sé el primero en aplicar.</p>
        </header>
        <section className="container job-container">
          <div className="shortlink-container">
            Top vacantes:
            {totals.jobType.map((t, key) => {
              return (
                <Link
                  key={key}
                  to={`/trabajos/?jobType=${t._id}`}
                  className="shortlinks"
                >
                  {t._id} ({t.count})
                </Link>
              )
            })}
          </div>
          <div className="shortlink-container">
            Top zonas:
            {totals.address.alcaldia.map((t, key) => {
              return (
                <Link
                  key={key}
                  to={`/trabajos/?address.alcaldia=${t._id}`}
                  className="shortlinks"
                >
                  {t._id} ({t.count})
                </Link>
              )
            })}
          </div>
          <div className="shortlink-container">
            Top sectores:
            {totals.company.companyType.map((t, key) => {
              return (
                <Link
                  key={key}
                  to={`/trabajos/?company.companyType=${t._id}`}
                  className="shortlinks"
                >
                  {t._id} ({t.count})
                </Link>
              )
            })}
          </div>
          <div className="shortlink-container">
            Top empresas:
            {totals.company.name.map((t, key) => {
              return (
                <Link
                  key={key}
                  to={`/trabajos/?company.name=${t._id}`}
                  className="shortlinks"
                >
                  {t._id} ({t.count})
                </Link>
              )
            })}
          </div>
          <div
            style={{ width: "100%", height: "300px" }}
            ref={e => (this.mapContainer = e)}
          />
        </section>
        <h2 className="center">Ultimas vacantes</h2>
        <section className="container job-container">
          {jobs.map((b, key) => {
            return (
              <div key={key} className="job-card">
                <div>
                  <Link to={`/trabajo/${b._id}`}>
                    <img src={b.image} alt={b.position} />
                  </Link>
                </div>
                <div>
                  <h3>{b.company.name}</h3>
                  <p>
                    {" "}
                    <Link
                      to={`/trabajos/?address.alcaldia=${b.address.alcaldia}`}
                    >
                      {b.address.alcaldia}
                    </Link>
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}

export default Home
