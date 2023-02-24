import React from 'react'

export const Form = ({ newEmployee, handleFormChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name='name'
          type='text'
          value={newEmployee['name']}
          onChange={handleFormChange}
          required
        ></input>
      </label>
      <label>
        Profession:
        <input
          name='profession'
          type='text'
          value={newEmployee['profession']}
          onChange={handleFormChange}
          required
        ></input>
      </label>
      <label>
        Color:
        <input
          name='color'
          type='text'
          value={newEmployee['color']}
          onChange={handleFormChange}
          required
        ></input>
      </label>
      <label>
        City:
        <input
          name='city'
          type='text'
          value={newEmployee['city']}
          onChange={handleFormChange}
          required
        ></input>
      </label>
      <label>
        Branch:
        <input
          name='branch'
          type='text'
          value={newEmployee['branch']}
          onChange={handleFormChange}
          required
        ></input>
      </label>
      <label>
        Assigned:
        <input
          name='assigned'
          type='checkbox'
          checked={newEmployee['assigned']}
          onChange={handleFormChange}
        ></input>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
