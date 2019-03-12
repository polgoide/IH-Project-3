import React from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

class Logout extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/auth/logout", {
        withCredentials: true
      })
      .then(res => {
        console.log("Logged out")
      })
  }
  render() {
    return <Redirect to="/" />
  }
}
export default Logout
