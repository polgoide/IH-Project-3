import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Logo extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }

  render() {
    return (
      <div className="top-menu-lead">
        <Link to="/">{this.text}</Link>
      </div>
    )
  }
}

export default Logo
