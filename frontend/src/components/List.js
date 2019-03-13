import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import mapboxgl from "mapbox-gl"
let map

class List extends React.Component {
  state = {
    user: {},
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
    let url = "https://trabajocerca.herokuapp.com/api/trabajos"
    axios
      .get(url + this.props.location.search, { withCredentials: true })
      .then(res => {
        document.title = "Tus trabajos cerca  de ti"
        this.setState({ jobs: res.data })
        this.getMap()
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
    let { jobs } = this.state
    return (
      <div>
        <h2 className="center">Últimas vacantes</h2>
        <section className="container job-container">
          <div
            style={{ width: "100%", height: "300px" }}
            ref={e => (this.mapContainer = e)}
          />
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
                  <p> {b.address.alcaldia}</p>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}

export default List
