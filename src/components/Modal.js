import React from 'react'
import { Form } from './Form'
export const Modal = ({
  employee,
  setEmployee,
  handleFormChange,
  handleSubmit,
}) => {
  return (
    <dialog id='modal'>
      <Form
        employee={employee}
        setEmployee={setEmployee}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      ></Form>
    </dialog>
  )
}
