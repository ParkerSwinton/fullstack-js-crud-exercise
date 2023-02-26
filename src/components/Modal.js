import React from 'react'
import { BsX } from 'react-icons/bs'

export const Modal = ({ children }) => {
  const handleClose = () => {
    document.getElementById('modal').close()
  }
  return (
    <dialog id='modal'>
      <button type='button' className='delete close' onClick={handleClose}>
        <BsX />
      </button>
      <h2>Edit Employee</h2>
      {children}
    </dialog>
  )
}
