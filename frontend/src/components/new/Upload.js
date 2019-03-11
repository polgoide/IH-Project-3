import React from "react"
import axios from "axios"
let url = "http://localhost:3000/upload"
let serviceUpload = axios.create({ url, withCredentials: true })

class PicUpload extends React.Component {
  state = {
    loading: false,
    image: {}
  }

  // componentDidUpdate() {
  //   const { updateCurrent } = this.props
  //   updateCurrent(1)
  // }

  handleChange = e => {
    let image = e.target.files[0]
    this.sendToServer(image, url)
      .then(res => {
        let ocrUrl = "https://api.ocr.space/parse/imageurl"
        this.props.handleImage(res.data.image)
        axios
          .get(
            ocrUrl +
              "?apikey=ab48b0421688957&language=spa&detectOrientation=true&url=" +
              res.data.api
          )
          .then(res => {
            this.props.handleImageText(res.data.ParsedResults[0].ParsedText)
            console.log(res.data.ParsedResults[0].ParsedText)
            this.props.updateCurrent(1)
          })

          .catch(e => console.log(e))
        this.setState({ image })
      })
      .catch(e => console.log(e))
  }

  sendToServer = (image, url) => {
    const formData = new FormData()
    formData.append("image", image)
    return serviceUpload
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        // this.props.history.push("/edit")
        console.log("sendtoserver", res)

        return res
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="form-container">
        <div>
          <p>Sube una imagen que ya has tomado o toma una ahora.</p>
          <input
            type="file"
            accept="image/*"
            onChange={this.handleChange}
            name="image"
          />
          <button className="btn btn-positive">Tomar foto</button>
        </div>
        <button className="btn btn-negative">No tengo imagen</button>
      </div>
    )
  }
}
export default PicUpload
