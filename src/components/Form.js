import React from 'react'
import { BsCheck } from 'react-icons/bs'

const handleFormChange = (e, updateEmployee, setUpdateEmployee) => {
  const { target } = e
  const name = target.name
  const value = target.type === 'checkbox' ? target.checked : target.value

  const updateNewEmployee = { ...updateEmployee, [name]: value }
  setUpdateEmployee(updateNewEmployee)
}

export const Form = ({ employee, setEmployee, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, employee['id'])}>
      <label>
        Name:
        <input
          name='name'
          type='text'
          value={employee.name}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
          required
        ></input>
      </label>
      <label>
        Profession:
        <input
          name='profession'
          type='text'
          value={employee.profession}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
          required
        ></input>
      </label>
      <label>
        Color:
        <input
          name='color'
          type='text'
          value={employee.color}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
          required
        ></input>
      </label>
      <label>
        City:
        <input
          name='city'
          type='text'
          value={employee.city}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
          required
        ></input>
      </label>
      <label>
        Branch:
        <input
          name='branch'
          type='text'
          value={employee.branch}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
          required
        ></input>
      </label>
      <label>
        Assigned:
        <input
          name='assigned'
          type='checkbox'
          checked={employee.assigned}
          onChange={(e) => handleFormChange(e, employee, setEmployee)}
        ></input>
      </label>
      <button type='submit' className='add'>
        <BsCheck />
      </button>
    </form>
  )
}
