import React from "react"
import { Steps } from "antd"

const Step = Steps.Step

export default function({ current }) {
  console.log("Step:", current)
  return (
    <Steps size="small" current={current}>
      <Step title="Sube la oferta" description="Toma una foto del cartel" />
      <Step
        title="Indica la empresa"
        description="Indica donde tomaste la foto"
      />
      <Step
        title="Confirma los detalles"
        description="This is a description."
      />
    </Steps>
  )
}
