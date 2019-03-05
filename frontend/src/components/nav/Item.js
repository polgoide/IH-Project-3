import React, { Component } from "react"

import "./index.css"

class Item extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
    this.url = props.url
  }

  render() {
    return (
      <div className="top-menu-item">
        <a href={this.url} title={this.text}>
          {this.text}
        </a>
      </div>
    )
  }
}

export default Item
