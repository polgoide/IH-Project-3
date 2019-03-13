import React from "react"
import axios from "axios"

class Signup extends React.Component {
  state = {
    newUser: {},
    errors: {}
  }

  handleChange = e => {
    let { newUser, errors } = this.state
    newUser[e.target.name] = e.target.value
    //validate
    errors = {}
    if (newUser.password !== newUser.password2) errors.password = "no coinciden"
    this.setState({ newUser, errors })
  }

  sendToServer = () => {
    let { newUser } = this.state
    let url = "http://localhost:3000/auth/signup"
    axios
      .post(url, newUser)
      .then(res => {
        console.log("Nuevo usuario ? ", res)
        this.props.history.push("/login")
      })
      .catch(e => console.log(e))
  }

  render() {
    const { errors } = this.state
    return (
      <div className="container">
        <h2>Crea tu cuenta</h2>
        <div className="form-container">
          <input
            onChange={this.handleChange}
            placeholder="Email"
            name="email"
            type="email"
          />
          <br />
          <input
            onChange={this.handleChange}
            placeholder="Contrasena"
            name="password"
            type="password"
          />
          <br />
          <input
            onChange={this.handleChange}
            placeholder="Repite tu contrasena"
            name="password2"
            type="password"
          />

          <p style={{ color: "red" }}>{errors.password}</p>
          <button onClick={this.sendToServer} className="btn btn-positive">
            Crear cuenta
          </button>
        </div>
      </div>
    )
  }
}

export default Signup
