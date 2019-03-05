import React from "react"
import axios from "axios"
import Map from "./Map"
import Progress from "./Progress"
import picUpload from "./Upload"
import ConfirmationForm from "./Form"

class MasterForm extends React.Component {
  state = {
    current: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  render() {
    let { current } = this.state
    return (
      <section>
        <h2>Crear una nueva vacante</h2>
        <Progress current={current} />
        <picUpload />
        <Map />
        <ConfirmationForm />
      </section>
    )
  }
}

export default MasterForm
