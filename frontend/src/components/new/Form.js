import React from "react"
import axios from "axios"
// import InputField from "./Input"

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
      }
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
        <div className="form-container">
          <h3>Oferta de trabajo</h3>
          <p>Cuanto mas detallada la oferta este, mas aplicantes tendra.</p>

          <p>
            <label htmlFor="position">Posicion vacante</label>
            <input
              type="text"
              name="position"
              placeholder="Posicion vacante"
              required={true}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="position">Tipo de posicion</label>
            <select
              name="jobType"
              value={this.state.job.jobType}
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
              value={this.state.job.gender}
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
              required={true}
              onChange={this.handleChange}
              value={this.props.job.description}
            />
          </p>
          <p>
            <label htmlFor="requirements">Requisitos de la vacante</label>
            <input
              type="text"
              name="requirements"
              placeholder="Requisitos"
              required={true}
              onChange={this.handleChange}
            />
          </p>
          <p>Imagen de la oferta:</p>
          <img src={this.props.image} alt="Oferta de trabajo" />
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
              required={true}
              value={this.state.job.company.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="company.companyType">Tipo de empresa</label>
            <select
              name="company.companyType"
              value={this.state.job.company.companyType}
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
            <label htmlFor="address.direccion">Requisitos de la vacante</label>
            <input
              type="text"
              name="address.direccion"
              placeholder="Direccion"
              required={true}
              value={this.state.job.address.direccion}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.alcaldia">Alcaldia</label>
            <input
              type="text"
              name="address.alcaldia"
              placeholder="Alcaldia"
              required={true}
              value={this.state.job.address.alcaldia}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.ciudad">Ciudad</label>
            <input
              type="text"
              name="address.ciudad"
              placeholder="Ciudad"
              required={true}
              value={this.state.job.address.ciudad}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.estado">Estado</label>
            <input
              type="text"
              name="address.estado"
              placeholder="Estado"
              required={true}
              value={this.state.job.address.estado}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="address.pais">Pais</label>
            <input
              type="text"
              name="address.pais"
              placeholder="Pais"
              required={true}
              value={this.state.job.address.pais}
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
            name="apply.phone"
            placeholder="Telefono"
            required={true}
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

export default ConfirmationForm
