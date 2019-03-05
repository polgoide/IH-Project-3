import React, { Component } from "react"
import { Icon } from "antd"
import Item from "./Item"
import Logo from "./Logo"
import { Input } from "antd"
import "./index.css"
const Search = Input.Search

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu_class: ""
    }
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
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      <div>
        <div className={top_menu_class}>
          <Logo text="Logo" />
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
          </div>

          <Icon
            type="menu-unfold"
            className="top-menu-icon"
            onClick={this.setToggleTopMenuClass}
          />
          <div className="clear-fix" />
        </div>
      </div>
    )
  }
}

export default Navbar
