import React from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

class Logout extends React.Component {
  componentDidMount() {
    axios
      .get("https://trabajocerca.herokuapp.com/auth/logout", {
        withCredentials: true
      })
      .then(res => {
        console.log("Logged out")
        window.location.replace("/")
      })
  }
  render() {
    return <Redirect to="/" />
  }
}
export default Logout
