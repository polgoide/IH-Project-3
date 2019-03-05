import React from "react"
import axios from "axios"
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Steps,
  AutoComplete
} from "antd"
import Map from "./Map"

const Step = Steps.Step
const { TextArea } = Input
const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

class ConfirmationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
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

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!")
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true })
    }
    callback()
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      )
    }
    this.setState({ autoCompleteResult })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

    // image: String,
    // posted_by: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // },
    // company: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Company"
    // },
    // address: {
    //   pais: String,
    //   estado: String,
    //   ciudad: String,
    //   alcaldia: String,
    //   colonia: String,
    //   direccion: String,
    //   location: { coords: [String], lat: String, lng: String }
    // },
    // apply: {
    //   email: String,
    //   phone: String,
    //   whatsapp: String,
    //   onsite: String
    // },
    // active: {
    //   type: Boolean,
    //   default: true
    // },
    // slug: String
    let { current } = this.state
    return (
      <section className="container">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Posicion">
            {getFieldDecorator("position", {
              rules: [
                {
                  type: "text"
                },
                {
                  required: true,
                  message: "Please input the position!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Descripcion">
            <TextArea rows={3} name="description" />
          </Form.Item>
          <Form.Item label="Requerimientos">
            <TextArea rows={3} name="requirements" />
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item
            label={
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Map />
        </Form>
      </section>
    )
  }
}

const WrappedConfirmationForm = Form.create({ name: "new_job" })(
  ConfirmationForm
)

export default WrappedConfirmationForm
