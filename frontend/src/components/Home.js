import React from "react"
import axios from "axios"

class Home extends React.Component {
  state = {
    user: {},
    jobs: [{}]
  }

  componentDidMount() {
    let url = "http://localhost:3000/trabajos"
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        this.props.history.push("/")
      })
      .catch(e => {
        alert("nanai")
      })
  }

  render() {
    let { user } = this.state
    console.log("Usuario", user)
    return (
      <div>
        <h1>Hola {user.name}</h1>
      </div>
    )
  }
}

export default Home
