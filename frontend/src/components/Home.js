import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Home extends React.Component {
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
    console.log(this.props)
    let url = "http://localhost:3000/trabajos"
    axios
      .get(url + this.props.location.search, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        this.setState({ jobs: res.data })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    let { jobs } = this.state
    return (
      <div>
        <header className="cover">
          <h2>Encuentra trabajo en CDMX</h2>
          <p>Sin colas, sé el primero en aplicar.</p>
        </header>
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
