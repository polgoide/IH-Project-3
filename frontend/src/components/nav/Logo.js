import React, { Component } from "react"

import "./index.css"

class Logo extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }

  render() {
    return <div className="top-menu-lead">{this.text}</div>
  }
}

export default Logo
