const FormRow = ({ type, name, value, handleChange, labelText, id }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
        id={id}
      />
    </div>
  )
}

export default FormRow
