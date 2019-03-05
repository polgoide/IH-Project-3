import React, { Component } from "react"
import "./App.css"
import Routes from "./Routes"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { Layout, Menu, Icon } from "antd"
import Navbar from "./components/nav/Navbar"

const { Header, Content, Footer, Sider } = Layout

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>

      // <div>
      //   <nav>
      //     <NavLink to="/">Logo</NavLink>
      //     {" | "}
      //     <NavLink to="/signup">Registrate</NavLink>
      //     {" | "}
      //     <NavLink to="/login">Inicia sesión</NavLink>
      //     <button
      //       onClick={() => {
      //         axios
      //           .get("http://localhost:3000/logout", { withCredentials: true })
      //           .then(res => {
      //             console.log(res)
      //           })
      //       }}
      //     >
      //       Cerrar sesión
      //     </button>
      //   </nav>
      //   <Routes />
      // </div>
    )
  }
}

export default App
