import React from 'react'

export const Table = ({ employees, handleDelete }) => {
  const headers = [
    'ID',
    'Name',
    'Code',
    'Profession',
    'Color',
    'City',
    'Branch',
    'Assigned',
    'Remove',
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
              <button type='button' onClick={() => handleDelete(employee.id)}>
                Del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
