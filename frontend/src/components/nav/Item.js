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
      <a href={this.url} title={this.text}>
        {this.text}
      </a>
    )
  }
}

export default Item
