import React from "react"
import axios from "axios"
// import InputField from "./Input"

class ConfirmationForm extends React.Component {
  state = {
    job: {
      address: {
        location: {}
      },
      company: {}
    }
  }
  componentWillMount() {
    let job = JSON.parse(localStorage.getItem("job"))
    job.image = this.props.image
    this.setState({ job })
  }

  handleChange = e => {
    const { job } = this.state
    job[e.target.name] = e.target.value
    this.setState({ job })
    console.log(job)
  }
  handleSubmit = () => {
    const { job } = this.state
    let url = "http://localhost:3000/nuevo"
    axios
      .post(url, job, { withCredentials: true })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  render() {
    console.log(this.state)
    return (
      <section>
        <div>
          <h3>Oferta de trabajo</h3>
          <input
            type="text"
            name="position"
            placeholder="Posicion vacante"
            required={true}
            onChange={this.handleChange}
          />
          <img src={this.props.image} alt="Oferta de trabajo" />
          <input
            type="text"
            name="description"
            placeholder="Descripcion de la vacante"
            required={true}
            onChange={this.handleChange}
            value={this.props.job.description}
          />
          <input
            type="text"
            name="requirements"
            placeholder="Requisitos"
            required={true}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h3>Lugar de trabajo</h3>
          <input
            type="text"
            name="company.name"
            placeholder="Nombre de la empresa"
            required={true}
            value={this.state.job.company.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address.direccion"
            placeholder="Direccion"
            required={true}
            value={this.state.job.address.direccion}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address.alcaldia"
            placeholder="Alcaldia"
            required={true}
            value={this.state.job.address.alcaldia}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address.ciudad"
            placeholder="Ciudad"
            required={true}
            value={this.state.job.address.ciudad}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address.estado"
            placeholder="Estado"
            required={true}
            value={this.state.job.address.estado}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address.pais"
            placeholder="Pais"
            required={true}
            value={this.state.job.address.pais}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h3>Como aplicar</h3>
          <input
            type="email"
            name="apply.email"
            placeholder="Email"
            required={true}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="apply.whatsapp"
            placeholder="Whatsapp"
            required={true}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="apply.onsite"
            placeholder="En persona"
            required={true}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="apply.phone"
            placeholder="Telefono"
            required={true}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Confirmar</button>
      </section>
    )
  }
}

export default ConfirmationForm
