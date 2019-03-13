import React from "react"
import axios from "axios"
import Camera from "react-html5-camera-photo"
import "react-html5-camera-photo/build/css/index.css"
let url = "https://trabajocerca.herokuapp.com/api/upload"
let serviceUpload = axios.create({ url, withCredentials: true })

class PicUpload extends React.Component {
  state = {
    loading: false,
    cameraOn: false,
    image: {},
    laimage: ""
  }

  handleChange = e => {
    this.setState({ loading: true })
    let image = e.target.files[0]
    this.sendPhoto(image)
  }

  sendPhoto(image) {
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
  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    console.log("takePhoto", dataUri)
    fetch(dataUri)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "File name")
        console.log(file)
        this.sendPhoto(file)
      })

    //
  }
  cameraOn = () => {
    let { cameraOn } = this.state
    if (cameraOn) {
      this.setState({ cameraOn: false })
    } else {
      this.setState({ cameraOn: true })
    }
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
        console.log("sendtoserver", res)

        return res
      })
      .catch(e => console.log(e))
  }

  render() {
    let { loading, cameraOn } = this.state
    return (
      <div className="form-container">
        <div>
          <p>
            Sube una imagen que ya has tomado o toma una ahora. Extraeremos el
            texto de la imagen para que no tengas que escribir tanto :)
          </p>
          {loading && <p className="loading">Subiendo la imagen</p>}
          <input
            type="file"
            accept="image/*"
            onChange={this.handleChange}
            name="image"
          />
          {cameraOn && (
            <Camera
              onTakePhoto={dataUri => {
                this.onTakePhoto(dataUri)
              }}
            />
          )}

          <button className="btn btn-positive" onClick={this.cameraOn}>
            Tomar foto
          </button>
        </div>
      </div>
    )
  }
}
export default PicUpload
