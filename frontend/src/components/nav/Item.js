import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Item extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
    this.url = props.url
  }

  render() {
    return (
      <Link to={this.url} title={this.text}>
        {this.text}
      </Link>
    )
  }
}

export default Item
