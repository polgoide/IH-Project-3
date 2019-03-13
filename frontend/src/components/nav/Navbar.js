import React, { Component } from "react"
import Item from "./Item"
import Logo from "./Logo"
import { Input } from "antd"
import "./index.css"
import axios from "axios"
import { withRouter } from "react-router-dom"
const Search = Input.Search

class Navbar extends Component {
  state = {
    isLogged: false,
    menu_class: "",
    search: ""
  }
  checkLogged = () => {
    let loggedUrl = "http://localhost:3000/auth/loggedin"
    axios
      .get(loggedUrl, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true, user: res.data.user }, state => {})
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
  searchQuery = e => {
    let url = "http://localhost:3000/search"
    let query = e.target.value
    axios.post(url, { query }).then(res => {
      this.props.history.push(`/trabajos/?query=${res.data.query}`)
    })
  }

  render() {
    let { isLogged } = this.state
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      <div>
        <div className={top_menu_class}>
          <Logo text="Trabajo cerca" />
          <div className="top-menu-icon" onClick={this.setToggleTopMenuClass}>
            <span role="img" aria-label="menu">
              🍔
            </span>
          </div>
          <div className="left">
            <Search
              placeholder="Busca por zona, empresa..."
              onPressEnter={this.searchQuery}
              enterButton
              name="query"
            />
          </div>
          {isLogged ? (
            <div className="right">
              <Item text="Nueva vacante" url="/nuevo" />
              <Item text="Logout" url="/logout" />
            </div>
          ) : (
            <div className="right">
              <Item text="Crear cuenta" url="/signup" />
              <Item text="Entrar" url="/login" />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
