import React from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

class ConfirmationForm extends React.Component {
  state = {
    job: {
      jobType: "Tipo de trabajo",
      gender: "Genero",
      address: {
        location: {}
      },
      company: {
        companyType: "Tipo de empresa"
      },
      apply: {}
    },
    isEnabled: false
  }
  componentWillMount() {
    let job = JSON.parse(localStorage.getItem("job"))
    job.image = this.props.image
    job.description = this.props.job.description
    this.setState({ job })
  }

  handleChange = e => {
    let { job } = this.state
    job[e.target.name] = e.target.value
    this.setState({ job })
  }
  handleSubmit = () => {
    const { job } = this.state
    let url = "http://localhost:3000/nuevo"
    axios
      .post(url, job, { withCredentials: true })
      .then(res => this.props.history.push(`/trabajo/${res.data.job._id}`))
      .catch(e => console.log(e))
  }

  render() {
    console.log(this.state.job)

    return (
      <section>
        <div className="form-container">
          <h3>Oferta de trabajo</h3>
          <p>Cuanto mas detallada la oferta este, mas aplicantes tendra.</p>

          <p>
            <label htmlFor="position">Posicion vacante</label>
            <input
              type="text"
              name="position"
              placeholder="Posicion vacante"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="jobType">Tipo de posicion</label>
            <select
              name="jobType"
              defaultValue={this.state.job.jobType}
              onChange={this.handleChange}
              required
            >
              <option value="Tipo de trabajo" disabled hidden>
                Tipo de trabajo
              </option>
              <option value="Ayudante de cocina">Ayudante de cocina</option>
              <option value="Ayudante de tienda">Ayudante de tienda</option>
              <option value="Ejecutivo de ventas">Ejecutivo de ventas</option>
              <option value="Empleado general">Empleado general</option>
              <option value="Gerente de tienda">Gerente de tienda</option>
              <option value="Lavaloza">Lavaloza</option>
              <option value="Mesero">Mesero</option>
              <option value="Personal de cocina">Personal de cocina</option>
              <option value="Personal de limpieza">Personal de limpieza</option>
              <option value="Recepcionista">Recepcionista</option>
            </select>
          </p>
          <p>
            <label htmlFor="gender">Preferencia de genero</label>
            <select
              name="gender"
              defaultValue={this.state.job.gender}
              onChange={this.handleChange}
            >
              <option value="" defaultValue disabled hidden>
                Genero
              </option>
              <option value="indistinto">Indistinto</option>
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
            </select>
          </p>

          <p>
            <label htmlFor="description">Descripcion de la vacante</label>
            <input
              type="text"
              name="description"
              placeholder="Descripcion de la vacante"
              onChange={this.handleChange}
              defaultValue={this.state.job.description}
            />
          </p>
          <p>
            <label htmlFor="requirements">Requisitos de la vacante</label>
            <input
              type="text"
              name="requirements"
              placeholder="Requisitos"
              onChange={this.handleChange}
            />
          </p>
          {this.state.job.image && <p>Imagen de la oferta:</p>}
          {this.state.job.image && (
            <img src={this.state.job.image} alt="Oferta de trabajo" />
          )}
        </div>
        <div className="form-container">
          <h3>Lugar de trabajo</h3>
          <p>Que empresa ofrece la vacante ?</p>
          <p>
            <label htmlFor="company.name">Nombre del a empresa</label>
            <input
              type="text"
              name="company.name"
              placeholder="Nombre de la empresa"
              required
              defaultValue={this.state.job.company.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="company.companyType">Tipo de empresa</label>
            <select
              name="company.companyType"
              defaultValue={this.state.job.company.companyType}
              onChange={this.handleChange}
              required
            >
              <option value="" defaultValue disabled hidden>
                Tipo de empresa
              </option>
              <option value="Hotel">Hotel</option>
              <option value="Tienda">Tienda</option>
              <option value="Restaurante">Restaurante</option>
              <option value="Otro">Otro</option>
            </select>
          </p>
          <p>
            <label htmlFor="address.direccion">Direccion</label>
            <input
              type="text"
              name="address.direccion"
              placeholder="Direccion"
              required
              defaultValue={this.state.job.address.direccion}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.alcaldia">Alcaldia</label>
            <input
              type="text"
              name="address.alcaldia"
              placeholder="Alcaldia"
              required
              defaultValue={this.state.job.address.alcaldia}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.ciudad">Ciudad</label>
            <input
              type="text"
              name="address.ciudad"
              placeholder="Ciudad"
              required
              defaultValue={this.state.job.address.ciudad}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.estado">Estado</label>
            <input
              type="text"
              name="address.estado"
              placeholder="Estado"
              required
              defaultValue={this.state.job.address.estado}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.pais">Pais</label>
            <input
              type="text"
              name="address.pais"
              placeholder="Pais"
              required
              defaultValue={this.state.job.address.pais}
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="form-container">
          <h3>Como aplicar</h3>
          <p>Elige por lo menos una de las formas para aplicar.</p>
          <input
            type="checkbox"
            name="apply.onsite"
            onChange={this.handleChange}
          />
          En persona
          <input
            type="email"
            name="apply.email"
            placeholder="Email"
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="apply.whatsapp"
            placeholder="Whatsapp"
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="apply.phone"
            placeholder="Telefono"
            required
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit} className="btn btn-positive">
          Confirmar
        </button>
      </section>
    )
  }
}

export default withRouter(ConfirmationForm)
