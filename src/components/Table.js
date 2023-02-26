import React from 'react'
import { BsTrash, BsPencil } from 'react-icons/bs'

export const Table = ({ employees, handleDelete, handleEdit }) => {
  const headers = [
    'ID',
    'Name',
    'Code',
    'Profession',
    'Color',
    'City',
    'Branch',
    'Assigned',
    'Edit',
    'Del',
  ]

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.code}</td>
            <td>{employee.profession}</td>
            <td style={{ color: employee.color, fontWeight: 'bold' }}>
              {employee.color}
            </td>
            <td>{employee.city}</td>
            <td>{employee.branch}</td>
            <td>{employee.assigned ? 'Yes' : 'No'}</td>
            <td>
              <button
                className='edit'
                type='button'
                onClick={() => handleEdit(employee.id)}
              >
                <BsPencil />
              </button>
            </td>
            <td>
              <button
                className='delete'
                type='button'
                onClick={() => handleDelete(employee.id)}
              >
                <BsTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
