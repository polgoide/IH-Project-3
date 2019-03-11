import React, { Component } from "react"
import { Icon } from "antd"
import Item from "./Item"
import Logo from "./Logo"
import { Input } from "antd"
import "./index.css"
import axios from "axios"
const Search = Input.Search

class Navbar extends Component {
  state = {
    isLogged: false,
    menu_class: ""
  }
  checkLogged = () => {
    let loggedUrl = "http://localhost:3000/auth/loggedin"
    axios
      .get(loggedUrl, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        this.setState({ isLogged: true, user: res.data.user })
      })
      .catch(e => console.log(e))
  }
  componentDidMount() {
    this.checkLogged()
  }
  setToggleTopMenuClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled"
      })
    } else {
      this.setState({
        menu_class: ""
      })
    }
  }

  render = () => {
    let isLogged = this.state
    let top_menu_class = `top-menu ${this.state.menu_class}`
    if (isLogged) {
      return (
        <div>
          <div className={top_menu_class}>
            <Logo text="Trabajo cerca" />
            <div className="left">
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
            <div className="right">
              <Item text="Nueva vacante" url="/nuevo" />
              <Item text="Logout" url="/logout" />
              <Icon
                type="menu-unfold"
                className="top-menu-icon"
                onClick={this.setToggleTopMenuClass}
              />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={top_menu_class}>
            <Logo text="Trabajo cerca" />
            <div className="left">
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
            <div className="right">
              <Item text="Nueva vacante" url="/nuevo" />
              <Item text="Crear cuenta" url="/signup" />
              <Item text="Entrar" url="/login" />
              <Icon
                type="menu-unfold"
                className="top-menu-icon"
                onClick={this.setToggleTopMenuClass}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Navbar
