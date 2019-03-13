import React from "react"
import axios from "axios"

class Login extends React.Component {
  state = {
    auth: {}
  }

  handleChange = e => {
    let { auth } = this.state
    auth[e.target.name] = e.target.value
    this.setState({ auth })
  }

  sendToServer = () => {
    let { auth } = this.state
    let url = "http://localhost:3000/auth/login"
    axios
      .post(url, auth, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        window.location.replace("/")
      })
      .catch(e => {
        alert("nanai")
      })
  }

  render() {
    return (
      <div className="container">
        <h2>Entra con tu cuenta</h2>
        <div className="form-container">
          <input
            onChange={this.handleChange}
            placeholder="email"
            name="email"
            type="email"
          />
          <br />
          <input
            onChange={this.handleChange}
            placeholder="tu password"
            name="password"
            type="password"
          />
          <br />
          <button onClick={this.sendToServer} className="btn btn-positive">
            Iniciar
          </button>
        </div>
      </div>
    )
  }
}

export default Login
