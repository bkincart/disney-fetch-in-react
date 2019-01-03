import React from 'react'

const InputField = props => {
  return(
    <div>
      <label>{props.label}</label>
      <input type='text' name={props.name} value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default InputField
