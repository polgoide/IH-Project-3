import React from "react"
// import axios from "axios"
import Map from "./Map"
import Progress from "./Progress"
import PicUpload from "./Upload"
import ConfirmationForm from "./Form"

class MasterForm extends React.Component {
  state = {
    current: 0,
    image: {},
    job: {}
  }
  componentDidMount() {
    document.title = "Crea una nueva oferta de trabajo"
  }

  handleImage = image => {
    this.setState({ image })
    console.log(this.state.image)
  }
  handleImageText = text => {
    const { job } = this.state
    job.description = text
    this.setState({ job })
  }
  updateCurrent = value => {
    this.setState({ current: value })
  }

  render() {
    let { current, image, job } = this.state
    switch (current) {
      case 0:
        return (
          <div className="container">
            <h2>Crear una nueva vacante</h2>
            <Progress current={current} />
            <PicUpload
              updateCurrent={this.updateCurrent}
              handleImage={this.handleImage}
              handleImageText={this.handleImageText}
            />
          </div>
        )
      case 1:
        return (
          <div className="container">
            <h2>Crear una nueva vacante</h2>
            <Progress current={current} />
            <Map updateCurrent={this.updateCurrent} />
          </div>
        )
      case 2:
        return (
          <div className="container">
            <h2>Crear una nueva vacante</h2>
            <Progress current={current} />
            <ConfirmationForm
              updateCurrent={this.updateCurrent}
              image={image}
              job={job}
            />
          </div>
        )
      default:
        return null
    }
  }
}

export default MasterForm
