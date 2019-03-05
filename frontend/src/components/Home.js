import React from "react"
import axios from "axios"

class Home extends React.Component {
  state = {
    user: {},
    authorized: false
  }

  componentWillMount() {
    this.getPrivateData()
  }

  getPrivateData = () => {
    let url = "http://localhost:3000/auth/loggedin"
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.setState({ user: res.data })
      })
      .catch(e => {
        console.log(e)
        this.setState({ "user.name": "invitado" })
        // this.props.history.push("/login")
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
