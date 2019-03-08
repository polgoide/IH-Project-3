import React, { Component } from "react"

export default function(type, name, placeholder, required) {
  console.log(type)
  return (
    <p>
      {placeholder}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </p>
  )
}
