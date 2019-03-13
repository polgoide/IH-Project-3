import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Item extends Component {
  render() {
    let { url, text } = this.props
    return (
      <Link to={url} title={text}>
        {text}
      </Link>
    )
  }
}

export default Item
